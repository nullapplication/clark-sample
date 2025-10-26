import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../prisma-client';

// todo: hardcoding the customer id for now for tenant isolation
const customerId = 'cm6sgh61g00070cjmh30y819q';

/**
 * Update usage metrics for an aircraft's inventory items
 */
export async function POST(
   req: NextRequest,
   props: { params: Promise<{ tail_number: string }> },
) {
   const params = await props.params;
   try {
      const tailNumber = params.tail_number.toUpperCase(); // Ensure uppercase for consistency

      // Parse request body
      const { flight_date, usage_metrics } = await req.json();
      const flightDate = new Date(flight_date);

      // Fetch aircraft by tail number
      const aircraft = await findAircraft(tailNumber);
      if (!aircraft) {
         return NextResponse.json(
            { error: 'Aircraft not found' },
            { status: 404 },
         );
      }

      // Process usage metrics for all inventory items
      const { updatedItems, createdMetrics } = await processUsageMetrics(
         usage_metrics,
         flightDate,
      );

      // Update aircraft's last flight date
      await updateAircraftLastFlightDate(aircraft.id, flightDate);

      return NextResponse.json({
         message: 'Aircraft usage updated',
         updatedItems,
         createdMetrics,
      });
   } catch (error) {
      console.error('Error updating aircraft usage:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}

/**
 * Find aircraft by tail number and customer ID
 */
async function findAircraft(tailNumber) {
   return prisma.aircraft.findUnique({
      where: {
         tail_number: tailNumber,
         customer_id: customerId,
      },
   });
}

/**
 * Update aircraft's last flight date
 */
async function updateAircraftLastFlightDate(aircraftId, flightDate) {
   return prisma.aircraft.update({
      where: { id: aircraftId },
      data: { last_flight_date: flightDate },
   });
}

/**
 * Process usage metrics for all inventory items
 */
async function processUsageMetrics(usageMetrics, flightDate) {
   const updatedItems = [];
   const createdMetrics = [];

   // Group metrics by inventory item for batch processing
   const metricsByInventory = groupMetricsByInventory(usageMetrics);

   // Process each inventory item's metrics
   for (const inventoryId in metricsByInventory) {
      const inventoryMetrics = metricsByInventory[inventoryId];

      // Get inventory item with its components and existing metrics
      const inventoryItem = await getInventoryItemWithRelations(inventoryId);
      if (!inventoryItem) continue;

      // Process metrics for this inventory item
      const { updatedItem, newMetrics } = await processInventoryItemMetrics(
         inventoryItem,
         inventoryMetrics,
         flightDate,
      );

      updatedItems.push(updatedItem);
      createdMetrics.push(...newMetrics);

      // Process metrics for child components that track usage with parent
      if (inventoryItem.components?.length > 0) {
         const childResults = await processChildComponentsMetrics(
            inventoryItem.components,
            inventoryMetrics,
            flightDate,
         );

         updatedItems.push(...childResults.updatedItems);
         createdMetrics.push(...childResults.createdMetrics);
      }
   }

   return { updatedItems, createdMetrics };
}

/**
 * Group metrics by inventory item ID
 */
function groupMetricsByInventory(metrics) {
   const metricsByInventory = {};

   for (const metric of metrics) {
      if (!metricsByInventory[metric.inventory_id]) {
         metricsByInventory[metric.inventory_id] = [];
      }
      metricsByInventory[metric.inventory_id].push(metric);
   }

   return metricsByInventory;
}

/**
 * Get inventory item with its components and existing metrics
 */
async function getInventoryItemWithRelations(inventoryId) {
   return prisma.physicalInventoryItem.findUnique({
      where: { id: inventoryId },
      include: {
         usage_metrics: {
            include: {
               penalties: true,
            },
         },
         components: {
            where: {
               track_usage_with_parent: true,
               deleted: false,
            },
            include: {
               usage_metrics: {
                  include: {
                     penalties: true,
                  },
               },
            },
         },
      },
   });
}

/**
 * Process metrics for a single inventory item
 */
async function processInventoryItemMetrics(inventoryItem, metrics, flightDate) {
   // Calculate current usage from existing metrics
   const currentUsage = calculateCurrentUsage(inventoryItem.usage_metrics);
   const createdMetrics = [];

   // Create and process each new metric
   for (const metric of metrics) {
      const { newMetric, updatedUsage } = await createAndProcessMetric(
         inventoryItem.id,
         metric,
         currentUsage,
         flightDate,
      );

      createdMetrics.push(newMetric);
      Object.assign(currentUsage, updatedUsage);
   }

   // Update the inventory item with new current usage
   const updatedItem = await prisma.physicalInventoryItem.update({
      where: { id: inventoryItem.id },
      data: { current_usage: currentUsage },
   });

   return { updatedItem, newMetrics: createdMetrics };
}

/**
 * Create a new metric and process any penalties
 */
async function createAndProcessMetric(
   inventoryId,
   metric,
   currentUsage,
   flightDate,
) {
   const { metric_type, value, penalties } = metric;
   const updatedUsage = { ...currentUsage };

   // Initialize usage for this metric type if not exists
   if (!updatedUsage[metric_type]) {
      updatedUsage[metric_type] = 0;
   }

   // Create the usage metric
   const newMetric = await prisma.usageMetric.create({
      data: {
         inventory_id: inventoryId,
         metric_type,
         value,
         recorded_at: flightDate,
      },
   });

   // Add the base value to current usage
   updatedUsage[metric_type] += value;

   // Process penalties if any
   if (penalties?.length > 0) {
      await processPenalties(
         newMetric.id,
         penalties,
         metric_type,
         value,
         updatedUsage,
      );
   }

   return { newMetric, updatedUsage };
}

/**
 * Process penalties for a metric
 */
async function processPenalties(
   metricId,
   penalties,
   metricType,
   baseValue,
   usageAccumulator,
) {
   for (const penalty of penalties) {
      const { event_type, penalty_factor } = penalty;
      const penalty_hours = baseValue * penalty_factor;

      // Create the penalty record
      await prisma.usagePenalty.create({
         data: {
            usage_metric_id: metricId,
            event_type,
            penalty_factor,
            penalty_hours,
         },
      });

      // Add penalty hours to usage accumulator
      usageAccumulator[metricType] += penalty_hours;
   }
}

/**
 * Process metrics for child components that track usage with parent
 */
async function processChildComponentsMetrics(
   components,
   parentMetrics,
   flightDate,
) {
   const updatedItems = [];
   const createdMetrics = [];

   for (const component of components) {
      // Get component's current usage
      const componentUsage = component.current_usage || {};

      // Process each metric for this component
      for (const metric of parentMetrics) {
         const { newMetric, updatedUsage } = await createAndProcessMetric(
            component.id,
            metric,
            componentUsage,
            flightDate,
         );

         createdMetrics.push(newMetric);
         Object.assign(componentUsage, updatedUsage);
      }

      // Update the component with new current usage
      const updatedComponent = await prisma.physicalInventoryItem.update({
         where: { id: component.id },
         data: { current_usage: componentUsage },
      });

      updatedItems.push(updatedComponent);
   }

   return { updatedItems, createdMetrics };
}

/**
 * Calculate current usage from existing metrics
 */
function calculateCurrentUsage(metrics) {
   const usage = {};

   for (const metric of metrics) {
      if (!usage[metric.metric_type]) {
         usage[metric.metric_type] = 0;
      }

      // Only count metrics that aren't corrected
      if (!metric.is_corrected) {
         usage[metric.metric_type] += metric.value;

         // Add penalty hours if any
         if (metric.penalties?.length > 0) {
            for (const penalty of metric.penalties) {
               usage[metric.metric_type] += penalty.penalty_hours;
            }
         }
      }
   }

   return usage;
}
