import React from "react";
import styled, { keyframes } from "styled-components";

const SocialMediaHover = ({ icon, color, colorHover, colorBefore }) => {
  const animate = keyframes`
    0%{
        left:-90%;
        top:90%;
    }50%{
        left:10%;
        top:-30%;  
    }100%{
        top:-10%;
        left:-10%;
    }
    `;

  const Icon = styled.div`
    line-height: 7.5rem;
    font-size: 5rem;
    transition: 0.2s linear;
  `;

  const Link = styled.li`
    display: inline-block;
    width: 8rem;
    height: 8rem;
    margin: 1rem;
    border-radius: 20%;
    box-shadow: 0 5px 15px -5px #00000070;
    color: ${color};
    overflow: hidden;
    position: relative;
    text-align: center;
    cursor: pointer;
    &:hover ${Icon} {
      transform: scale(1.2);
      color: ${colorHover};
    }
    &:before {
      content: "";
      position: absolute;
      width: 120%;
      height: 120%;
      background: ${colorBefore};
      transform: rotate(45deg);
      left: -110%;
      top: 90%;
    }
    &:hover:before {
      animation: ${animate} 0.7s 1;
      top: -10%;
      left: -10%;
    }
  `;

  return (
    <>
      <Link>
        <Icon>{icon}</Icon>
      </Link>
    </>
  );
};

export default SocialMediaHover;
