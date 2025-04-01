import React from "react";
import styled from "styled-components";

const ToolbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  position: relative;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
`;

const MonthText = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const CustomToolbar = ({ label, onNavigate }) => {
  const getKoreanMonth = (label) => {
    const date = new Date(label);
    return `${date.getMonth() + 1}월`;
  };

  return (
    <ToolbarWrapper>
      <NavButton onClick={() => onNavigate("PREV")}>〈</NavButton>

      <MonthText onClick={() => onNavigate("TODAY")}>
        {getKoreanMonth(label)}
      </MonthText>

      <NavButton onClick={() => onNavigate("NEXT")}>〉</NavButton>
    </ToolbarWrapper>
  );
};

export default CustomToolbar;
