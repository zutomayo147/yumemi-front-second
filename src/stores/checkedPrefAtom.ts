import { atom } from 'recoil';

export const checkedPrefAtom = atom<string[]>({
  key: 'checkedPrefAtom',
  default: [] as string[],
});
