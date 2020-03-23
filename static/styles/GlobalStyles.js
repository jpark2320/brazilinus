import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    background-color: #eff3f5;
  }
`;

export default GlobalStyle;
