/*
  Warnings:

  - Added the required column `name` to the `Title` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Title" ADD COLUMN     "name" TEXT NOT NULL;
