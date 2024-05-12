import { PartialType } from '@nestjs/mapped-types';
import { CvCreateUserDto } from './cv-create-user.dto';
import { IsInt } from 'class-validator';

export class CvUpdateUserDto extends PartialType(CvCreateUserDto) {
  @IsInt()
  id?: number;
}
