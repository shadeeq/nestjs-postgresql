import { Injectable, PipeTransform } from '@nestjs/common';
import { ZodSchema } from 'zod';

@Injectable()
export class ValidateSchemaPipe implements PipeTransform {
  constructor(private readonly schema: ZodSchema) {}

  transform(value: any): any {
    this.schema.parse(value);
    return value;
  }
}
