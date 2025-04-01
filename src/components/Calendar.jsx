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
`;

const events = [
  {
    title: "예언 테스트",
    start: new Date(),
    end: new Date(),
    allDay: true,
  },
];

const CalendarView = () => {
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
        date={currentDate} // 현재 날짜 상태
        onNavigate={handleNavigate} // 이동 버튼 클릭 시 날짜 변경
        popup
        style={{ height: "100%" }}
        onSelectEvent={(event) => setSelectedEvent(event)}
        components={{
          toolbar: CustomToolbar, // ✅ 툴바 컴포넌트 연결
        }}
      />
    </Wrapper>
  );
};

export default CalendarView;
