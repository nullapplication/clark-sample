import { MetricType } from '@prisma/client';

/**
 * Calculates the current usage totals from a collection of usage metrics
 * @param metrics Array of usage metrics with metric_type and value
 * @returns Record of usage totals by metric type
 */
export function calculateCurrentUsage(
   metrics: Array<{ metric_type: MetricType; value: number }>,
) {
   const usageByType: Record<string, { value: number; last_updated: string }> =
      {};

   // Group by metric type and sum values
   metrics.forEach((metric) => {
      if (!usageByType[metric.metric_type]) {
         usageByType[metric.metric_type] = {
            value: 0,
            last_updated: '2024-07-01T00:00:00.000Z',
         };
      }
      usageByType[metric.metric_type].value += metric.value;
   });

   return usageByType;
}
