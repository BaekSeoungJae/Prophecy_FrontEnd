import React, { useState } from "react";
import styled from "styled-components";
import CalendarView from "../components/Calendar";

const Container = styled.div`
  width: 90%;
  height: calc(100vh - 60px); // 헤더 높이 제외
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  transition: background-color 0.3s ease;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 98%;
    flex-direction: column;
    justify-content: center;
  }
`;

const MainWrapper = styled.div`
  height: 90%;
  width: ${({ showProphecy }) =>
    showProphecy ? "calc(100% - 420px)" : "100%"};
  background-color: ${({ theme }) => theme.calendarBg};
  border: 1px solid ${({ theme }) => theme.borderBg};
  transition: all 0.3s ease;
  border-radius: 20px;
  flex-shrink: 0; // ✅ 모바일에서 아래에서 위로 슬라이드
  @media (max-width: 1200px) {
    width: ${({ showProphecy }) => (showProphecy ? "100%" : "100%")};
  }

  @media (max-width: 768px) {
    width: ${({ showProphecy }) => (showProphecy ? "100%" : "100%")};
    height: 85%;
    margin-bottom: 5%;
  }
`;

const ProphecyPanel = styled.div`
  will-change: transform;
  width: 400px;
  height: 90%;
  opacity: ${({ show }) => (show ? 1 : 0)};
  pointer-events: ${({ show }) => (show ? "auto" : "none")};
  background-color: ${({ theme }) => theme.calendarBg};
  border: 1px solid ${({ theme }) => theme.borderBg};
  transform: ${({ show }) => (show ? "translateX(0)" : "translateX(100%)")};
  transition: all 0.3s ease;
  z-index: 10;
  position: absolute;
  right: 0px;
  border-radius: 20px;

  // ✅ 모바일에서 아래에서 위로 슬라이드
  @media (max-width: 768px) {
    width: 90%;
    height: 80%;
    right: auto;
    left: 5%;
    bottom: 10%;
    border-radius: 20px;
    transform: ${({ show }) => (show ? "translateY(0)" : "translateY(100%)")};
  }
`;

const MainPage = () => {
  const [showProphecy, setShowProphecy] = useState(false);

  const handleDateClick = () => {
    setShowProphecy((prev) => !prev); // 클릭 시 토글
  };

  const handleOutsideClick = () => {
    setShowProphecy(false);
  };
  return (
    <Container onClick={handleOutsideClick}>
      <MainWrapper
        showProphecy={showProphecy}
        onClick={(e) => e.stopPropagation()}
      >
        <CalendarView onDateClick={handleDateClick} />
      </MainWrapper>
      <ProphecyPanel show={showProphecy} onClick={(e) => e.stopPropagation()}>
        <h3 style={{ padding: "20px" }}>🪄 예언 입력창</h3>
      </ProphecyPanel>
    </Container>
  );
};

export default MainPage;
