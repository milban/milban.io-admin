import { DefaultTheme, DarkTheme } from 'styled-components';

const defaultTheme: DefaultTheme = {
  colors: {
    primary: '#ffffff',
    primaryLight: '#ffffff',
    primaryDark: '#cccccc',
    secondary: '#a5d6a7',
    secondaryLight: '#d7ffd9',
    secondaryDark: '#75a478',
    danger: '#ef5350',
    dangerLight: '#ff867c',
    dangerDark: '#b61827',
    fontOnPrimary: '#000000',
    fontOnSecondary: '#ffffff',
    fontOnDanger: '#ffffff',
  },
};

const darkTheme: DarkTheme = {
  colors: {
    primary: '#18191a',
    primaryLight: '#3e3f40',
    primaryDark: '#000000',
    secondary: '#a5d6a7',
    secondaryLight: '#d7ffd9',
    secondaryDark: '#75a478',
    danger: '#ef5350',
    dangerLight: '#ff867c',
    dangerDark: '#b61827',
    fontOnPrimary: '#ffffff',
    fontOnSecondary: '#000000',
    fontOnDanger: '#000000',
  },
};

export { defaultTheme, darkTheme };
