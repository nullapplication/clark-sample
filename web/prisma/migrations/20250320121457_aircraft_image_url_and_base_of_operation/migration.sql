/*
  Warnings:

  - You are about to drop the column `image` on the `aircraft` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "aircraft" DROP COLUMN "image",
ADD COLUMN     "image_url" TEXT;

-- AddForeignKey
ALTER TABLE "aircraft" ADD CONSTRAINT "aircraft_base_of_operation_id_fkey" FOREIGN KEY ("base_of_operation_id") REFERENCES "base_of_operations"("id") ON DELETE SET NULL ON UPDATE CASCADE;
