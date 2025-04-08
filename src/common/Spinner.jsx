// src/common/Spinner.jsx
import React from "react";
import { Oval } from "react-loader-spinner";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

const Spinner = () => {
  return (
    <Wrapper>
      <Oval
        height={50}
        width={50}
        color="#3c1e1e"
        secondaryColor="#eee"
        strokeWidth={4}
        visible={true}
        ariaLabel="oval-loading"
      />
    </Wrapper>
  );
};

export default Spinner;
