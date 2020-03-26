import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    background-color: #eff3f5;
  }
  input {
    outline: none;
  }
  div,
  span {
    color: #3d5866;
  }
  svg {
    fill: #3d5866;
  }
`;

export default GlobalStyle;
