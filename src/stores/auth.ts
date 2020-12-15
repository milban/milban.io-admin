import { atom } from 'recoil';
import { StoreKey } from 'src/stores';
import { AuthRelayModel } from 'src/models/auth/AuthRelayModel';

export const isAuthState = atom<boolean>({
  key: StoreKey.AUTH__IS_AUTH,
  default: !!new AuthRelayModel().getToken(),
});
