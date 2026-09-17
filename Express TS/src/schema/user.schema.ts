import { z } from 'zod'

export const CreateUserSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must not exceed 100 characters'),
  email: z.string().email('Invalid email address')
});

export type CreateUserInput = z.infer<typeof CreateUserSchema>;