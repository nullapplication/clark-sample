-- DropForeignKey
ALTER TABLE "unscheduled_maintenance" DROP CONSTRAINT "unscheduled_maintenance_aircraft_id_fkey";

-- AlterTable
ALTER TABLE "unscheduled_maintenance" ALTER COLUMN "aircraft_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "unscheduled_maintenance" ADD CONSTRAINT "unscheduled_maintenance_aircraft_id_fkey" FOREIGN KEY ("aircraft_id") REFERENCES "aircraft"("id") ON DELETE SET NULL ON UPDATE CASCADE;
