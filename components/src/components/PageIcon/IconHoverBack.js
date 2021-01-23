import React from "react";
import styled from "styled-components";

// After et Before ne marche plus ?
const PageIcon = ({ icon, color, colorHover, colorBack }) => {

  const Icon = styled.li`
    position: relative;
    width: 7rem;
    height: 7rem;
    background: ${colorBack};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    transition: .3s;
    border-radius: 50%;
    border: 1px solid ${color};
    list-style: none;
    cursor: pointer;
    color: ${color};
    z-index: 1;
    &:hover{
        color:${colorHover};
        transform: scale(1.1);
        border: 2px solid ${colorHover};
    }
    &:before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      background: #fff;
      border-radius: 50%;
      transform: scale(-1);
      transition: all .4s ease-in-out;
      z-index: -1;
    }
    &:hover:before {
      transform: scale(1);
      background: #000;
    }
  `;

  return (
    <>
      <Icon>{icon}</Icon>
    </>
  );
};

export default PageIcon;
