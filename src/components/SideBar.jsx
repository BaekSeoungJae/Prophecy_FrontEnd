import React from "react";
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

const SidebarContainer = styled.aside`
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
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

const SideBar = () => {
  const location = useLocation();
  return (
    <SidebarContainer>
      <IconButton to="/" $active={location.pathname === "/"}>
        {location.pathname === "/" ? (
          <RiHome5Fill size={30} />
        ) : (
          <RiHome5Line size={30} />
        )}
      </IconButton>
      <IconButton to="/search" $active={location.pathname === "/search"}>
        {location.pathname === "/search" ? <RiSearchFill /> : <RiSearchLine />}
      </IconButton>
      <IconButton to="/feed" $active={location.pathname === "/feed"}>
        {location.pathname === "/feed" ? <HiCalendar /> : <HiOutlineCalendar />}
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
    </SidebarContainer>
  );
};
export default SideBar;
