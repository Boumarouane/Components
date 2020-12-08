import React from "react";
import styled, { keyframes } from "styled-components";
import { FaBehance } from "react-icons/fa";

// Ne fonctionne pas 

const animate = keyframes`
    0%{
        transform: scale(0.1);
        opacity:0;
    }
    50%{
        opacity:1;
    }
    100%{
        transform: scale(.2);
        opacity:0;
    }
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: black;
`;

const Icon = styled.div`
  height: 80px;
  width: 80px;
  background: #58ea00;
  color: #fff;
  border-radius: 50%;
  font-size: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:after {
    animation-delay: 0.5s;
  }
  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    border: 50%;
    border-radius: 50%;
    border: 2px solid #58ea00;
    left: -20px;
    right: -20px;
    top: -20px;
    bottom: -20px;
    /* opacity: 0;
    backface-visibility: hidden; */
    /* transform: scale(.1); */
    /* animation: ${animate} 1.5s linear infinite; */
  }
`;

const PageIcon = () => {
  return (
    <Section>
      <Icon>
        <FaBehance />
      </Icon>
    </Section>
  );
};

export default PageIcon;
