/*
  Warnings:

  - You are about to drop the column `timeStamp` on the `CompletedExercise` table. All the data in the column will be lost.
  - Added the required column `date` to the `CompletedExercise` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `elapsedTime` on the `CompletedExercise` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "CompletedExercise" DROP COLUMN "timeStamp",
ADD COLUMN     "date" TEXT NOT NULL,
DROP COLUMN "elapsedTime",
ADD COLUMN     "elapsedTime" INTEGER NOT NULL;
