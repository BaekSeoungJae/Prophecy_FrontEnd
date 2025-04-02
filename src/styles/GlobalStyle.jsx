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

  /* 달력 커스텀 */
  .rbc-month-view {
    width: calc(100% + 1px);
    border: none !important;
    border-radius: 0 0 20px 20px !important;
    overflow: hidden !important; /* 🔥 중요: 안 하면 내부 셀 둥글기 적용 안 됨 */
  }
  /* 주차(week row) 아래 하얀 선 제거 */
  .rbc-month-row {
    border: none !important;
  }
  
  .rbc-month-row:last-child .rbc-day-bg:first-child {
    border-bottom-left-radius: 20px !important;
    color: ${({ theme }) => theme.otherText} !important;
    transition: all 0.3s ease-in-out;
  }

  .rbc-month-row:last-child .rbc-day-bg:last-child {
    border-bottom-right-radius: 20px !important;
    color: ${({ theme }) => theme.otherText} !important;
    transition: all 0.3s ease-in-out;
  }

  .rbc-off-range-bg {
    background-color: ${({ theme }) => theme.calendarOutRangeBg} !important;
    transition: background-color 0.3s ease-in-out;
  }

    /* 요일 바 배경 */
  .rbc-header {
    background-color: ${({ theme }) => theme.calendarHeaderBg} !important;
    color: ${({ theme }) => theme.calendarHeaderText} !important;
    border: 1px solid ${({ theme }) => theme.borderBg} !important;
    transition: all 0.3s ease-in-out;
  }
    /* 내부 셀의 테두리 */
    .rbc-day-bg {
    border: 1px solid ${({ theme }) => theme.borderBg} !important;
    transition: all 0.3s ease-in-out;
  }
  /* 일자 글자 색 */
  .rbc-date-cell {
    color: ${({ theme }) => theme.calendarDateText} !important;
    transition: all 0.3s ease-in-out;
  }
  /* 이전, 다음 달 글자색 */
  .rbc-off-range {
  color: ${({ theme }) => theme.otherText} !important;
  transition: all 0.3s ease-in-out;
  }
  /* 오늘 색 */
  .rbc-today {
    border: 2px solid ${({ theme }) => theme.todayBg} !important;
    background-color: transparent !important;
    transition: all 0.3s ease-in-out;
  }

  
`;

export default GlobalStyle;
