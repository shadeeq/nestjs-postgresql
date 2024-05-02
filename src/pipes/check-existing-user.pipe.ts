import {
  ArgumentMetadata,
  BadRequestException,
  Inject,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { UserService } from '../user.service';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class CheckExistingUserPipe implements PipeTransform {
  @Inject(UserService) appService: UserService;

  transform(value: CreateUserDto, metadata: ArgumentMetadata): any {
    const existingUser = this.appService.usersList.find(
      (user) => user.username === value.username,
    );
    if (existingUser) {
      throw new BadRequestException('User already exists');
    } else {
      return value;
    }
  }
}
