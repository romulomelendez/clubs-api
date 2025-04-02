-- DropForeignKey
ALTER TABLE "Title" DROP CONSTRAINT "Title_clubId_fkey";

-- AddForeignKey
ALTER TABLE "Title" ADD CONSTRAINT "Title_clubId_fkey" FOREIGN KEY ("clubId") REFERENCES "Club"("id") ON DELETE CASCADE ON UPDATE CASCADE;
