// user.module.ts

import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from '../prisma.service'; // Import the PrismaService

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService],
})
export class UserModule {}
