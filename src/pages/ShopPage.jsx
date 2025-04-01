import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  transition: background-color 0.3s ease;
`;

const ShopPage = () => {
  return <Container></Container>;
};

export default ShopPage;
