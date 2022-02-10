/*
  Warnings:

  - You are about to drop the column `user_pet_id` on the `user` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `user_pets` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_user_pet_id_fkey";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "user_pet_id";

-- AlterTable
ALTER TABLE "user_pets" ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "user_pets" ADD CONSTRAINT "user_pets_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
