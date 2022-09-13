/*
  Warnings:

  - You are about to drop the `Exercise` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Exercise" DROP CONSTRAINT "Exercise_userEmail_fkey";

-- DropTable
DROP TABLE "Exercise";

-- CreateTable
CREATE TABLE "CompletedExercise" (
    "id" TEXT NOT NULL,
    "exCategory" TEXT NOT NULL,
    "exName" TEXT NOT NULL,
    "elapsedTime" INTEGER NOT NULL,
    "timeStamp" TIMESTAMP(3) NOT NULL,
    "score" DOUBLE PRECISION NOT NULL,
    "pointsAwarded" INTEGER,
    "userEmail" TEXT NOT NULL,

    CONSTRAINT "CompletedExercise_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CompletedExercise" ADD CONSTRAINT "CompletedExercise_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE CASCADE ON UPDATE CASCADE;
