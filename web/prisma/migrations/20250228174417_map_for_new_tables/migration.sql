/*
  Warnings:

  - You are about to drop the `ScheduledMaintenanceInterval` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UsageMetric` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UsagePenalty` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ScheduledMaintenanceInterval" DROP CONSTRAINT "ScheduledMaintenanceInterval_scheduled_maintenance_id_fkey";

-- DropForeignKey
ALTER TABLE "UsageMetric" DROP CONSTRAINT "UsageMetric_correction_id_fkey";

-- DropForeignKey
ALTER TABLE "UsageMetric" DROP CONSTRAINT "UsageMetric_inventory_id_fkey";

-- DropForeignKey
ALTER TABLE "UsagePenalty" DROP CONSTRAINT "UsagePenalty_usage_metric_id_fkey";

-- DropTable
DROP TABLE "ScheduledMaintenanceInterval";

-- DropTable
DROP TABLE "UsageMetric";

-- DropTable
DROP TABLE "UsagePenalty";

-- CreateTable
CREATE TABLE "usage_metrics" (
    "id" TEXT NOT NULL,
    "inventory_id" TEXT NOT NULL,
    "metric_type" "MetricType" NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "recorded_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "correction_id" TEXT,
    "is_correction" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "usage_metrics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usage_penalties" (
    "id" TEXT NOT NULL,
    "usage_metric_id" TEXT NOT NULL,
    "event_type" "PenaltyEventType" NOT NULL,
    "penalty_factor" DOUBLE PRECISION NOT NULL,
    "penalty_hours" DOUBLE PRECISION NOT NULL,
    "recorded_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usage_penalties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "scheduled_maintenance_intervals" (
    "id" TEXT NOT NULL,
    "scheduled_maintenance_id" TEXT NOT NULL,
    "interval_type" "IntervalType" NOT NULL,
    "metric_type" "MetricType" NOT NULL,
    "interval_value" DOUBLE PRECISION NOT NULL,
    "tolerance_value" DOUBLE PRECISION,
    "adjusted_interval_value" DOUBLE PRECISION,
    "last_performed_value" DOUBLE PRECISION,
    "last_performed_date" TIMESTAMP(3),

    CONSTRAINT "scheduled_maintenance_intervals_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "usage_metrics" ADD CONSTRAINT "usage_metrics_inventory_id_fkey" FOREIGN KEY ("inventory_id") REFERENCES "physical_inventory_items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usage_metrics" ADD CONSTRAINT "usage_metrics_correction_id_fkey" FOREIGN KEY ("correction_id") REFERENCES "usage_metrics"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usage_penalties" ADD CONSTRAINT "usage_penalties_usage_metric_id_fkey" FOREIGN KEY ("usage_metric_id") REFERENCES "usage_metrics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scheduled_maintenance_intervals" ADD CONSTRAINT "scheduled_maintenance_intervals_scheduled_maintenance_id_fkey" FOREIGN KEY ("scheduled_maintenance_id") REFERENCES "scheduled_maintenance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
