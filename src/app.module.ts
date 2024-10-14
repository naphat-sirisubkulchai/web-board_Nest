import { Module } from '@nestjs/common';

import { PostsLogModule } from './posts-log/posts-log.module'; 
import { PostModule } from './post/post.module'; 
import { UserModule } from './user/user.module'; 
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [
    PostsLogModule,    
    PostModule,         
    UserModule,         
    CommentModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}