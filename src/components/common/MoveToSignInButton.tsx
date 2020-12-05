import React from 'react';
import { useHistory } from 'react-router-dom';
import { PathName } from 'src/constants/pathName';

const MoveToSignInButton: React.FC = ({ children }) => {
  const history = useHistory();
  const moveToSignInPage = () => {
    history.push(PathName.SIGN_IN);
  };
  return <button onClick={moveToSignInPage}>{children || '로그인'}</button>;
};

export default MoveToSignInButton;
