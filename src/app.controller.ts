import { Controller } from '@nestjs/common';

@Controller()
export class AppController {

  // @Post('/create-user')
  // @UsePipes(new ValidateUserPipe(createUserSchema), CheckExistingUserPipe)
  // createUser(@Body() createUserDto: CreateUserDto): GetUserDto {
  //   return this.userService.createUser(createUserDto);
  // }
  //
  // @Post('/log-in')
  // @UsePipes(AuthenticationPipe)
  // logIn(@Body() userDto: CreateUserDto): GetUserDto {
  //   return this.userService.logIn(userDto);
  // }
  //
  // @Get('/current-user')
  // getUserById(@Query('userId') userId: string): GetUserDto {
  //   return this.userService.getUserById(userId);
  // }
}
