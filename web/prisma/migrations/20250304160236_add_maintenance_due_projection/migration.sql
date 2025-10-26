-- CreateEnum
CREATE TYPE "RecurrencePattern" AS ENUM ('NONE', 'DAILY', 'WEEKLY', 'MONTHLY', 'QUARTERLY', 'YEARLY', 'CUSTOM');

-- AlterTable
ALTER TABLE "scheduled_maintenance_intervals" ADD COLUMN     "recurrence_days" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
ADD COLUMN     "recurrence_interval" INTEGER,
ADD COLUMN     "recurrence_months" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
ADD COLUMN     "recurrence_pattern" "RecurrencePattern" NOT NULL DEFAULT 'NONE';

-- CreateTable
CREATE TABLE "maintenance_due_projections" (
    "id" TEXT NOT NULL,
    "scheduled_maintenance_id" TEXT NOT NULL,
    "physical_inventory_id" TEXT NOT NULL,
    "aircraft_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "ata_code" TEXT,
    "task_number" TEXT,
    "status" "ScheduledMaintenanceStatus" NOT NULL,
    "priority" INTEGER,
    "maintenance_type" TEXT,
    "next_due_date" TIMESTAMP(3),
    "days_remaining" INTEGER,
    "is_overdue" BOOLEAN NOT NULL,
    "due_reason" TEXT,

    CONSTRAINT "maintenance_due_projections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "maintenance_due_metrics" (
    "id" TEXT NOT NULL,
    "maintenance_due_projection_id" TEXT NOT NULL,
    "scheduled_maintenance_interval_id" TEXT,
    "interval_type" "IntervalType" NOT NULL,
    "metric_type" "MetricType" NOT NULL,
    "interval_value" DOUBLE PRECISION NOT NULL,
    "tolerance_value" DOUBLE PRECISION,
    "last_performed_value" DOUBLE PRECISION,
    "last_performed_date" TIMESTAMP(3),
    "next_due_value" DOUBLE PRECISION,
    "next_due_date" TIMESTAMP(3),
    "remaining_value" DOUBLE PRECISION,
    "days_remaining" INTEGER,
    "is_overdue" BOOLEAN NOT NULL,

    CONSTRAINT "maintenance_due_metrics_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "maintenance_due_projections" ADD CONSTRAINT "maintenance_due_projections_scheduled_maintenance_id_fkey" FOREIGN KEY ("scheduled_maintenance_id") REFERENCES "scheduled_maintenance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "maintenance_due_projections" ADD CONSTRAINT "maintenance_due_projections_physical_inventory_id_fkey" FOREIGN KEY ("physical_inventory_id") REFERENCES "physical_inventory_items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "maintenance_due_projections" ADD CONSTRAINT "maintenance_due_projections_aircraft_id_fkey" FOREIGN KEY ("aircraft_id") REFERENCES "aircraft"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "maintenance_due_metrics" ADD CONSTRAINT "maintenance_due_metrics_maintenance_due_projection_id_fkey" FOREIGN KEY ("maintenance_due_projection_id") REFERENCES "maintenance_due_projections"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "maintenance_due_metrics" ADD CONSTRAINT "maintenance_due_metrics_scheduled_maintenance_interval_id_fkey" FOREIGN KEY ("scheduled_maintenance_interval_id") REFERENCES "scheduled_maintenance_intervals"("id") ON DELETE SET NULL ON UPDATE CASCADE;
