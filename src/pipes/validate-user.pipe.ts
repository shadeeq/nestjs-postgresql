import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { ZodSchema } from 'zod';

@Injectable()
export class ValidateUserPipe implements PipeTransform {
  constructor(private readonly zod: ZodSchema) {}

  transform(value: any, metadata: ArgumentMetadata): any {
    try {
      return this.zod.parse(value);
    } catch (e) {
      throw new BadRequestException('Validation Error');
    }
  }
}
