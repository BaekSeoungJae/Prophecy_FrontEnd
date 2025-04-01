// src/styles/GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* 스크롤바 스타일 - WebKit 브라우저 기준 */
  ::-webkit-scrollbar {
    width: 6px;
  }

  /* 움직이는 바 */
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.scrollBar};
    border-radius: 0; 
  }

  /* 스크롤바 배경경 */
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.scrollBg};
    border-radius: 0;
  }
`;

export default GlobalStyle;
