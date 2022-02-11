-- CreateTable
CREATE TABLE "person" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "timer" (
    "id" SERIAL NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "timer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pet" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,

    CONSTRAINT "pet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_pet" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "pet_id" INTEGER NOT NULL,

    CONSTRAINT "user_pet_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "person_id_key" ON "person"("id");

-- CreateIndex
CREATE UNIQUE INDEX "person_username_key" ON "person"("username");

-- CreateIndex
CREATE UNIQUE INDEX "person_email_key" ON "person"("email");

-- CreateIndex
CREATE UNIQUE INDEX "timer_id_key" ON "timer"("id");

-- CreateIndex
CREATE UNIQUE INDEX "pet_id_key" ON "pet"("id");

-- CreateIndex
CREATE UNIQUE INDEX "pet_name_key" ON "pet"("name");

-- CreateIndex
CREATE UNIQUE INDEX "user_pet_id_key" ON "user_pet"("id");

-- AddForeignKey
ALTER TABLE "timer" ADD CONSTRAINT "timer_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_pet" ADD CONSTRAINT "user_pet_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_pet" ADD CONSTRAINT "user_pet_pet_id_fkey" FOREIGN KEY ("pet_id") REFERENCES "pet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
