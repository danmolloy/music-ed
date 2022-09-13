-- DropForeignKey
ALTER TABLE "Exercise" DROP CONSTRAINT "Exercise_userEmail_fkey";

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
