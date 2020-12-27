import 'styled-components';

interface Colors {
  primary: string;
  primaryLight: string;
  primaryDark: string;
  secondary: string;
  secondaryLight: string;
  secondaryDark: string;
  danger: string;
  dangerLight: string;
  dangerDark: string;
  fontOnPrimary: string;
  fontOnSecondary: string;
  fontOnDanger: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
  }
  export interface DarkTheme {
    colors: Colors;
  }
}
