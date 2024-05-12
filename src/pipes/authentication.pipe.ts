import {
  ArgumentMetadata,
  HttpStatus,
  Inject,
  Injectable,
  NotFoundException,
  PipeTransform,
} from '@nestjs/common';
import { GetUserDto } from '../dto/get-user.dto';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserService } from "../user/user.service";

@Injectable()
export class AuthenticationPipe implements PipeTransform {
  @Inject(UserService) userService: UserService;

  // TODO needs implementation
  transform(value: CreateUserDto, metadata: ArgumentMetadata): void {
    // const authenticatedUser = this.userService.usersList.find(
    //   (user) => user.username === value.username,
    // );
    // if (authenticatedUser) {
    //   return authenticatedUser;
    // } else {
    //   throw new NotFoundException({
    //     status: HttpStatus.NOT_FOUND,
    //     error: 'User not exists',
    //   });
    // }
  }
}
