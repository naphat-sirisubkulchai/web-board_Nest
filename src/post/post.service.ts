// post.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async createPost(data: CreatePostDto) {
    return this.prisma.posts.create({
      data: {
        ...data,
        createDate: new Date(), // Automatically set creation date
      },
    });
  }

  async getPosts() {
    return this.prisma.posts.findMany();
  }

  async updatePost(id: string, data: UpdatePostDto) {
    // First, get the current post details
    const currentPost = await this.prisma.posts.findUnique({
      where: { id },
    });

    if (!currentPost) {
      throw new Error('Post not found');
    }

    // Update the post
    const updatedPost = await this.prisma.posts.update({
      where: { id },
      data,
    });

    // Create a log entry
    await this.prisma.posts_Log.create({
      data: {
        title: currentPost.title, // Log the current title
        content: currentPost.content, // Log the current content
        status: currentPost.status, // Log the current status
        createdAt: new Date(), // Current date
        postId: currentPost.id, // Link to the updated post
      },
    });

    return updatedPost;
  }

  async deletePost(id: string) {
    return this.prisma.posts.delete({ where: { id } });
  }
}
