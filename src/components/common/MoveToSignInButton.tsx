import React from 'react';
import { useHistory } from 'react-router-dom';
import { PathName } from 'src/constants/pathName';
import Button, { ButtonProps } from 'src/components/common/Button';

const MoveToSignInButton: React.FC<ButtonProps> = ({
  children,
  ...restProps
}) => {
  const history = useHistory();
  const moveToSignInPage = () => {
    history.push(PathName.SIGN_IN);
  };
  return (
    <Button onClick={moveToSignInPage} {...restProps}>
      {children || '로그인'}
    </Button>
  );
};

export default MoveToSignInButton;
