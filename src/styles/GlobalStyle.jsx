// src/styles/GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* 기본 리셋 */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* 스크롤바 스타일 - WebKit 브라우저 기준 */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #aaaaaa;
    border-radius: 0; /* 👈 둥글기 제거 */
  }

  ::-webkit-scrollbar-track {
    background-color: #f0f0f0;
    border-radius: 0; /* 👈 둥글기 제거 */
  }
`;

export default GlobalStyle;
