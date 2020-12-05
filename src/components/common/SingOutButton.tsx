import React from 'react';
import { useSetRecoilState } from 'recoil';
import { isAuthState } from 'src/stores/auth';

interface UseLogout {
  (): () => void;
}
const useLogout: UseLogout = () => {
  const setIsAuthState = useSetRecoilState(isAuthState);
  const logout = (): void => {
    localStorage.removeItem('token');
    setIsAuthState(false);
  };
  return logout;
};

const SignOutButton: React.FC = ({ children }) => {
  const logout = useLogout();
  return <button onClick={logout}>{children || '로그아웃'}</button>;
};

export default SignOutButton;
