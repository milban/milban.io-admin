import React from 'react';
import { useSetRecoilState } from 'recoil';
import { isAuthState } from 'src/stores/auth';
import AuthModel from 'src/models/auth/AuthModel';
import { AuthRelayModel } from 'src/models/auth/AuthRelayModel';

interface UseSignOut {
  (): () => void;
}
const useSignOut: UseSignOut = () => {
  const setIsAuthState = useSetRecoilState(isAuthState);
  const signOut = (): void => {
    const authModel: AuthModel = new AuthRelayModel();
    authModel.removeToken();
    setIsAuthState(false);
  };
  return signOut;
};

const SignOutButton: React.FC = ({ children }) => {
  const logout = useSignOut();
  return <button onClick={logout}>{children || '로그아웃'}</button>;
};

export default SignOutButton;
