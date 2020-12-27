import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background-color: ${(props) => props.theme.colors.primary};
  }
  * {
    box-sizing: border-box;
    color: ${(props) => props.theme.colors.fontOnPrimary};
    font-size: 1rem;
  }
`;

export default GlobalStyle;
