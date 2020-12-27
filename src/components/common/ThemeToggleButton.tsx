import React from 'react';
import Button from 'src/components/common/Button';
import { useSetRecoilState } from 'recoil';
import { isDefaultThemeState } from 'src/stores/theme';

const ThemeToggleButton: React.FC = () => {
  const setIsDefaultThemeState = useSetRecoilState(isDefaultThemeState);
  const toggleTheme = () => setIsDefaultThemeState((prev) => !prev);

  return <Button onClick={toggleTheme}>테마 변경</Button>;
};

export default ThemeToggleButton;
