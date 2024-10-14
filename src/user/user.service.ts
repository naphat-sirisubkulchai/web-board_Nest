// user.service.ts
import * as bcrypt from 'bcryptjs';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  // Create a new user
  async createUser(data: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    return this.prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });
  }

  // Get all users
  async getUsers() {
    return this.prisma.user.findMany();
  }

  // Get a single user by ID
  async getUserById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }
  async getUserByUsername(username: string) {
    return this.prisma.user.findUnique({
      where: { username },
    });
  }

  // Update a user
  async updateUser(id: string, data: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  // Delete a user
  async deleteUser(id: string) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
