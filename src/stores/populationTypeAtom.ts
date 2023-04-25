import { atom } from 'recoil';

import { PopulationType } from '@/common/populationType';

export const populationTypeAtom = atom<PopulationType>({
  key: 'populationTypeAtom',
  default: PopulationType.TotalPopulation,
});
