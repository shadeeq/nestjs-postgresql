import { Inject, Injectable, PipeTransform } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { CvCreateUserDto } from '../user/dto/class-validators/cv-create-user.dto';
import { ZodError, ZodIssue } from 'zod';

@Injectable()
export class CheckExistingUserPipe implements PipeTransform {
  @Inject(UserService) userService: UserService;

  async transform(value: CvCreateUserDto): Promise<CvCreateUserDto> {
    const existingUser = await this.userService.findOne({
      username: value.username,
    });
    if (existingUser) {
      throw new ZodError([
        {
          code: 'not_multiple_of',
          message: 'User already exists',
          path: ['user'],
        } as ZodIssue,
      ]);
    } else {
      return value;
    }
  }
}
