import React from "react";
import styled from "styled-components";

// After et Before ne marche plus ?
const PageIcon = ({ icon, colorBack }) => {
  const Icon = styled.li`
    width: 100px;
    height: 100px;
    background: ${colorBack};
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    transition: -5s;
    border-radius: 50%;
    list-style: none;
    position: relative;
    margin: 0 10px;
    cursor: pointer;
    color: #fff;
    z-index: 1;
    &:hover{
        color:#262626;
    }
    &:before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: #fff;
      border-radius: 50%;
      transform: scale(0);
      transition: all 0.5s ease-in-out;
      z-index: -1;
    }
    &:hover:before {
      transform: scale(1);
    }
  `;

  //   const Icon = styled.li`
  //     list-style: none;
  //     position: relative;
  //     margin: 0 10px;
  //   `;

  return (
    <>
      <Icon>{icon}</Icon>
    </>
  );
};

export default PageIcon;
