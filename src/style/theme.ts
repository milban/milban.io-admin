import { DefaultTheme, DarkTheme } from 'styled-components';

const defaultTheme: DefaultTheme = {
  colors: {
    main: '#0266D6',
    secondary: '#DDEEFF',
    point: '#2B974B',
    danger: '#DF7679',
    foreground: '#FAFBFC',
    background: '#FFFFFF',
    font: '#24292E',
  },
};

const darkTheme: DarkTheme = {
  colors: {
    main: '#E5C07B',
    secondary: '#f8f8f2',
    point: '#98C379',
    danger: '#DF7679',
    foreground: '#21242B',
    background: '#282a36',
    font: '#ABB2BF',
  },
};

export { defaultTheme, darkTheme };
