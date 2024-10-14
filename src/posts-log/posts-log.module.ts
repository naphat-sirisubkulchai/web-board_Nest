import { Module } from '@nestjs/common';
import { PostsLogService } from './posts-log.service';
import { PostsLogController } from './posts-log.controller';
import { PrismaService } from '../prisma.service'; // Ensure to import PrismaService

@Module({
  controllers: [PostsLogController],
  providers: [PostsLogService, PrismaService], // Include PrismaService
})
export class PostsLogModule {}