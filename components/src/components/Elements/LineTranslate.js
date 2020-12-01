import React from "react";
import styled, { keyframes } from "styled-components";

const animationLine = keyframes`
0% {
transform-origin: top;
transform :scaleY(0);
}
100% {
transform-origin: top;
transform :scaleY(1);
}
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Line = styled.div`
  width: 50%;
  height: 500px;
  background: red;
  opacity:50%;
  position: relative;
  &:before{
      content:'';
      position:absolute;
      top: 0%;
    left: 100%;
      background:black;
      height: 500px;
      width:1px;
      animation: ${animationLine} 4s linear 1;
  }
`;

const LineTranslate = () => {
  return (
    <Section>
      <Line></Line>
    </Section>
  );
};

export default LineTranslate;