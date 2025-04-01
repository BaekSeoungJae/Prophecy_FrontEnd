import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    overflow: hidden;
  }
`;

const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const SideBarWrapper = styled.div`
  width: 90px;
  height: 100vh;
`;

const Content = styled.main`
  flex: 1;
  overflow-y: auto;
`;

const CommonForm = ({ toggleTheme, isDarkMode }) => {
  return (
    <Container>
      <SideBarWrapper>
        <SideBar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      </SideBarWrapper>
      <Body>
        <Header />
        <Content>
          <Outlet />
        </Content>
      </Body>
    </Container>
  );
};

export default CommonForm;
