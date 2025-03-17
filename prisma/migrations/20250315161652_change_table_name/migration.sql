/*
  Warnings:

  - You are about to drop the `Title` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Title" DROP CONSTRAINT "Title_clubId_fkey";

-- DropTable
DROP TABLE "Title";

-- CreateTable
CREATE TABLE "LastTitle" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "season" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "clubId" INTEGER NOT NULL,

    CONSTRAINT "LastTitle_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LastTitle_clubId_key" ON "LastTitle"("clubId");

-- AddForeignKey
ALTER TABLE "LastTitle" ADD CONSTRAINT "LastTitle_clubId_fkey" FOREIGN KEY ("clubId") REFERENCES "Club"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
