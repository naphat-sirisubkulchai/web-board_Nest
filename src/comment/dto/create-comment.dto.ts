// create-comment.dto.ts

import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsNotEmpty()
  createName: string;

  @IsOptional()
  @IsString()
  postId?: string; // Optional if you want to pass postId
}
