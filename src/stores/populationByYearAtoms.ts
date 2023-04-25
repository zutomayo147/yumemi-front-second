import { atomFamily } from 'recoil';

import type { PopulationByYear } from '@/common/types';

const populationByYearAtomFamily = atomFamily<PopulationByYear[], string>({
  key: 'populationByYearAtom',
  default: [],
});

export const populationByYearAtoms = {
  TotalPopulationAtom: populationByYearAtomFamily('TotalPopulation'),
  YoungPopulationAtom: populationByYearAtomFamily('YoungPopulation'),
  WorkingPopulationAtom: populationByYearAtomFamily('WorkingPopulation'),
  ElderlyPopulationAtom: populationByYearAtomFamily('ElderlyPopulation'),
};
