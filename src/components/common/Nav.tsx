import React from 'react';
import { Link } from 'react-router-dom';
import { PathName } from 'src/constants/pathName';
import styled from 'styled-components';

const LinkListContainer = styled.ul`
  display: flex;
  align-items: center;

  & > li {
    margin: 0 1rem;
    &:first-child {
      margin-left: 0;
    }
  }
`;

const Nav: React.FC = () => {
  return (
    <nav>
      <LinkListContainer>
        <li>
          <Link to={PathName.HOME}>Home</Link>
        </li>
        <li>
          <Link to={PathName.POSTS}>Posts</Link>
        </li>
      </LinkListContainer>
    </nav>
  );
};

export default Nav;
