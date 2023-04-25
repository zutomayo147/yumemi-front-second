import type { Prefecture } from '@/common/types';

type Props = {
  prefecture: Prefecture;
  onChange: (prefCode: string) => void;
};

const Checkbox = ({ prefecture, onChange }: Props) => {
  return (
    <label className='pref-list__checkbox'>
      <input
        type='checkbox'
        value={prefecture.prefName}
        onChange={() => onChange(String(prefecture.prefCode))}
        aria-label={`${prefecture.prefName}のチェックボックス`}
      />
      {prefecture.prefName}
    </label>
  );
};

export default Checkbox;
