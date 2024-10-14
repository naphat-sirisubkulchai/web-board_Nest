import { Module } from '@nestjs/common';

import { PostsLogModule } from './posts-log/posts-log.module'; 
import { PostModule } from './post/post.module'; 
import { UserModule } from './user/user.module'; 

@Module({
  imports: [
    PostsLogModule,    
    PostModule,         
    UserModule,         
   
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}