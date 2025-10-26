-- CreateEnum
CREATE TYPE "AircraftStatusEnum" AS ENUM ('ACTIVE', 'INACTIVE', 'MAINTENANCE', 'DECOMMISSIONED');

-- CreateEnum
CREATE TYPE "BusinessEntity" AS ENUM ('AIRCRAFT', 'COMPLIANCEREQUIREMENT', 'CUSTOMER', 'LOGBOOKENTRY', 'MAINTENANCEREQUEST', 'PRODUCT', 'PHYSICALINVENTORYITEM', 'PURCHASEORDER', 'PURCHASEORDERLINEITEM', 'SCHEDULEDMAINTENANCE', 'UNSCHEDULEDMAINTENANCE', 'SUPPLIER', 'USER', 'WORKORDER', 'WORKPERFORMED');

-- CreateEnum
CREATE TYPE "ComplianceRequirementType" AS ENUM ('AD', 'SB', 'INSPECTION', 'CERTIFICATION');

-- CreateEnum
CREATE TYPE "FiveStarRating" AS ENUM ('ONE', 'TWO', 'THREE', 'FOUR', 'FIVE');

-- CreateEnum
CREATE TYPE "LeasingEnum" AS ENUM ('OWNED', 'LEASED', 'UNDER_FINANCING');

-- CreateEnum
CREATE TYPE "MaintenanceRequestType" AS ENUM ('INSPECTION', 'REPAIR', 'OVERHAUL', 'MODIFICATION', 'UPGRADE', 'REPLACEMENT', 'ADJUSTMENT', 'TROUBLESHOOTING', 'OTHER');

