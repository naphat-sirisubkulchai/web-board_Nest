import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { PrismaService } from '../prisma.service'; // Ensure you have PrismaService imported

@Module({
  controllers: [CommentController],
  providers: [CommentService, PrismaService], // Add PrismaService here if needed
})
export class CommentModule {}