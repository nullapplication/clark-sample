/*
  Warnings:

  - You are about to drop the column `code` on the `unscheduled_maintenance` table. All the data in the column will be lost.
  - You are about to drop the column `discovered_date` on the `unscheduled_maintenance` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "unscheduled_maintenance_code_key";

-- AlterTable
ALTER TABLE "unscheduled_maintenance" DROP COLUMN "code",
DROP COLUMN "discovered_date";
