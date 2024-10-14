import { Status } from '@prisma/client'; 

export class CreatePostDto {
  title: string;
  content?: string;
  status?: Status;
  authorId: string; 
  createEmail: string;
  createDate: Date;
}

export class UpdatePostDto {
  title?: string;
  content?: string;
  status?: Status;
}
