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
  min-height: 100%;
  margin: 0;
  padding: 0;
`;
const Line = styled.div`
  width: 100%;
  height: 100vh;
  background: transparent;
  position: relative;
  &:before{
      content:'';
      position:absolute;
      top: 0%;
    left: 100%;
      background:black;
      height: 100vh;
      width:1px;
      animation: ${animationLine} 2s linear 1;
  }
`;

const LineTranslate = () => {
  return (
    <Section>
      <Line></Line>
      <Line></Line>
      <Line></Line>
    </Section>
  );
};

export default LineTranslate;