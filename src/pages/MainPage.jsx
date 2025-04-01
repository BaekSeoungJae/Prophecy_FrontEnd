import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container2 = styled.div`
  width: 100%;
  height: calc(100vh - 60px); // 헤더 높이 제외
  background-color: ${({ theme }) => theme.background};
  transition: background-color 0.3s ease;
`;

const MainPage = () => {
  return (
    <Container>
      <Container2></Container2>
      <Container2></Container2>
      <Container2></Container2>
    </Container>
  );
};

export default MainPage;
