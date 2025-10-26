/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `unscheduled_maintenance` will be added. If there are existing duplicate values, this will fail.
  - Made the column `code` on table `unscheduled_maintenance` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "unscheduled_maintenance" ALTER COLUMN "code" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "unscheduled_maintenance_code_key" ON "unscheduled_maintenance"("code");
