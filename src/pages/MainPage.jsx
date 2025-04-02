import React from "react";
import styled from "styled-components";
import CalendarView from "../components/Calendar";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px); // 헤더 높이 제외
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  transition: background-color 0.3s ease;
`;

const MainWrapper = styled.div`
  width: 90%;
  height: 90%; // 헤더 높이 제외
  background-color: ${({ theme }) => theme.calendarBg};
  border: 1px solid ${({ theme }) => theme.borderBg};
  transition: all 0.3s ease;
  border-radius: 20px;
`;

const MainPage = () => {
  return (
    <Container>
      <MainWrapper>
        <CalendarView></CalendarView>
      </MainWrapper>
    </Container>
  );
};

export default MainPage;
