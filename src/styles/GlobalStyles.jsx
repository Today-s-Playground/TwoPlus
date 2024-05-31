import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  :root {
  --main-color: #CEACF6;
  --sub-color: #B341F3;
  --hover-color: #8D50DB;
  font-family: "Noto Sans KR", sans-serif;
  }
`;

export default GlobalStyle;
