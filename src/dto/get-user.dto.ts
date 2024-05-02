import { z } from 'zod';

const getUserSchema = z.object({
  id: z.string(),
  username: z.string(),
  password: z.string(),
});

export type GetUserDto = z.infer<typeof getUserSchema>;
