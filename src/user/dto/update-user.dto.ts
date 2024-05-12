import { getUserSchema } from './get-user.dto';
import { z } from 'zod';

export const updateUserSchema = z.object({
  id: getUserSchema.shape.id.optional(),
  name: getUserSchema.shape.name.optional(),
  username: getUserSchema.shape.username.optional(),
  email: getUserSchema.shape.email.optional(),
  age: getUserSchema.shape.age.optional(),
  password: getUserSchema.shape.password.optional(),
  gender: getUserSchema.shape.gender.optional(),
});

export type UpdateUserDto = z.infer<typeof updateUserSchema>;
