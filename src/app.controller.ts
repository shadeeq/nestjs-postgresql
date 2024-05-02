import { Body, Controller, Get, Post, Query, UsePipes } from '@nestjs/common';
import { UserService } from './user.service';
import { ValidateUserPipe } from './pipes/validate-user.pipe';
import { CreateUserDto, createUserSchema } from './dto/create-user.dto';
import { CheckExistingUserPipe } from './pipes/check-existing-user.pipe';
import { GetUserDto } from './dto/get-user.dto';
import { AuthenticationPipe } from './pipes/authentication.pipe';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Post('/create-user')
  @UsePipes(new ValidateUserPipe(createUserSchema), CheckExistingUserPipe)
  createUser(@Body() createUserDto: CreateUserDto): GetUserDto {
    return this.userService.createUser(createUserDto);
  }

  @Post('/log-in')
  @UsePipes(AuthenticationPipe)
  logIn(@Body() userDto: CreateUserDto): GetUserDto {
    return this.userService.logIn(userDto);
  }

  @Get('/current-user')
  getUserById(@Query('userId') userId: string): GetUserDto {
    return this.userService.getUserById(userId);
  }
}
