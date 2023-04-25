import { atom } from 'recoil';

import type { Prefecture } from '@/common/types';
export const prefectureAtom = atom<Prefecture[]>({
  key: 'prefectureAtom',
  default: [],
});
