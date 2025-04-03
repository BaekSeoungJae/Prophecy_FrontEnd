import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import styled from "styled-components";
import CustomToolbar from "./CustomToolbar"; // ✅ 커스텀 툴바 import

// 한글 로케일 설정
const locales = {
  "ko-KR": require("date-fns/locale/ko"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// 스타일
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;

  /* 달력 커스텀 */
  .rbc-month-view {
    width: Calc(100% + 1px);
    border: none !important;
    border-radius: 0 0 20px 20px !important;
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
  .rbc-header:nth-child(1) {
    /* 일요일 */
    color: ${({ theme }) => theme.sunText} !important;
    transition: all 0.3s ease-in-out;
  }
  .rbc-header:nth-child(7) {
    /* 토요일 */
    color: ${({ theme }) => theme.satText} !important;
    transition: all 0.3s ease-in-out;
  }

  /* 요일에 해당하는 일자 색상상 */
  .rbc-month-row .rbc-date-cell:nth-child(1):not(.rbc-off-range) {
    color: ${({ theme }) => theme.sunText} !important; /* 일요일 */
  }
  .rbc-month-row .rbc-date-cell:nth-child(7):not(.rbc-off-range) {
    color: ${({ theme }) => theme.satText} !important; /* 토요일 */
  }

  /* 내부 셀의 테두리 */
  .rbc-day-bg {
    border: 1px solid ${({ theme }) => theme.borderBg} !important;
    transition: all 0.3s ease-in-out;
    box-sizing: border-box;
  }
  /* 일자 글자 */
  .rbc-date-cell {
    text-align: left;
    padding-left: 8px;
    padding-top: 2px;
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
    border: 1px solid ${({ theme }) => theme.todayBg} !important;
    background-color: transparent !important;
    transition: all 0.3s ease-in-out;
  }
  .rbc-today-bg {
    border: 10px solid ${({ theme }) => theme.todayBg} !important;
    background-color: transparent !important;
    transition: all 0.3s ease-in-out;
  }
`;

const events = [{}];

const CalendarView = ({ onDateClick }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);

  // 날짜 이동 처리
  const handleNavigate = (newDate) => {
    setCurrentDate(newDate);
  };

  return (
    <Wrapper>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        views={["month"]}
        defaultView="month"
        date={currentDate}
        onNavigate={handleNavigate}
        popup
        style={{ height: "100%" }}
        onSelectEvent={(event) => setSelectedEvent(event)}
        onSelectSlot={({ start }) => {
          if (onDateClick) onDateClick(start);
        }}
        components={{
          toolbar: CustomToolbar,
        }}
      />
    </Wrapper>
  );
};

export default CalendarView;
