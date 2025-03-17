/*
  Warnings:

  - You are about to drop the column `lastTitleDate` on the `Club` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Club" DROP COLUMN "lastTitleDate";

-- CreateTable
CREATE TABLE "Title" (
    "id" SERIAL NOT NULL,
    "dateOfLastTitle" INTEGER NOT NULL,
    "years" INTEGER NOT NULL,
    "mounths" INTEGER NOT NULL,
    "days" INTEGER NOT NULL,
    "hours" INTEGER NOT NULL,
    "minutes" INTEGER NOT NULL,
    "seconds" INTEGER NOT NULL,
    "clubId" INTEGER NOT NULL,

    CONSTRAINT "Title_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Title_clubId_key" ON "Title"("clubId");

-- AddForeignKey
ALTER TABLE "Title" ADD CONSTRAINT "Title_clubId_fkey" FOREIGN KEY ("clubId") REFERENCES "Club"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
