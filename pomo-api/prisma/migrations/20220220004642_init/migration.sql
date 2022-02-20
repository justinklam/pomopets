/*
  Warnings:

  - The primary key for the `user_pets` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `user_pets` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "user_pets" DROP CONSTRAINT "user_pets_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "user_pets_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "user_pets_id_key" ON "user_pets"("id");
