import type { Prefecture } from '@/common/types';
import type { NextApiRequest, NextApiResponse } from 'next';

import { RESAS_API_BASE_URL } from '@/common/const/URL';

type ErrorResponse = {
  errorMessage: string;
};

export default async function handler(
  // @ts-ignore
  req: NextApiRequest,
  res: NextApiResponse<Prefecture[] | ErrorResponse>,
) {
  const response = await fetch(`${RESAS_API_BASE_URL}/api/v1/prefectures`, {
    headers: {
      'X-API-KEY': process.env.RESAS_API_SECRET_KEY!,
    },
  });

  if (!response.ok) {
    const errorMessage = `Failed to fetch prefectures: ${response.statusText}`;
    console.error(errorMessage);
    res.status(500).json({ errorMessage });
    return;
  }

  const prefecturesList: Prefecture[] = await response.json();
  res.status(200).json(prefecturesList);
}
