import {
  BadRequestException,
  Inject,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Injectable()
export class CheckExistingUserPipe implements PipeTransform {
  @Inject(UserService) userService: UserService;

  async transform(value: CreateUserDto): Promise<CreateUserDto> {
    const existingUser = await this.userService.findOne({
      username: value.username,
    });
    if (existingUser) {
      throw new BadRequestException('User already exists');
    } else {
      return value;
    }
  }
}
