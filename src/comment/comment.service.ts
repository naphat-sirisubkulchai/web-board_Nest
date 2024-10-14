

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service'; 
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto'; 

@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}

  // Method to create a comment
  async createComment(data: CreateCommentDto) {
    return this.prisma.comments.create({
        data: {
            ...data,
            createDate: new Date(), 
          },
    });
  }
  async updateComment(commentId: string, userId: string, updateCommentDto: UpdateCommentDto) {
    // Fetch the comment from the database
    const comment = await this.prisma.comments.findUnique({
      where: { id: commentId },
    });

    
    // Update the comment
    return this.prisma.comments.update({
      where: { id: commentId },
      data: {
        ...updateCommentDto,
      },
    });
  }

  // Method to get all comments for a specific post
  async getCommentsByPost(postId: string) {
    return this.prisma.comments.findMany({
      where: { postId },
    });
  }

  // Method to delete a comment
  async deleteComment(id: string) {
    return this.prisma.comments.delete({
      where: { id },
    });
  }
}
