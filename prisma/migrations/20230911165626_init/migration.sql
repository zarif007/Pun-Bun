-- CreateTable
CREATE TABLE "Pun" (
    "id" SERIAL NOT NULL,
    "author" TEXT NOT NULL DEFAULT 'anonymous',
    "pun" TEXT NOT NULL,
    "upVote" INTEGER NOT NULL DEFAULT 0,
    "downVote" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pun_pkey" PRIMARY KEY ("id")
);
