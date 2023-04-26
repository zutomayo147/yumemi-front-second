import { ChangeEvent, FC } from 'react';

import { PopulationType } from '@/common/populationType';

type RadioButtonProps = {
  name: string;
  value: PopulationType;
  label: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const RadioButton: FC<RadioButtonProps> = ({
  name,
  value,
  label,
  checked,
  onChange,
}) => {
  return (
    <label className='radio-button'>
      <input
        type='radio'
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  );
};

export default RadioButton;
