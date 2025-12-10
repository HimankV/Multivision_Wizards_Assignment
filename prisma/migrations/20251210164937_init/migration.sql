-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Class" INTEGER NOT NULL,
    "Section" TEXT NOT NULL,
    "Month_Enrolled" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);
