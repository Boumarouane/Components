import React from "react";
import styled, { keyframes } from "styled-components";

const animationLine = keyframes`
0% {
transform-origin: top;
transform :scaleY(0);
}
50% {
transform-origin: top;
transform :scaleY(1);
}
51% {
transform-origin: bottom;
transform :scaleY(1);
}
100% {
transform-origin: bottom;
transform :scaleY(0);
}
`;

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const Line = styled.div`
  & {
    position: absolute;
    width: 1px;
    height: 400px;
    background: transparent;
  }
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(transparent, #000, transparent);
    animation: ${animationLine} 3s linear infinite;
  }
`;

const LineAnimation = () => {
  return (
    <Section>
      <Line></Line>
    </Section>
  );
};

export default LineAnimation;
