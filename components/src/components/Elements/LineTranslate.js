import React from "react";
import styled, { keyframes } from "styled-components";

const animationLine = keyframes`
0% {
transform-origin: left;
transform :scaleX(0);
transition:8s;
}
100% {
transform-origin: left;
transform :scaleX(1);
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
  height: 1px;
  background: #f00;
  animation: ${animationLine} 4s linear 1;
`;

const LineTranslate = () => {
  return (
    <Section>
      <Line></Line>
    </Section>
  );
};

export default LineTranslate;
