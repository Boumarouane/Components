import React from "react";
import styled from "styled-components";

const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Share = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  line-height: 50px;
  text-align: center;
  color: #fff;
  background: #607d8b;
  border-radius: 50%;
  z-index: 1;
  box-shadow: 0 0 0 2px #112833;
`;

const Icon = styled.div`


`;

const IconPivot = ({icon}) => {
  return (
    <Circle>
      <Share>
        <Icon>{icon}</Icon>
      </Share>
    </Circle>
  );
};

export default IconPivot;
