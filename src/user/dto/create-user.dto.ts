import { z } from 'zod';

const passwordRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
const usernameRegex = /^[a-zA-Z0-9-_]+$/;
const nameRegex = /^[a-zA-Z\s]+$/;

export const createUserSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: 'Name must have at least 2 characters.' })
      .regex(nameRegex, {
        message: 'Name must contain only letters.',
      }),
    username: z
      .string()
      .min(3, { message: 'User name must have at lest 3 characters' })
      .regex(usernameRegex, {
        message: 'No special characters are allowed.',
      }),
    email: z.string().min(1).email({ message: 'Please provide valid Email.' }),
    age: z.number().int(),
    password: z.string().regex(passwordRegEx, {
      message: `Password must contain Minimum 8 and maximum 20 characters, at least one uppercase letter, one lowercase letter, one number and one special character`,
    }),
    gender: z.enum(['f', 'm', 'u']),
  })
  .required();

export type CreateUserDto = z.infer<typeof createUserSchema>;
