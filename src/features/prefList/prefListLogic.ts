import { useCallback } from 'react';

import { produce } from 'immer';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';

import { fetchPopulationByPrefCode } from './fetchPopulationByPrefCode';
import { setPopulationByType } from './setPopulationByType';

import {
  checkedPrefAtom,
  populationByYearAtoms,
  prefectureAtom,
} from '@/stores/atoms';

const {
  TotalPopulationAtom,
  YoungPopulationAtom,
  WorkingPopulationAtom,
  ElderlyPopulationAtom,
} = populationByYearAtoms;

const PrefListLogic = () => {
  const [checkedPrefs, setCheckedPrefs] = useRecoilState(checkedPrefAtom);
  const prefectures = useRecoilValue(prefectureAtom);
  const [
    setTotalPopulation,
    setYoungPopulation,
    setWorkingPopulation,
    setElderlyPopulation,
  ] = [
    useSetRecoilState(TotalPopulationAtom),
    useSetRecoilState(YoungPopulationAtom),
    useSetRecoilState(WorkingPopulationAtom),
    useSetRecoilState(ElderlyPopulationAtom),
  ];

  const handleCheckboxChange = useCallback(
    async (prefCode: string) => {
      const isChecked = checkedPrefs.includes(prefCode);
      const targetPrefecture = prefectures.find(
        prefecture => String(prefecture.prefCode) === prefCode,
      );

      setCheckedPrefs(
        produce(draft => {
          if (isChecked) {
            draft.splice(draft.indexOf(prefCode), 1);
          } else {
            draft.push(prefCode);
          }
        }),
      );

      const handlePopulationData = async (
        prefName: string,
        prefCode: string,
      ) => {
        try {
          const populationDataList = await fetchPopulationByPrefCode(prefCode);
          const populationSetters = [
            setTotalPopulation,
            setYoungPopulation,
            setWorkingPopulation,
            setElderlyPopulation,
          ];

          populationDataList.forEach((data, index) => {
            const populationSetter = populationSetters[index];
            if (data.length > 0 && populationSetter) {
              setPopulationByType(prefName, data, populationSetter);
            }
          });
        } catch (error) {
          console.error(
            `Failed to fetch population data for prefCode: ${prefCode}, error: ${error}`,
          );
        }
      };
      handlePopulationData(targetPrefecture?.prefName!, prefCode);
    },
    [
      checkedPrefs,
      prefectures,
      setCheckedPrefs,
      setElderlyPopulation,
      setTotalPopulation,
      setWorkingPopulation,
      setYoungPopulation,
    ],
  );
  return {
    handleCheckboxChange,
  };
};

export default PrefListLogic;
