import React, { useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineCalendar, HiCalendar } from "react-icons/hi";
import { FaRegUser, FaUser } from "react-icons/fa";
import {
  RiHome5Line,
  RiHome5Fill,
  RiShoppingBagLine,
  RiShoppingBagFill,
  RiSearchLine,
  RiSearchFill,
} from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";

const SidebarContainer = styled.aside`
  background-color: ${({ theme }) => theme.sidebarBg};
  transition: background-color 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: space-between; /* 위쪽 아이콘, 아래쪽 설정 아이콘 분리 */
    align-items: center;
    padding: 20px 0;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 55px;
    position: fixed;
    bottom: 0;
    left: 0;
    flex-direction: row;
  }
`;

const IconGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const IconButton = styled(Link)`
  color: ${({ $active }) => ($active ? "#2c2c2c" : "#5a5a5a")};
  width: 70px;
  height: 50px;
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  margin: 10px;
  text-decoration: none;
  background-color: ${({ $active }) => ($active ? "#e2e2e2" : "transparent")};

  &:hover {
    color: #2c2c2c;
    background-color: #e0e0e0;
  }

  @media (max-width: 768px) {
    width: 60px;
    margin: 10px;
    background-color: transparent;

    &:hover {
      background-color: transparent;
    }
  }
`;

const SettingWrapper = styled.div`
  position: relative;
`;

const SettingButton = styled.div`
  color: #5a5a5a;
  width: 70px;
  height: 50px;
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  margin: 10px;

  &:hover {
    color: #2c2c2c;
    background-color: #e0e0e0;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const SettingPopup = styled.div`
  width: 150px;
  height: 100px;
  position: absolute;
  left: 100px;
  bottom: -10px;
  background: white;
  border: 1px solid #dadada;
  border-radius: 8px;
  padding: 10px;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ThemeToggleButton = styled.button`
  padding: 10px 14px;
  background-color: #444;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #333;
  }
`;

const SideBar = ({ toggleTheme }) => {
  const location = useLocation();
  const [isSettingOpen, setIsSettingOpen] = useState(false);

  const toggleSetting = () => {
    setIsSettingOpen((prev) => !prev);
  };

  return (
    <SidebarContainer>
      <IconGroup>
        <IconButton to="/feed" $active={location.pathname === "/feed"}>
          {location.pathname === "/feed" ? (
            <RiHome5Fill size={30} />
          ) : (
            <RiHome5Line size={30} />
          )}
        </IconButton>
        <IconButton to="/search" $active={location.pathname === "/search"}>
          {location.pathname === "/search" ? (
            <RiSearchFill />
          ) : (
            <RiSearchLine />
          )}
        </IconButton>
        <IconButton to="/" $active={location.pathname === "/"}>
          {location.pathname === "/" ? <HiCalendar /> : <HiOutlineCalendar />}
        </IconButton>
        <IconButton to="/shop" $active={location.pathname === "/shop"}>
          {location.pathname === "/shop" ? (
            <RiShoppingBagFill />
          ) : (
            <RiShoppingBagLine />
          )}
        </IconButton>
        <IconButton to="/mypage" $active={location.pathname === "/mypage"}>
          {location.pathname === "/mypage" ? (
            <FaUser size={24} />
          ) : (
            <FaRegUser size={24} />
          )}
        </IconButton>
      </IconGroup>

      {/* 설정 버튼 + 팝업 */}
      <SettingWrapper>
        {isSettingOpen && (
          <SettingPopup>
            <ThemeToggleButton onClick={toggleTheme}>
              🌙 다크모드
            </ThemeToggleButton>
          </SettingPopup>
        )}
        <SettingButton onClick={toggleSetting}>
          <IoSettingsSharp />
        </SettingButton>
      </SettingWrapper>
    </SidebarContainer>
  );
};
export default SideBar;
