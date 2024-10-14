import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PostsLogService {
  constructor(private prisma: PrismaService) {}

  async getLogsByPostId(postId: string) {
    return this.prisma.posts_Log.findMany({
      where: { postId }, // Filter logs by postId
    });
  }
}