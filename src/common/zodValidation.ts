import { z } from 'zod';

export type Prefecture = {
  prefCode: number;
  prefName: string;
};

export const prefectureSchema = z
  .object({
    prefCode: z.number(),
    prefName: z.string(),
  })
  .strict();
