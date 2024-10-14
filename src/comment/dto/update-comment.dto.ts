

import { IsOptional, IsString, IsBoolean } from 'class-validator';

export class UpdateCommentDto {
  @IsString()
  @IsOptional()
  content?: string;

  @IsBoolean()
  @IsOptional()
  isDelete?: boolean;
}
