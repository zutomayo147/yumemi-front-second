import { ChangeEvent, FC } from 'react';

import { useRecoilState } from 'recoil';

import { PopulationType } from '@/common/populationType';
import RadioButton from '@/components/RadioButton';
import { populationTypeAtom } from '@/stores/atoms';

const PopulationRadioButton: FC = () => {
  const [populationType, setPopulationType] =
    useRecoilState(populationTypeAtom);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPopulationType(parseInt(event.target.value, 10));
  };

  return (
    <>
      <RadioButton
        name='populationType'
        value={PopulationType.TotalPopulation}
        label='総人口'
        checked={populationType === PopulationType.TotalPopulation}
        onChange={handleChange}
      />
      <RadioButton
        name='populationType'
        value={PopulationType.YoungPopulation}
        label='年少人口'
        checked={populationType === PopulationType.YoungPopulation}
        onChange={handleChange}
      />
      <RadioButton
        name='populationType'
        value={PopulationType.WorkingPopulation}
        label='生産年齢人口'
        checked={populationType === PopulationType.WorkingPopulation}
        onChange={handleChange}
      />
      <RadioButton
        name='populationType'
        value={PopulationType.ElderlyPopulation}
        label='老年人口'
        checked={populationType === PopulationType.ElderlyPopulation}
        onChange={handleChange}
      />
    </>
  );
};

export default PopulationRadioButton;
