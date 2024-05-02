import {
  ArgumentMetadata,
  HttpStatus,
  Inject,
  Injectable,
  NotFoundException,
  PipeTransform,
} from '@nestjs/common';
import { UserService } from '../user.service';
import { GetUserDto } from '../dto/get-user.dto';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class AuthenticationPipe implements PipeTransform {
  @Inject(UserService) userService: UserService;

  transform(value: CreateUserDto, metadata: ArgumentMetadata): GetUserDto {
    const authenticatedUser = this.userService.usersList.find(
      (user) => user.username === value.username,
    );
    if (authenticatedUser) {
      return authenticatedUser;
    } else {
      throw new NotFoundException({
        status: HttpStatus.NOT_FOUND,
        error: 'User not exists',
      });
    }
  }
}
