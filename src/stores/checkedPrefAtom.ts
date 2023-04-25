import { atom } from 'recoil';

export const checkedPrefAtom = atom<string[]>({
  key: 'checkedPrefState',
  default: [] as string[],
});
