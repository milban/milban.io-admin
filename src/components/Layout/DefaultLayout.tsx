import React from 'react';
import { useRecoilValue } from 'recoil';
import Nav from 'src/components/common/Nav';
import SignOutButton from 'src/components/common/SingOutButton';
import MoveToSignInButton from 'src/components/common/MoveToSignInButton';
import { isAuthState } from 'src/stores/auth';
import ThemeToggleButton from 'src/components/common/ThemeToggleButton';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { PathName } from 'src/constants/pathName';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
`;

const HeaderActionContainer = styled.div``;

const StyledMain = styled.main`
  padding: 0 1rem;
`;

const DefaultLayout: React.FC = ({ children }) => {
  const { pathname } = useLocation();
  const isAuth: boolean = useRecoilValue(isAuthState);
  const isSignInPath: boolean = pathname.includes(PathName.SIGN_IN);
  return (
    <div>
      <StyledHeader>
        <Nav />
        <HeaderActionContainer>
          {!isSignInPath &&
            (isAuth ? (
              <SignOutButton appearance="secondary" />
            ) : (
              <MoveToSignInButton appearance="secondary" />
            ))}
          <ThemeToggleButton />
        </HeaderActionContainer>
      </StyledHeader>
      <StyledMain>{children}</StyledMain>
    </div>
  );
};

export default DefaultLayout;
