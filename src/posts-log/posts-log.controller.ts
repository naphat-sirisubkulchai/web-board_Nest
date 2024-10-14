import { Controller, Get, Param } from '@nestjs/common';
import { PostsLogService } from './posts-log.service';

@Controller('posts-log')
export class PostsLogController {
  constructor(private readonly postsLogService: PostsLogService) {}

  // GET endpoint to retrieve logs by post ID
  @Get(':postId')
  async getLogs(@Param('postId') postId: string) {
    return this.postsLogService.getLogsByPostId(postId);
  }
}