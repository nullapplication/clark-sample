-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "AircraftStatusEnum" ADD VALUE 'AIRWORTHY';
ALTER TYPE "AircraftStatusEnum" ADD VALUE 'UNDER_MAINTENANCE';
ALTER TYPE "AircraftStatusEnum" ADD VALUE 'MAINTENANCE_DUE_SOON';
ALTER TYPE "AircraftStatusEnum" ADD VALUE 'GROUNDED';

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "MetricType" ADD VALUE 'MILES';
ALTER TYPE "MetricType" ADD VALUE 'DAYS';
ALTER TYPE "MetricType" ADD VALUE 'MONTHS';
