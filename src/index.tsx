import ReactDOM from 'react-dom';
import React from 'react';
import App from 'src/App';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme, defaultTheme } from 'src/style/theme';

ReactDOM.render(
  <RecoilRoot>
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </RecoilRoot>,
  document.getElementById('root'),
);
