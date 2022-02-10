/*
  Warnings:

  - You are about to drop the `pet` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `timer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "timer" DROP CONSTRAINT "timer_user_id_fkey";

-- DropForeignKey
ALTER TABLE "user_pets" DROP CONSTRAINT "user_pets_pet_id_fkey";

-- DropForeignKey
ALTER TABLE "user_pets" DROP CONSTRAINT "user_pets_user_id_fkey";

-- DropTable
DROP TABLE "pet";

-- DropTable
DROP TABLE "timer";

-- DropTable
DROP TABLE "user";

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "timers" (
    "id" SERIAL NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "timers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pets" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,

    CONSTRAINT "pets_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "timers_id_key" ON "timers"("id");

-- CreateIndex
CREATE UNIQUE INDEX "pets_id_key" ON "pets"("id");

-- CreateIndex
CREATE UNIQUE INDEX "pets_name_key" ON "pets"("name");

-- AddForeignKey
ALTER TABLE "timers" ADD CONSTRAINT "timers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_pets" ADD CONSTRAINT "user_pets_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_pets" ADD CONSTRAINT "user_pets_pet_id_fkey" FOREIGN KEY ("pet_id") REFERENCES "pets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
