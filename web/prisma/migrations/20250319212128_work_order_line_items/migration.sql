-- CreateTable
CREATE TABLE "work_order_line_items" (
    "id" TEXT NOT NULL,
    "work_order_id" TEXT NOT NULL,
    "scheduled_maintenance_id" TEXT,
    "unscheduled_maintenance_id" TEXT,
    "estimated_hours" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "actual_hours" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "labor_cost" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "parts_cost" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "total_cost" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "work_order_line_items_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "work_order_line_items" ADD CONSTRAINT "work_order_line_items_work_order_id_fkey" FOREIGN KEY ("work_order_id") REFERENCES "work_orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_order_line_items" ADD CONSTRAINT "work_order_line_items_scheduled_maintenance_id_fkey" FOREIGN KEY ("scheduled_maintenance_id") REFERENCES "scheduled_maintenance"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_order_line_items" ADD CONSTRAINT "work_order_line_items_unscheduled_maintenance_id_fkey" FOREIGN KEY ("unscheduled_maintenance_id") REFERENCES "unscheduled_maintenance"("id") ON DELETE SET NULL ON UPDATE CASCADE;
