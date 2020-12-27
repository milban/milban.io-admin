import React from 'react';
import Router from 'src/components/common/Router';
import GlobalStyle from 'src/GlobalStyle';
import { darkTheme, defaultTheme } from 'src/style/theme';
import { ThemeProvider } from 'styled-components';
import { useRecoilValue } from 'recoil';
import { isDefaultThemeState } from 'src/stores/theme';

const App: React.FC = () => {
  const isDefaultTheme = useRecoilValue<boolean>(isDefaultThemeState);
  return (
    <ThemeProvider theme={isDefaultTheme ? defaultTheme : darkTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
};

export default App;
