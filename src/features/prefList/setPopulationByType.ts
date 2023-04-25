import { produce, Draft } from 'immer';

import type { PopulationByYear, PopulationData } from '@/common/types';
export const setPopulationByType = (
  prefName: string,
  data: PopulationData[],
  setPopulation: (f: (prev: PopulationByYear[]) => PopulationByYear[]) => void,
) => {
  setPopulation((prev: PopulationByYear[]) =>
    produce(prev, (draft: Draft<PopulationByYear[]>) => {
      data.forEach(({ year, value }) => {
        const i = draft.findIndex(prev => prev.year === year);
        if (i > -1) {
          draft[i]![prefName] = value;
        } else {
          draft.push({
            year,
            [prefName]: value,
          });
        }
      });
    }),
  );
};
