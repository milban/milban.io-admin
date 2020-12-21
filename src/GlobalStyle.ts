import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    background-color: ${(props) => props.theme.colors.background};
  }
`;

export default GlobalStyle;
