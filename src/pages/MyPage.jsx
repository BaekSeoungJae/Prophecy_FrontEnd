import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  height: calc(100vh - 60px); // 헤더 높이 제외
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  transition: background-color 0.3s ease-in-out;
`;

const MainWrapper = styled.div`
  height: 90%;
  width: 90%;
  background-color: ${({ theme }) => theme.calendarBg};
  border: 1px solid ${({ theme }) => theme.borderBg};
  transition: all 0.3s ease-in-out;
  border-radius: 20px;
  flex-shrink: 0; // ✅ 모바일에서 아래에서 위로 슬라이드
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
    height: 85%;
    margin-bottom: 5%;
  }
`;

const MyPage = () => {
  return (
    <Container>
      <MainWrapper></MainWrapper>
    </Container>
  );
};

export default MyPage;
