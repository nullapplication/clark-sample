-- CreateTable
CREATE TABLE "scheduled_maintenance_checklist_items" (
    "id" TEXT NOT NULL,
    "scheduled_maintenance_id" TEXT NOT NULL,
    "number" INTEGER NOT NULL DEFAULT 1,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "scheduled_maintenance_checklist_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "work_performed_checklist_items" (
    "id" TEXT NOT NULL,
    "work_performed_id" TEXT NOT NULL,
    "scheduled_maintenance_checklist_item_id" TEXT NOT NULL,
    "is_completed" BOOLEAN NOT NULL DEFAULT false,
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "completed_at" TIMESTAMP(3),
    "completed_by" TEXT,

    CONSTRAINT "work_performed_checklist_items_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "scheduled_maintenance_checklist_items" ADD CONSTRAINT "scheduled_maintenance_checklist_items_scheduled_maintenanc_fkey" FOREIGN KEY ("scheduled_maintenance_id") REFERENCES "scheduled_maintenance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_performed_checklist_items" ADD CONSTRAINT "work_performed_checklist_items_work_performed_id_fkey" FOREIGN KEY ("work_performed_id") REFERENCES "work_performed"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_performed_checklist_items" ADD CONSTRAINT "work_performed_checklist_items_scheduled_maintenance_check_fkey" FOREIGN KEY ("scheduled_maintenance_checklist_item_id") REFERENCES "scheduled_maintenance_checklist_items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
