-- AlterTable
ALTER TABLE "aircraft" ALTER COLUMN "status_reason" DROP NOT NULL,
ALTER COLUMN "status_reason" DROP DEFAULT;

-- AlterTable
ALTER TABLE "scheduled_maintenance" ADD COLUMN     "standard_operating_procedure" TEXT;
