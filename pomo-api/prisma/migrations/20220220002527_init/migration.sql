/*
  Warnings:

  - The primary key for the `user_pets` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `user_pets` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "user_pets_id_key";

-- AlterTable
ALTER TABLE "user_pets" DROP CONSTRAINT "user_pets_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "user_pets_pkey" PRIMARY KEY ("user_id", "pet_id");
