/*
  Warnings:

  - You are about to drop the `LastTitle` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `badge` to the `Club` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "LastTitle" DROP CONSTRAINT "LastTitle_clubId_fkey";

-- AlterTable
ALTER TABLE "Club" ADD COLUMN     "badge" TEXT NOT NULL,
ADD COLUMN     "colors" TEXT[];

-- DropTable
DROP TABLE "LastTitle";

-- CreateTable
CREATE TABLE "Title" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "season" TEXT,
    "date" TEXT NOT NULL,
    "clubId" INTEGER NOT NULL,

    CONSTRAINT "Title_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Title_clubId_key" ON "Title"("clubId");

-- AddForeignKey
ALTER TABLE "Title" ADD CONSTRAINT "Title_clubId_fkey" FOREIGN KEY ("clubId") REFERENCES "Club"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
