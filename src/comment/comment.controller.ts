// comment.controller.ts

import { Controller, Patch, Param, Body, UseGuards, Req, Post,Put,Get,Delete } from '@nestjs/common';
import { CommentService } from './comment.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'; 
import { Request } from 'express';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto'; 

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  // Endpoint to create a new comment
  @Post()
  async create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentService.createComment(createCommentDto);
  }

  // Endpoint to get comments by post ID
  @Get(':postId')
  async findByPost(@Param('postId') postId: string) {
    return this.commentService.getCommentsByPost(postId);
  }

  // Endpoint to delete a comment by ID
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.commentService.deleteComment(id);
  }
  @UseGuards(JwtAuthGuard) // Use JwtAuthGuard to ensure JWT authentication
  @Patch(':id') // Patch route for updating a comment
  async updateComment(
    @Param('id') commentId: string,
    @Body() updateCommentDto: UpdateCommentDto,
    @Req() req: Request, 
  ) {
    const userId = req.user['id']; 
    return this.commentService.updateComment(commentId, userId, updateCommentDto);
  }
}