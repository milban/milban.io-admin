import React from 'react';
import { useHistory } from 'react-router-dom';
import { PathName } from 'src/constants/pathName';
import Button from 'src/components/common/Button';

const MoveToSignInButton: React.FC = ({ children }) => {
  const history = useHistory();
  const moveToSignInPage = () => {
    history.push(PathName.SIGN_IN);
  };
  return <Button onClick={moveToSignInPage}>{children || '로그인'}</Button>;
};

export default MoveToSignInButton;
