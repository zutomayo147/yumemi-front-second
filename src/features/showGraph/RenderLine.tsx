import { Line } from 'recharts';

import type { Prefecture } from '@/common/types';

import { COLOR_CODE } from '@/common/const/COLOR_CODE';
const RenderLine = (prefCode: number, pref: Prefecture) => {
  if (!pref) return null;
  const colorCode = COLOR_CODE[prefCode];
  return (
    <Line
      key={pref.prefCode}
      type='linear'
      dataKey={pref.prefName}
      stroke={colorCode}
      activeDot={{ r: 8 }}
    />
  );
};

export default RenderLine;
