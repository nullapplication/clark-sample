/*
  Warnings:

  - You are about to drop the column `propagateUsage` on the `physical_inventory_items` table. All the data in the column will be lost.
  - You are about to drop the column `next_due_cycles` on the `scheduled_maintenance` table. All the data in the column will be lost.
  - You are about to drop the column `next_due_date` on the `scheduled_maintenance` table. All the data in the column will be lost.
  - You are about to drop the column `next_due_hours` on the `scheduled_maintenance` table. All the data in the column will be lost.
  - You are about to drop the column `next_due_landings` on the `scheduled_maintenance` table. All the data in the column will be lost.
  - You are about to drop the column `projected_next_due` on the `scheduled_maintenance` table. All the data in the column will be lost.
  - You are about to drop the column `is_correction` on the `usage_metrics` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "physical_inventory_items" DROP COLUMN "propagateUsage",
ADD COLUMN     "current_usage" JSONB,
ADD COLUMN     "propagate_usage" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "show_on_aircraft" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "scheduled_maintenance" DROP COLUMN "next_due_cycles",
DROP COLUMN "next_due_date",
DROP COLUMN "next_due_hours",
DROP COLUMN "next_due_landings",
DROP COLUMN "projected_next_due";

-- AlterTable
ALTER TABLE "usage_metrics" DROP COLUMN "is_correction",
ADD COLUMN     "is_corrected" BOOLEAN NOT NULL DEFAULT false;
