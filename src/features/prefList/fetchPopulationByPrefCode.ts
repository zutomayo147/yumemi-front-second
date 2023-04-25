import axios, { AxiosResponse } from 'axios';

import type { PopulationData } from '@/common/types';

import { getFromCache, setToCache } from '@/common/apiCache';
type PopulationDataResponse = {
  result?: {
    data: {
      data: PopulationData[];
    }[];
  };
};

type PopulationDataCategory = [
  total: PopulationData[],
  young: PopulationData[],
  working: PopulationData[],
  elderly: PopulationData[],
];
export const fetchPopulationByPrefCode = async (
  prefCode: string,
): Promise<PopulationDataCategory> => {
  const cacheKey = `/api/PopulationByPref/${prefCode}`;
  const cachedData = getFromCache<PopulationDataCategory>(cacheKey);

  if (cachedData) {
    return cachedData;
  } else {
    const { data }: AxiosResponse<PopulationDataResponse> = await axios.get(
      `/api/PopulationByPref/${prefCode}`,
    );
    if (data.result) {
      const TotalPopulationData = data.result.data[0]?.data ?? [];
      const YoungPopulationData = data.result.data[1]?.data ?? [];
      const WorkingPopulationData = data.result.data[2]?.data ?? [];
      const ElderyPopulationData = data.result.data[3]?.data ?? [];
      const populationData: PopulationDataCategory = [
        TotalPopulationData,
        YoungPopulationData,
        WorkingPopulationData,
        ElderyPopulationData,
      ];
      setToCache(cacheKey, populationData);
      return populationData;
    } else {
      return [[], [], [], []];
    }
  }
};
