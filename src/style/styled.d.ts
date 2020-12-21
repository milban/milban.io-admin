import 'styled-components';

interface Colors {
  main: string;
  secondary: string;
  point: string;
  danger: string;
  foreground: string;
  background: string;
  font: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
  }
  export interface DarkTheme {
    colors: Colors;
  }
}
