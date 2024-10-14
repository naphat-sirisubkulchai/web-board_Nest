// dto/user.dto.ts

export class CreateUserDto {
    username: string;
    name: string;
    email: string;
    password: string;
  }
  
  export class UpdateUserDto {
    username?: string;
    name?: string;
    email?: string;
    password?: string;
  }
  