import { z } from 'zod';

export const bulkDeleteIdsSchema = z.object({
  ids: z.array(z.number().int()),
});

export type BulkDeleteIdsDto = z.infer<typeof bulkDeleteIdsSchema>;
