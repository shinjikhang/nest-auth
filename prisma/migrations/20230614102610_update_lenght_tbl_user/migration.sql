/*
  Warnings:

  - You are about to alter the column `email` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(64)`.
  - You are about to alter the column `avatar` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(128)`.
  - You are about to alter the column `firstName` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(36)`.
  - You are about to alter the column `lastName` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(36)`.
  - You are about to alter the column `password` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(128)`.
  - Changed the type of `mobile` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "email" SET DATA TYPE VARCHAR(64),
ALTER COLUMN "avatar" SET DATA TYPE VARCHAR(128),
ALTER COLUMN "firstName" SET DATA TYPE VARCHAR(36),
ALTER COLUMN "lastName" SET DATA TYPE VARCHAR(36),
DROP COLUMN "mobile",
ADD COLUMN     "mobile" INTEGER NOT NULL,
ALTER COLUMN "password" SET DATA TYPE VARCHAR(128);

-- CreateIndex
CREATE UNIQUE INDEX "User_mobile_key" ON "User"("mobile");
