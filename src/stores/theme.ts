import { atom } from 'recoil';
import { StoreKey } from 'src/stores/index';

export const isDefaultThemeState = atom<boolean>({
  key: StoreKey.THEME__IS_DEFAULT,
  default: true,
});
