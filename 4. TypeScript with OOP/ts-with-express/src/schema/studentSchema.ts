import { z } from 'zod';

export const StudentSchema = z.object({
  id: z.number(),
  name: z.string(),
  age: z.number(),
  grade: z.string(),
});

export type Student = z.infer<typeof StudentSchema>;