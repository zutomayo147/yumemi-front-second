import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { useRecoilValue } from 'recoil';

import RenderLine from './RenderLine';

import type { Prefecture } from '@/common/types';

import { PopulationType } from '@/common/populationType';
import {
  checkedPrefAtom,
  prefectureAtom,
  populationTypeAtom,
  populationByYearAtoms,
} from '@/stores/atoms';

const {
  TotalPopulationAtom,
  YoungPopulationAtom,
  WorkingPopulationAtom,
  ElderlyPopulationAtom,
} = populationByYearAtoms;

const PopulationChart = () => {
  const [checkedPrefs, populationType, prefectures] = [
    useRecoilValue(checkedPrefAtom),
    useRecoilValue(populationTypeAtom),
    useRecoilValue(prefectureAtom),
  ];
  const [
    TotalPopulation,
    YoungPopulation,
    WorkingPopulation,
    ElderlyPopulation,
  ] = [
    useRecoilValue(TotalPopulationAtom),
    useRecoilValue(YoungPopulationAtom),
    useRecoilValue(WorkingPopulationAtom),
    useRecoilValue(ElderlyPopulationAtom),
  ];

  const populationData =
    populationType === PopulationType.YoungPopulation
      ? YoungPopulation
      : populationType === PopulationType.WorkingPopulation
      ? WorkingPopulation
      : populationType === PopulationType.ElderlyPopulation
      ? ElderlyPopulation
      : TotalPopulation;

  return (
    <>
      <div className='graph__container'>
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart
            data={populationData}
            margin={{ top: 50, right: 10, bottom: 5, left: 35 }}
          >
            <XAxis
              dataKey='year'
              label={{ value: '年度', offset: 20, position: 'right' }}
            />
            <YAxis
              tickFormatter={value => value.toLocaleString()}
              label={{ value: '人口数', position: 'top', offset: 20 }}
            />
            <CartesianGrid strokeDasharray='3 3' />
            <Legend
              verticalAlign='top'
              align='right'
              layout='vertical'
              width={125}
            />
            {checkedPrefs.map(prefCode => {
              const pCode = parseInt(prefCode, 10);
              const pref: Prefecture = prefectures[pCode - 1]!;
              return RenderLine(pCode, pref);
            })}
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default PopulationChart;
