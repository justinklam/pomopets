/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `pets` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "pets_name_key" ON "pets"("name");
