import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rosybrown;

  @media (max-width: 768px) {
    overflow-y: none;
  }
`;

const Container2 = styled.div`
  width: 100%;
  height: calc(100vh - 60px); // 헤더 높이 제외
  background-color: #ffffff;
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
