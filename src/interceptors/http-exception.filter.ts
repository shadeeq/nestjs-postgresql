import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';
import { ZodError } from 'zod';

@Catch(ZodError)
export class HttpExceptionFilter<T extends ZodError>
  implements ExceptionFilter
{
  catch(exception: T, host: ArgumentsHost): any {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = 400;

    response.status(status).json({
      statusCode: status,
      errors: exception.errors,
      message: exception.message,
    });
  }
}
