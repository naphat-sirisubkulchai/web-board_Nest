-- CreateTable
CREATE TABLE "Posts_Log" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "status" "Status" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "postId" TEXT NOT NULL,

    CONSTRAINT "Posts_Log_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Posts_Log" ADD CONSTRAINT "Posts_Log_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
