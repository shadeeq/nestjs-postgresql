import { z } from 'zod';

export const bulkIdsSchema = z.object({
  ids: z.array(z.number().int()),
});

export type BulkIdsDto = z.infer<typeof bulkIdsSchema>;
