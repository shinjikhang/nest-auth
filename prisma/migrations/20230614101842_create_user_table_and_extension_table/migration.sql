-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "avatar" TEXT NOT NULL DEFAULT 'https://cdn.pupi.vn/images/teacher/teacher-badges/silver-badge.webp',
    "gender" INTEGER NOT NULL DEFAULT 0,
    "Bio" TEXT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT,
    "mobile" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" INTEGER NOT NULL,
    "updatedAt" INTEGER NOT NULL,
    "isDeleted" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Extension" (
    "extension_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "state" INTEGER NOT NULL,
    "createdAt" INTEGER NOT NULL,
    "updatedAt" INTEGER NOT NULL,
    "isDeleted" INTEGER NOT NULL,
    "userUser_id" INTEGER,

    CONSTRAINT "Extension_pkey" PRIMARY KEY ("extension_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_mobile_key" ON "User"("mobile");

-- AddForeignKey
ALTER TABLE "Extension" ADD CONSTRAINT "Extension_userUser_id_fkey" FOREIGN KEY ("userUser_id") REFERENCES "User"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;