-- CreateEnum
CREATE TYPE "MaintenenceRequestStatus" AS ENUM ('OPEN', 'IN_PROGRESS', 'RESOLVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "PurchaseOrderStatus" AS ENUM ('PENDING', 'APPROVED', 'ORDERED', 'RECEIVED', 'COMPLETED');

-- CreateEnum
CREATE TYPE "RegulationAuthority" AS ENUM ('FAA', 'EASA', 'CAA', 'TCAC', 'CASA', 'DGCA');

-- CreateEnum
CREATE TYPE "ScheduledMaintenanceStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'COMPLETED', 'DUESOON', 'OVERDUE');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'BILLING', 'INSPECTOR', 'MAINTENANCE', 'READONLY');

-- CreateEnum
CREATE TYPE "WorkOrderPriority" AS ENUM ('CRITICAL', 'HIGH', 'MEDIUM', 'LOW');

-- CreateEnum
CREATE TYPE "WorkOrderStatus" AS ENUM ('OPEN', 'IN_PROGRESS', 'COMPLETED', 'REJECTED');

-- CreateEnum
CREATE TYPE "WorkPerformedStatus" AS ENUM ('COMPLETE', 'INCOMPLETE', 'VERIFIED', 'REJECTED', 'BLOCKED');

-- CreateEnum
CREATE TYPE "UnscheduledMaintenanceStatusEnum" AS ENUM ('OPEN', 'IN_PROGRESS', 'DEFERRED', 'CLOSED', 'NON_COMPLIANT');

-- CreateEnum
CREATE TYPE "MELCategoryEnum" AS ENUM ('A', 'B', 'C', 'D', 'NEF');

-- CreateEnum
CREATE TYPE "DeferralStatusEnum" AS ENUM ('ACTIVE', 'EXPIRED');

-- CreateEnum
CREATE TYPE "ComplianceStatusEnum" AS ENUM ('PENDING', 'COMPLIANT', 'NON_COMPLIANT');

-- CreateEnum
CREATE TYPE "SeverityEnum" AS ENUM ('LOW', 'MODERATE', 'HIGH', 'GROUNDED');

-- CreateEnum
CREATE TYPE "FlightPhaseEnum" AS ENUM ('PREFLIGHT', 'TAXI', 'TAKEOFF', 'CRUISE', 'LANDING');

-- CreateEnum
CREATE TYPE "IntervalType" AS ENUM ('TimeBased', 'UsageBased');

-- CreateEnum
CREATE TYPE "MetricType" AS ENUM ('FLIGHT_HOURS', 'CYCLES', 'LANDINGS', 'STARTS', 'FUEL_BURN', 'ROTOR_HOURS');

-- CreateEnum
CREATE TYPE "PenaltyEventType" AS ENUM ('OVER_TORQUE', 'ROTOR_OVERSPEED', 'ENGINE_OVERTEMP', 'HIGH_G_LOAD', 'EXTENDED_HOVER', 'LOW_ROTOR_RPM');

-- CreateTable
CREATE TABLE "aircraft" (
    "id" TEXT NOT NULL,
    "tail_number" TEXT NOT NULL,
    "serial_number" TEXT,
    "model" TEXT,
    "manufacturer" TEXT,
    "year_of_manufacture" INTEGER,
    "category" TEXT,
    "registration_country" TEXT,
    "customer_id" TEXT,
    "base_of_operation_id" TEXT,
    "owner" TEXT,
    "operator" TEXT,
    "home_base_airport" TEXT,
    "status" "AircraftStatusEnum" NOT NULL DEFAULT 'ACTIVE',
    "last_flight_date" TIMESTAMP(3),
    "next_inspection_due" TIMESTAMP(3),
    "last_major_inspection" TIMESTAMP(3),
    "maintenance_program" TEXT,
    "airframe_hours" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "propeller_hours" DOUBLE PRECISION,
    "last_annual_inspection" TIMESTAMP(3),
    "last_100_hour_inspection" TIMESTAMP(3),
    "max_takeoff_weight" DOUBLE PRECISION,
    "max_fuel_capacity" DOUBLE PRECISION,
    "engine_model" TEXT,
    "engine_manufacturer" TEXT,
    "number_of_engines" INTEGER NOT NULL DEFAULT 1,
    "avionics_package" TEXT,
    "pressurization" BOOLEAN NOT NULL DEFAULT false,
    "is_ifr_certified" BOOLEAN NOT NULL DEFAULT false,
    "airworthiness_certificate_expiry" TIMESTAMP(3),
    "registration_expiry" TIMESTAMP(3),
    "insurance_policy_number" TEXT,
    "insurance_expiry" TIMESTAMP(3),
    "is_accelerated" BOOLEAN NOT NULL DEFAULT false,
    "leasing_status" "LeasingEnum" NOT NULL DEFAULT 'OWNED',
    "leasing_company" TEXT,
    "lease_expiry" TIMESTAMP(3),
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "airframe_physical_inventory_id" TEXT,

    CONSTRAINT "aircraft_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "aircraft_engine_manufacturers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "aircraft_engine_manufacturers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "aircraft_engine_models" (
    "id" TEXT NOT NULL,
    "manufacturer_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "aircraft_engine_models_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "aircraft_manufacturers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "aircraft_manufacturers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "aircraft_models" (
    "id" TEXT NOT NULL,
    "manufacturer_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "aircraft_models_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ata_codes" (
    "code" TEXT NOT NULL,
    "chapter" TEXT NOT NULL,
    "section" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ata_codes_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "attachments" (
    "id" TEXT NOT NULL,
    "entity_id" TEXT NOT NULL,
    "entity_type" "BusinessEntity" NOT NULL,
    "filename" TEXT NOT NULL,
    "file_url" TEXT NOT NULL,
    "uploaded_by" TEXT NOT NULL,
    "uploaded_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "attachments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "base_of_operations" (
    "id" TEXT NOT NULL,
    "customer_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "street1" TEXT NOT NULL,
    "street2" TEXT,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "notes" TEXT,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "base_of_operations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chat_messages" (
    "id" TEXT NOT NULL,
    "reply_to_message_id" TEXT,
    "from_user_id" TEXT,
    "to_user_id" TEXT,
    "session_id" TEXT,
    "message" TEXT NOT NULL,
    "prompt_request" TEXT,
    "prompt_response" TEXT,
    "chat_topic" TEXT,
    "sentiment" DOUBLE PRECISION DEFAULT 0,
    "is_ai_generated" BOOLEAN NOT NULL DEFAULT false,
    "is_system_message" BOOLEAN NOT NULL DEFAULT false,
    "ai_model" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "chat_messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "compliance_requirements" (
    "id" TEXT NOT NULL,
    "aircraft_id" TEXT,
    "model" TEXT,
    "manufacturer" TEXT,
    "compliance_type" "ComplianceRequirementType" NOT NULL,
    "regulation_authority" "RegulationAuthority" NOT NULL,
    "regulation_reference" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "due_date" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "compliance_requirements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customers" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "primary_email" TEXT NOT NULL,
    "primary_phone" TEXT NOT NULL,
    "primary_street1" TEXT NOT NULL,
    "primary_street2" TEXT,
    "primary_city" TEXT NOT NULL,
    "primary_state" TEXT NOT NULL,
    "primary_zip" TEXT NOT NULL,
    "primary_country" TEXT NOT NULL,
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "last_used_po_number" INTEGER NOT NULL DEFAULT 1,
    "last_used_unscheduled_maintenance_number" INTEGER NOT NULL DEFAULT 1,
    "last_used_wo_number" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customer_to_aircraft_map" (
    "customer_id" TEXT NOT NULL,
    "aircraft_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "customer_to_aircraft_map_pkey" PRIMARY KEY ("customer_id","aircraft_id")
);

-- CreateTable
CREATE TABLE "customer_to_product_map" (
    "customer_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "base_of_operation_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "customer_to_product_map_pkey" PRIMARY KEY ("customer_id","product_id")
);

-- CreateTable
CREATE TABLE "customer_to_supplier_map" (
    "customer_id" TEXT NOT NULL,
    "supplier_id" TEXT NOT NULL,
    "base_of_operation_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "customer_to_supplier_map_pkey" PRIMARY KEY ("customer_id","supplier_id")
);

-- CreateTable
CREATE TABLE "logbook_entries" (
    "id" TEXT NOT NULL,
    "aircraft_id" TEXT NOT NULL,
    "entry_date" TIMESTAMP(3) NOT NULL,
    "entry_type" TEXT NOT NULL,
    "entry_description" TEXT NOT NULL,
    "regulation_authority" "RegulationAuthority" NOT NULL,
    "regulation_reference" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "logbook_entries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "maintenance_requests" (
    "id" TEXT NOT NULL,
    "aircraft_id" TEXT NOT NULL,
    "base_of_operation_id" TEXT,
    "maintenance_type" "MaintenanceRequestType" NOT NULL,
    "description" TEXT NOT NULL,
    "recorded_by" TEXT NOT NULL,
    "recorded_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "MaintenenceRequestStatus" NOT NULL DEFAULT 'OPEN',
    "resolution_notes" TEXT,
    "resolved_by" TEXT,
    "resolved_at" TIMESTAMP(3),
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "maintenance_requests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "purchase_orders" (
    "id" TEXT NOT NULL,
    "order_number" TEXT NOT NULL,
    "customer_id" TEXT NOT NULL,
    "supplier_id" TEXT NOT NULL,
    "base_of_operation_id" TEXT,
    "status" "PurchaseOrderStatus" NOT NULL DEFAULT 'PENDING',
    "total_cost" DOUBLE PRECISION,
    "ordered_by" TEXT NOT NULL,
    "approved_by" TEXT,
    "ordered_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "received_at" TIMESTAMP(3),
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "purchase_orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "purchase_order_items" (
    "id" TEXT NOT NULL,
    "purchase_order_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "unit_price" DOUBLE PRECISION NOT NULL,
    "total_price" DOUBLE PRECISION NOT NULL,
    "received_quantity" DOUBLE PRECISION DEFAULT 0,
    "received_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "purchase_order_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "physical_inventory_items" (
    "id" TEXT NOT NULL,
    "customer_id" TEXT NOT NULL,
    "aircraft_id" TEXT,
    "base_of_operation_id" TEXT,
    "product_id" TEXT NOT NULL,
    "parent_id" TEXT,
    "number" TEXT NOT NULL,
    "name" TEXT,
    "serial_number" TEXT,
    "lot_number" TEXT,
    "description" TEXT,
    "unit_cost" DOUBLE PRECISION,
    "inventory_location_id" TEXT,
    "quantity" DOUBLE PRECISION NOT NULL DEFAULT 1,
    "unit_of_measure" TEXT DEFAULT 'EA',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "propagateUsage" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "physical_inventory_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsageMetric" (
    "id" TEXT NOT NULL,
    "inventory_id" TEXT NOT NULL,
    "metric_type" "MetricType" NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "recorded_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "correction_id" TEXT,
    "is_correction" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "UsageMetric_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsagePenalty" (
    "id" TEXT NOT NULL,
    "usage_metric_id" TEXT NOT NULL,
    "event_type" "PenaltyEventType" NOT NULL,
    "penalty_factor" DOUBLE PRECISION NOT NULL,
    "penalty_hours" DOUBLE PRECISION NOT NULL,
    "recorded_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UsagePenalty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "physical_inventory_locations" (
    "id" TEXT NOT NULL,
    "customer_id" TEXT NOT NULL,
    "base_of_operation_id" TEXT,
    "parent_id" TEXT,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "physical_inventory_locations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "part_number" TEXT NOT NULL,
    "manufacturer" TEXT,
    "model" TEXT,
    "quantity_in_stock" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "reorder_threshold" DOUBLE PRECISION,
    "category" TEXT,
    "sub_category" TEXT,
    "unit_price" DOUBLE PRECISION,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "scheduled_maintenance" (
    "id" TEXT NOT NULL,
    "physical_inventory_id" TEXT NOT NULL,
    "aircraft_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "ata_code" TEXT,
    "task_number" TEXT,
    "next_due_hours" DOUBLE PRECISION,
    "next_due_cycles" INTEGER,
    "next_due_landings" INTEGER,
    "next_due_date" TIMESTAMP(3),
    "projected_next_due" TIMESTAMP(3),
    "status" "ScheduledMaintenanceStatus" NOT NULL DEFAULT 'ACTIVE',
    "priority" INTEGER,
    "regulation_authority" "RegulationAuthority",
    "regulation_reference" TEXT,
    "estimated_downtime_hours" DOUBLE PRECISION,
    "estimated_cost" DOUBLE PRECISION,
    "actual_cost" DOUBLE PRECISION,
    "maintenance_type" TEXT,
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "scheduled_maintenance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ScheduledMaintenanceInterval" (
    "id" TEXT NOT NULL,
    "scheduled_maintenance_id" TEXT NOT NULL,
    "interval_type" "IntervalType" NOT NULL,
    "metric_type" "MetricType" NOT NULL,
    "interval_value" DOUBLE PRECISION NOT NULL,
    "tolerance_value" DOUBLE PRECISION,
    "adjusted_interval_value" DOUBLE PRECISION,
    "last_performed_value" DOUBLE PRECISION,
    "last_performed_date" TIMESTAMP(3),

    CONSTRAINT "ScheduledMaintenanceInterval_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "suppliers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "contact_person" TEXT,
    "primary_phone" TEXT,
    "primary_email" TEXT,
    "services_provided" TEXT,
    "is_mro" BOOLEAN NOT NULL DEFAULT false,
    "rating" "FiveStarRating",
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "suppliers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "supplier_to_product_map" (
    "supplier_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "supplier_to_product_map_pkey" PRIMARY KEY ("supplier_id","product_id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_to_customer_map" (
    "user_id" TEXT NOT NULL,
    "customer_id" TEXT NOT NULL,
    "role" "UserRole" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_to_customer_map_pkey" PRIMARY KEY ("user_id","customer_id")
);

-- CreateTable
CREATE TABLE "work_orders" (
    "id" TEXT NOT NULL,
    "aircraft_id" TEXT,
    "customer_id" TEXT,
    "base_of_operation_id" TEXT,
    "work_order_number" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "assigned_to" TEXT,
    "status" "WorkOrderStatus" NOT NULL DEFAULT 'OPEN',
    "priority" "WorkOrderPriority",
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completed_at" TIMESTAMP(3),
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "work_orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "work_performed" (
    "id" TEXT NOT NULL,
    "aircraft_id" TEXT NOT NULL,
    "scheduled_maintenance_id" TEXT,
    "unscheduled_maintenance_id" TEXT,
    "work_description" TEXT NOT NULL,
    "performed_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "performed_by" TEXT NOT NULL,
    "flight_hours_at_service" DOUBLE PRECISION NOT NULL,
    "engine_cycles_at_service" INTEGER NOT NULL,
    "landing_at_service" INTEGER NOT NULL,
    "status" "WorkPerformedStatus" NOT NULL DEFAULT 'COMPLETE',
    "verified_by" TEXT,
    "verified_at" TIMESTAMP(3),
    "labor_hours" DOUBLE PRECISION,
    "parts_used" JSONB,
    "total_cost" DOUBLE PRECISION,
    "regulation_authority" "RegulationAuthority",
    "regulation_reference" TEXT,
    "log_entry_reference" TEXT,
    "work_category" TEXT,
    "repeat_inspection_due" TIMESTAMP(3),
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "work_performed_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "unscheduled_maintenance" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "physical_inventory_id" TEXT,
    "aircraft_id" TEXT NOT NULL,
    "discovered_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reported_by" TEXT NOT NULL,
    "reported_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reported_location" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "ata_code" TEXT,
    "severity" "SeverityEnum" NOT NULL,
    "safety_impact" BOOLEAN NOT NULL DEFAULT false,
    "repeat_issue" BOOLEAN NOT NULL DEFAULT false,
    "flight_phase" "FlightPhaseEnum" NOT NULL,
    "aircraft_time" DOUBLE PRECISION,
    "engine_cycles" INTEGER,
    "landings" INTEGER,
    "status" "UnscheduledMaintenanceStatusEnum" NOT NULL DEFAULT 'OPEN',
    "assigned_to" TEXT,
    "deferred_until" TIMESTAMP(3),
    "corrective_action" TEXT,
    "resolved_by" TEXT,
    "resolved_date" TIMESTAMP(3),
    "parts_used" JSONB,
    "mel_cdl_deferral_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "unscheduled_maintenance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mel_cdl_deferrals" (
    "id" TEXT NOT NULL,
    "aircraft_id" TEXT NOT NULL,
    "unscheduled_maintenance_id" TEXT,
    "mel_reference_number" TEXT,
    "mel_category" "MELCategoryEnum",
    "cdl_reference_number" TEXT,
    "deferral_reason" TEXT,
    "deferral_status" "DeferralStatusEnum" NOT NULL DEFAULT 'ACTIVE',
    "deferral_approved_by" TEXT,
    "deferral_approval_date" TIMESTAMP(3),
    "mel_expiration_date" TIMESTAMP(3),
    "cdl_expiration_date" TIMESTAMP(3),
    "operational_limitations" TEXT,
    "alternate_procedures_required" BOOLEAN NOT NULL DEFAULT false,
    "required_pilot_briefing" BOOLEAN NOT NULL DEFAULT false,
    "compliance_status" "ComplianceStatusEnum" NOT NULL DEFAULT 'PENDING',
    "compliance_verified_by" TEXT,
    "compliance_verified_date" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "mel_cdl_deferrals_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "aircraft_tail_number_key" ON "aircraft"("tail_number");

-- CreateIndex
CREATE UNIQUE INDEX "aircraft_airframe_physical_inventory_id_key" ON "aircraft"("airframe_physical_inventory_id");

-- CreateIndex
CREATE UNIQUE INDEX "aircraft_engine_manufacturers_name_key" ON "aircraft_engine_manufacturers"("name");

-- CreateIndex
CREATE UNIQUE INDEX "aircraft_engine_models_manufacturer_id_name_key" ON "aircraft_engine_models"("manufacturer_id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "aircraft_manufacturers_name_key" ON "aircraft_manufacturers"("name");

-- CreateIndex
CREATE UNIQUE INDEX "aircraft_models_manufacturer_id_name_key" ON "aircraft_models"("manufacturer_id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "attachments_entity_id_entity_type_filename_key" ON "attachments"("entity_id", "entity_type", "filename");

-- CreateIndex
CREATE UNIQUE INDEX "customers_code_key" ON "customers"("code");

-- CreateIndex
CREATE UNIQUE INDEX "purchase_orders_order_number_key" ON "purchase_orders"("order_number");

-- CreateIndex
CREATE UNIQUE INDEX "physical_inventory_items_number_key" ON "physical_inventory_items"("number");

-- CreateIndex
CREATE UNIQUE INDEX "physical_inventory_locations_code_key" ON "physical_inventory_locations"("code");

-- CreateIndex
CREATE UNIQUE INDEX "physical_inventory_locations_name_key" ON "physical_inventory_locations"("name");

-- CreateIndex
CREATE UNIQUE INDEX "products_part_number_key" ON "products"("part_number");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "work_orders_work_order_number_key" ON "work_orders"("work_order_number");

-- CreateIndex
CREATE UNIQUE INDEX "unscheduled_maintenance_code_key" ON "unscheduled_maintenance"("code");

-- CreateIndex
CREATE UNIQUE INDEX "mel_cdl_deferrals_unscheduled_maintenance_id_key" ON "mel_cdl_deferrals"("unscheduled_maintenance_id");

-- AddForeignKey
ALTER TABLE "aircraft" ADD CONSTRAINT "aircraft_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aircraft" ADD CONSTRAINT "aircraft_airframe_physical_inventory_id_fkey" FOREIGN KEY ("airframe_physical_inventory_id") REFERENCES "physical_inventory_items"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aircraft_engine_models" ADD CONSTRAINT "aircraft_engine_models_manufacturer_id_fkey" FOREIGN KEY ("manufacturer_id") REFERENCES "aircraft_engine_manufacturers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aircraft_models" ADD CONSTRAINT "aircraft_models_manufacturer_id_fkey" FOREIGN KEY ("manufacturer_id") REFERENCES "aircraft_manufacturers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "base_of_operations" ADD CONSTRAINT "base_of_operations_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat_messages" ADD CONSTRAINT "chat_messages_from_user_id_fkey" FOREIGN KEY ("from_user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat_messages" ADD CONSTRAINT "chat_messages_to_user_id_fkey" FOREIGN KEY ("to_user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "compliance_requirements" ADD CONSTRAINT "compliance_requirements_aircraft_id_fkey" FOREIGN KEY ("aircraft_id") REFERENCES "aircraft"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_to_aircraft_map" ADD CONSTRAINT "customer_to_aircraft_map_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_to_aircraft_map" ADD CONSTRAINT "customer_to_aircraft_map_aircraft_id_fkey" FOREIGN KEY ("aircraft_id") REFERENCES "aircraft"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_to_product_map" ADD CONSTRAINT "customer_to_product_map_base_of_operation_id_fkey" FOREIGN KEY ("base_of_operation_id") REFERENCES "base_of_operations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_to_product_map" ADD CONSTRAINT "customer_to_product_map_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_to_product_map" ADD CONSTRAINT "customer_to_product_map_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_to_supplier_map" ADD CONSTRAINT "customer_to_supplier_map_base_of_operation_id_fkey" FOREIGN KEY ("base_of_operation_id") REFERENCES "base_of_operations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_to_supplier_map" ADD CONSTRAINT "customer_to_supplier_map_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_to_supplier_map" ADD CONSTRAINT "customer_to_supplier_map_supplier_id_fkey" FOREIGN KEY ("supplier_id") REFERENCES "suppliers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "logbook_entries" ADD CONSTRAINT "logbook_entries_aircraft_id_fkey" FOREIGN KEY ("aircraft_id") REFERENCES "aircraft"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "maintenance_requests" ADD CONSTRAINT "maintenance_requests_aircraft_id_fkey" FOREIGN KEY ("aircraft_id") REFERENCES "aircraft"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "maintenance_requests" ADD CONSTRAINT "maintenance_requests_base_of_operation_id_fkey" FOREIGN KEY ("base_of_operation_id") REFERENCES "base_of_operations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchase_orders" ADD CONSTRAINT "purchase_orders_base_of_operation_id_fkey" FOREIGN KEY ("base_of_operation_id") REFERENCES "base_of_operations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchase_orders" ADD CONSTRAINT "purchase_orders_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchase_orders" ADD CONSTRAINT "purchase_orders_supplier_id_fkey" FOREIGN KEY ("supplier_id") REFERENCES "suppliers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchase_order_items" ADD CONSTRAINT "purchase_order_items_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchase_order_items" ADD CONSTRAINT "purchase_order_items_purchase_order_id_fkey" FOREIGN KEY ("purchase_order_id") REFERENCES "purchase_orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "physical_inventory_items" ADD CONSTRAINT "physical_inventory_items_aircraft_id_fkey" FOREIGN KEY ("aircraft_id") REFERENCES "aircraft"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "physical_inventory_items" ADD CONSTRAINT "physical_inventory_items_base_of_operation_id_fkey" FOREIGN KEY ("base_of_operation_id") REFERENCES "base_of_operations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "physical_inventory_items" ADD CONSTRAINT "physical_inventory_items_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "physical_inventory_items" ADD CONSTRAINT "physical_inventory_items_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "physical_inventory_items" ADD CONSTRAINT "physical_inventory_items_inventory_location_id_fkey" FOREIGN KEY ("inventory_location_id") REFERENCES "physical_inventory_locations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "physical_inventory_items" ADD CONSTRAINT "physical_inventory_items_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "physical_inventory_items"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsageMetric" ADD CONSTRAINT "UsageMetric_inventory_id_fkey" FOREIGN KEY ("inventory_id") REFERENCES "physical_inventory_items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsageMetric" ADD CONSTRAINT "UsageMetric_correction_id_fkey" FOREIGN KEY ("correction_id") REFERENCES "UsageMetric"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsagePenalty" ADD CONSTRAINT "UsagePenalty_usage_metric_id_fkey" FOREIGN KEY ("usage_metric_id") REFERENCES "UsageMetric"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "physical_inventory_locations" ADD CONSTRAINT "physical_inventory_locations_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "physical_inventory_locations" ADD CONSTRAINT "physical_inventory_locations_base_of_operation_id_fkey" FOREIGN KEY ("base_of_operation_id") REFERENCES "base_of_operations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scheduled_maintenance" ADD CONSTRAINT "scheduled_maintenance_physical_inventory_id_fkey" FOREIGN KEY ("physical_inventory_id") REFERENCES "physical_inventory_items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scheduled_maintenance" ADD CONSTRAINT "scheduled_maintenance_aircraft_id_fkey" FOREIGN KEY ("aircraft_id") REFERENCES "aircraft"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScheduledMaintenanceInterval" ADD CONSTRAINT "ScheduledMaintenanceInterval_scheduled_maintenance_id_fkey" FOREIGN KEY ("scheduled_maintenance_id") REFERENCES "scheduled_maintenance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "supplier_to_product_map" ADD CONSTRAINT "supplier_to_product_map_supplier_id_fkey" FOREIGN KEY ("supplier_id") REFERENCES "suppliers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "supplier_to_product_map" ADD CONSTRAINT "supplier_to_product_map_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_to_customer_map" ADD CONSTRAINT "user_to_customer_map_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_to_customer_map" ADD CONSTRAINT "user_to_customer_map_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_orders" ADD CONSTRAINT "work_orders_aircraft_id_fkey" FOREIGN KEY ("aircraft_id") REFERENCES "aircraft"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_orders" ADD CONSTRAINT "work_orders_base_of_operation_id_fkey" FOREIGN KEY ("base_of_operation_id") REFERENCES "base_of_operations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_orders" ADD CONSTRAINT "work_orders_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_performed" ADD CONSTRAINT "work_performed_aircraft_id_fkey" FOREIGN KEY ("aircraft_id") REFERENCES "aircraft"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_performed" ADD CONSTRAINT "work_performed_log_entry_reference_fkey" FOREIGN KEY ("log_entry_reference") REFERENCES "logbook_entries"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_performed" ADD CONSTRAINT "work_performed_scheduled_maintenance_id_fkey" FOREIGN KEY ("scheduled_maintenance_id") REFERENCES "scheduled_maintenance"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_performed" ADD CONSTRAINT "work_performed_unscheduled_maintenance_id_fkey" FOREIGN KEY ("unscheduled_maintenance_id") REFERENCES "unscheduled_maintenance"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "unscheduled_maintenance" ADD CONSTRAINT "unscheduled_maintenance_physical_inventory_id_fkey" FOREIGN KEY ("physical_inventory_id") REFERENCES "physical_inventory_items"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "unscheduled_maintenance" ADD CONSTRAINT "unscheduled_maintenance_aircraft_id_fkey" FOREIGN KEY ("aircraft_id") REFERENCES "aircraft"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mel_cdl_deferrals" ADD CONSTRAINT "mel_cdl_deferrals_aircraft_id_fkey" FOREIGN KEY ("aircraft_id") REFERENCES "aircraft"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mel_cdl_deferrals" ADD CONSTRAINT "mel_cdl_deferrals_unscheduled_maintenance_id_fkey" FOREIGN KEY ("unscheduled_maintenance_id") REFERENCES "unscheduled_maintenance"("id") ON DELETE SET NULL ON UPDATE CASCADE;
