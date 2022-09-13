-- CreateTable
CREATE TABLE "Exercise" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "time" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "pointsAwarded" INTEGER,
    "userEmail" TEXT NOT NULL,

    CONSTRAINT "Exercise_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
