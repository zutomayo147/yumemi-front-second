import type { NextApiRequest, NextApiResponse } from 'next';

import { RESAS_API_BASE_URL } from '@/common/const/URL';
import { PopulationData } from '@/common/types';

type ErrorResponse = {
  errorMessage: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PopulationData | ErrorResponse>,
) {
  const response = await fetch(
    `${RESAS_API_BASE_URL}/api/v1/population/composition/perYear?prefCode=${req.query.PrefectureCode}`,
    {
      headers: {
        'X-API-KEY': `${process.env.RESAS_API_SECRET_KEY}`,
      },
    },
  );

  if (!response.ok) {
    const errorMessage = `Failed to fetch PopulationData: ${response.statusText}`;
    console.error(errorMessage);
    res.status(500).json({ errorMessage });
    return;
  }

  const populationByPref = await response.json();
  res.status(200).json(populationByPref);
}
