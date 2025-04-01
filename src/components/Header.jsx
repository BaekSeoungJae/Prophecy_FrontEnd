import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.background};
  border-bottom: 1px solid ${({ theme }) => theme.borderBg};
  transition: all 0.3s ease;
`;

const Header = () => {
  return <Container></Container>;
};

export default Header;
