import { atom } from 'recoil';
import { StoreKey } from 'src/stores';

export const isAuthState = atom<boolean>({
  key: StoreKey.AUTH__IS_AUTH,
  default: !!localStorage.getItem('token'),
});
