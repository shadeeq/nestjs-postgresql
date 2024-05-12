import { z } from 'zod';
import { createUserSchema } from './create-user.dto';

export const getUserSchema = createUserSchema.extend({
  id: z.number().int().optional(),
});

export type GetUserDto = z.infer<typeof getUserSchema>;
