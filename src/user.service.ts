import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { GetUserDto } from './dto/get-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  usersList: GetUserDto[] = [];
  currentUser: GetUserDto | null = null;

  createUser(userDto: CreateUserDto): GetUserDto {
    const newUser = { ...userDto, id: uuidv4() };
    this.usersList = [...this.usersList, newUser];
    return newUser;
  }

  logIn(user: CreateUserDto): GetUserDto {
    this.currentUser = user;
    return this.currentUser;
  }

  getUserById(userId: string): GetUserDto {
    return this.usersList.find((user) => user.id === userId);
  }
}
