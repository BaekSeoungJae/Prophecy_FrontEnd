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
`;

const Body = styled.div`
  flex: 1;
  display: flex;
  height: calc(100vh - 60px); // 헤더 높이만큼 제외
`;

const SideBarWrapper = styled.div`
  width: 90px;
  height: 100vh;
`;

const HeaderWrapper = styled.div`
  height: 60px;
`;

const Content = styled.main`
  flex: 1;
  overflow-y: auto;
`;

const CommonForm = () => {
  return (
    <Container>
      <SideBarWrapper>
        <SideBar />
      </SideBarWrapper>
      <Body>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <Content>
          <Outlet />
        </Content>
      </Body>
    </Container>
  );
};

export default CommonForm;
