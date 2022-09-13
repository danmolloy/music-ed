/*
  Warnings:

  - You are about to drop the column `name` on the `Exercise` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `Exercise` table. All the data in the column will be lost.
  - Added the required column `elapsedTime` to the `Exercise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `exCategory` to the `Exercise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `exName` to the `Exercise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeStamp` to the `Exercise` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Exercise" DROP COLUMN "name",
DROP COLUMN "time",
ADD COLUMN     "elapsedTime" INTEGER NOT NULL,
ADD COLUMN     "exCategory" TEXT NOT NULL,
ADD COLUMN     "exName" TEXT NOT NULL,
ADD COLUMN     "timeStamp" TIMESTAMP(3) NOT NULL;
