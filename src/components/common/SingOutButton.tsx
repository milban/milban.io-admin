import React from 'react';
import { useSetRecoilState } from 'recoil';
import { isAuthState } from 'src/stores/auth';
import AuthModel from 'src/models/auth/AuthModel';
import { AuthRelayModel } from 'src/models/auth/AuthRelayModel';
import Button, { ButtonProps } from 'src/components/common/Button';

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

const SignOutButton: React.FC<ButtonProps> = ({ children, ...restProps }) => {
  const logout = useSignOut();
  return (
    <Button onClick={logout} {...restProps}>
      {children || '로그아웃'}
    </Button>
  );
};

export default SignOutButton;
