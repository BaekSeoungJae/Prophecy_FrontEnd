import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  height: calc(100vh - 60px); // 헤더 높이 제외
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 98%;
    flex-direction: column;
    justify-content: center;
  }
`;

const SearchPage = () => {
  return <Container></Container>;
};

export default SearchPage;
