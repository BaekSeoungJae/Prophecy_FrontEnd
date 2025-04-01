// src/components/SidebarSettings.jsx
import React, { useRef } from "react";
import styled from "styled-components";
import { IoSettingsSharp } from "react-icons/io5";
import useClickOutside from "../common/useClickOutside";

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
    background-color: ${({ theme }) => theme.sideBtnBg};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const PopupSetting = styled.div`
  width: 150px;
  height: 100px;
  position: absolute;
  left: 100px;
  bottom: -10px;
  background-color: ${({ theme }) => theme.sidebarBg};
  border: 1px solid ${({ theme }) => theme.borderBg};
  transition: all 0.3s;
  border-radius: 8px;
  padding: 10px;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SwitchWrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const SwitchInput = styled.input`
  display: none;
`;

const SwitchSlider = styled.span`
  width: 40px;
  height: 22px;
  border-radius: 50px;
  background-color: ${({ $checked }) => ($checked ? "#4e4e4e" : "#ccc")};
  position: relative;
  transition: background-color 0.3s;

  &::before {
    content: "";
    position: absolute;
    top: 2px;
    left: ${({ $checked }) => ($checked ? "20px" : "2px")};
    width: 18px;
    height: 18px;
    background-color: ${({ $checked }) => ($checked ? "#adadad" : "#ffffff")};
    border-radius: 50%;
    transition: all 0.3s;
  }
`;

const SettingPopup = ({ isOpen, toggleTheme, setIsOpen, isDarkMode }) => {
  const popupRef = useRef(null);
  useClickOutside(popupRef, () => setIsOpen(false));

  const toggleSetting = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <SettingWrapper ref={popupRef}>
      {isOpen && (
        <PopupSetting>
          <SwitchWrapper>
            <SwitchInput
              type="checkbox"
              checked={isDarkMode}
              onChange={toggleTheme}
            />
            <SwitchSlider $checked={isDarkMode} />
          </SwitchWrapper>
        </PopupSetting>
      )}
      <SettingButton onClick={toggleSetting}>
        <IoSettingsSharp />
      </SettingButton>
    </SettingWrapper>
  );
};

export default SettingPopup;
