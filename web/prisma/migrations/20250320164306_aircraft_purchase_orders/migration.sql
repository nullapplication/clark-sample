-- AlterTable
ALTER TABLE "purchase_orders" ADD COLUMN     "aircraft_id" TEXT;

-- AddForeignKey
ALTER TABLE "purchase_orders" ADD CONSTRAINT "purchase_orders_aircraft_id_fkey" FOREIGN KEY ("aircraft_id") REFERENCES "aircraft"("id") ON DELETE SET NULL ON UPDATE CASCADE;
