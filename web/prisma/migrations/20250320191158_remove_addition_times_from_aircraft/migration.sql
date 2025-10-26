/*
  Warnings:

  - You are about to drop the column `airframe_hours` on the `aircraft` table. All the data in the column will be lost.
  - You are about to drop the column `last_100_hour_inspection` on the `aircraft` table. All the data in the column will be lost.
  - You are about to drop the column `last_annual_inspection` on the `aircraft` table. All the data in the column will be lost.
  - You are about to drop the column `propeller_hours` on the `aircraft` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "aircraft" DROP COLUMN "airframe_hours",
DROP COLUMN "last_100_hour_inspection",
DROP COLUMN "last_annual_inspection",
DROP COLUMN "propeller_hours";
