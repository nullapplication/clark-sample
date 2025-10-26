-- DropForeignKey
ALTER TABLE "maintenance_due_projections" DROP CONSTRAINT "maintenance_due_projections_scheduled_maintenance_id_fkey";

-- AlterTable
ALTER TABLE "maintenance_due_projections" ADD COLUMN     "unscheduled_maintenance_id" TEXT,
ALTER COLUMN "scheduled_maintenance_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "maintenance_due_projections" ADD CONSTRAINT "maintenance_due_projections_scheduled_maintenance_id_fkey" FOREIGN KEY ("scheduled_maintenance_id") REFERENCES "scheduled_maintenance"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "maintenance_due_projections" ADD CONSTRAINT "maintenance_due_projections_unscheduled_maintenance_id_fkey" FOREIGN KEY ("unscheduled_maintenance_id") REFERENCES "unscheduled_maintenance"("id") ON DELETE SET NULL ON UPDATE CASCADE;
