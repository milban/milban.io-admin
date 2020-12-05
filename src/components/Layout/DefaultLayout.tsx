import React from 'react';
import { useRecoilValue } from 'recoil';
import Nav from 'src/components/common/Nav';
import SignOutButton from 'src/components/common/SingOutButton';
import MoveToSignInButton from 'src/components/common/MoveToSignInButton';
import { isAuthState } from 'src/stores/auth';

const DefaultLayout: React.FC = ({ children }) => {
  const isAuth = useRecoilValue(isAuthState);
  return (
    <div>
      <header>
        <Nav />
        {isAuth ? <SignOutButton /> : <MoveToSignInButton />}
      </header>
      {children}
    </div>
  );
};

export default DefaultLayout;
