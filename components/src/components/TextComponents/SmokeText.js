import React from "react";
import styled, { keyframes } from "styled-components";

const smoke = keyframes`
    0%{
        transform: rotate(0deg) translateY(0px);
        opacity: 1;
        filter: blur(1px);
    }
    100%{
        transform: rotate(45deg) translateY(-200px);
        opacity: 0;
        filter: blur(20px);
    }

`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Ul = styled.ul`
  display: flex;
  &:hover li {
    animation: ${smoke} 2s linear forwards;
  }
`;

const Li = styled.li`
  list-style: none;
  font-size: 6em;
  font-weight: bold;
  letter-spacing: 10px;
  filter: blur(1px);
  ul &:nth-child(1) {
    animation-delay: 0s;
  }
  ul &:nth-child(2) {
    animation-delay: 0.4s;
  }
  ul &:nth-child(3) {
    animation-delay: 0.8s;
  }
  ul &:nth-child(4) {
    animation-delay: 1.2s;
  }
  ul &:nth-child(5) {
    animation-delay: 1.6s;
  }
`;

const SmokeText = () => {
  return (
    <Section>
      <Ul>
        <Li>S</Li>
        <Li>M</Li>
        <Li>O</Li>
        <Li>K</Li>
        <Li>E</Li>
      </Ul>
    </Section>
  );
};

export default SmokeText;
