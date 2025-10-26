/*
  Warnings:

  - The values [ACTIVE,INACTIVE,MAINTENANCE,DECOMMISSIONED] on the enum `AircraftStatusEnum` will be removed. If these variants are still used in the database, this will fail.
  - The values [STARTS,FUEL_BURN,ROTOR_HOURS] on the enum `MetricType` will be removed. If these variants are still used in the database, this will fail.
  - The values [COMPLETED] on the enum `ScheduledMaintenanceStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "AircraftStatusEnum_new" AS ENUM ('AIRWORTHY', 'UNDER_MAINTENANCE', 'MAINTENANCE_DUE_SOON', 'GROUNDED');
ALTER TABLE "aircraft" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "aircraft" ALTER COLUMN "status" TYPE "AircraftStatusEnum_new" USING ("status"::text::"AircraftStatusEnum_new");
ALTER TYPE "AircraftStatusEnum" RENAME TO "AircraftStatusEnum_old";
ALTER TYPE "AircraftStatusEnum_new" RENAME TO "AircraftStatusEnum";
DROP TYPE "AircraftStatusEnum_old";
ALTER TABLE "aircraft" ALTER COLUMN "status" SET DEFAULT 'AIRWORTHY';
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "MetricType_new" AS ENUM ('FLIGHT_HOURS', 'CYCLES', 'LANDINGS', 'MILES', 'DAYS', 'MONTHS', 'RIN');
ALTER TABLE "usage_metrics" ALTER COLUMN "metric_type" TYPE "MetricType_new" USING ("metric_type"::text::"MetricType_new");
ALTER TABLE "scheduled_maintenance_intervals" ALTER COLUMN "metric_type" TYPE "MetricType_new" USING ("metric_type"::text::"MetricType_new");
ALTER TABLE "maintenance_due_metrics" ALTER COLUMN "metric_type" TYPE "MetricType_new" USING ("metric_type"::text::"MetricType_new");
ALTER TYPE "MetricType" RENAME TO "MetricType_old";
ALTER TYPE "MetricType_new" RENAME TO "MetricType";
DROP TYPE "MetricType_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "ScheduledMaintenanceStatus_new" AS ENUM ('ACTIVE', 'INACTIVE', 'DUESOON', 'OVERDUE');
ALTER TABLE "scheduled_maintenance" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "scheduled_maintenance" ALTER COLUMN "status" TYPE "ScheduledMaintenanceStatus_new" USING ("status"::text::"ScheduledMaintenanceStatus_new");
ALTER TABLE "maintenance_due_projections" ALTER COLUMN "status" TYPE "ScheduledMaintenanceStatus_new" USING ("status"::text::"ScheduledMaintenanceStatus_new");
ALTER TYPE "ScheduledMaintenanceStatus" RENAME TO "ScheduledMaintenanceStatus_old";
ALTER TYPE "ScheduledMaintenanceStatus_new" RENAME TO "ScheduledMaintenanceStatus";
DROP TYPE "ScheduledMaintenanceStatus_old";
ALTER TABLE "scheduled_maintenance" ALTER COLUMN "status" SET DEFAULT 'ACTIVE';
COMMIT;

-- AlterTable
ALTER TABLE "aircraft" ALTER COLUMN "status" SET DEFAULT 'AIRWORTHY';
