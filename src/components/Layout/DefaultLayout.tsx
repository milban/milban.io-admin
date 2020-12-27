import React from 'react';
import { useRecoilValue } from 'recoil';
import Nav from 'src/components/common/Nav';
import SignOutButton from 'src/components/common/SingOutButton';
import MoveToSignInButton from 'src/components/common/MoveToSignInButton';
import { isAuthState } from 'src/stores/auth';
import ThemeToggleButton from 'src/components/common/ThemeToggleButton';

const DefaultLayout: React.FC = ({ children }) => {
  const isAuth = useRecoilValue(isAuthState);
  return (
    <div>
      <header>
        <ThemeToggleButton />
        <Nav />
        {isAuth ? <SignOutButton /> : <MoveToSignInButton />}
      </header>
      {children}
    </div>
  );
};

export default DefaultLayout;
