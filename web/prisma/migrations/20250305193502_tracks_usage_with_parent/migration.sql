/*
  Warnings:

  - You are about to drop the column `scheduled_maintenance_interval_id` on the `maintenance_due_metrics` table. All the data in the column will be lost.
  - You are about to drop the column `propagate_usage` on the `physical_inventory_items` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "maintenance_due_metrics" DROP CONSTRAINT "maintenance_due_metrics_scheduled_maintenance_interval_id_fkey";

-- AlterTable
ALTER TABLE "maintenance_due_metrics" DROP COLUMN "scheduled_maintenance_interval_id";

-- AlterTable
ALTER TABLE "physical_inventory_items" DROP COLUMN "propagate_usage",
ADD COLUMN     "track_usage_with_parent" BOOLEAN NOT NULL DEFAULT false;
