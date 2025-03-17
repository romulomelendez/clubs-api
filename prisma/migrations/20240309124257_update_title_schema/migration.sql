/*
  Warnings:

  - You are about to drop the column `dateOfLastTitle` on the `Title` table. All the data in the column will be lost.
  - You are about to drop the column `days` on the `Title` table. All the data in the column will be lost.
  - You are about to drop the column `hours` on the `Title` table. All the data in the column will be lost.
  - You are about to drop the column `minutes` on the `Title` table. All the data in the column will be lost.
  - You are about to drop the column `mounths` on the `Title` table. All the data in the column will be lost.
  - You are about to drop the column `seconds` on the `Title` table. All the data in the column will be lost.
  - You are about to drop the column `years` on the `Title` table. All the data in the column will be lost.
  - Added the required column `season` to the `Title` table without a default value. This is not possible if the table is not empty.
  - Added the required column `winningDate` to the `Title` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Title" DROP COLUMN "dateOfLastTitle",
DROP COLUMN "days",
DROP COLUMN "hours",
DROP COLUMN "minutes",
DROP COLUMN "mounths",
DROP COLUMN "seconds",
DROP COLUMN "years",
ADD COLUMN     "season" TEXT NOT NULL,
ADD COLUMN     "winningDate" TEXT NOT NULL;
