import { object, string, z } from 'zod';

export const authSchema = object({
  username: string()
    .min(1, 'Обязательное поле')
    .regex(/user\d+/, 'Поле должно начинаться с user'),
  password: string().min(1, 'Обязательное поле'),
});

export type Auth = z.infer<typeof authSchema>;
