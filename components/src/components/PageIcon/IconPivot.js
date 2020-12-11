import React from "react";
import styled from "styled-components";


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

const BoxIconHover = styled.ul`
  position: absolute;
  top: -50px;
  left: -50px;
  margin: 0;
  padding: 0;
  width: 150px;
  height: 150px;
  background: #fff;
  border-radius: 50%;
  transition: 0.5s;
  box-shadow: 0 0 0 2px #1b3646, 0 0 0 4px #fff;
  transition: 1s;
  transform: scale(0.3) rotate(-200deg);
  opacity:0;
  /* z-index: -1; */
  &:before {
    content: "";
    position: absolute;
    top: calc(50% - 1px);
    left: 0;
    width: 100%;
    height: 2px;
    background: #112833;
    transform: rotate(45deg);
  }
  &:after {
    content: "";
    position: absolute;
    top: calc(50% - 1px);
    left: 0;
    width: 100%;
    height: 2px;
    background: #112833;
    transform: rotate(-45deg);
  }
`;
const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;
  &:hover ${BoxIconHover} {
    transform: scale(1.3) rotate(0deg);
    box-shadow: 0 0 0 2px #1b3646, 0 0 0 4px #fff, 0 0px 10px rgba(0,0,0,1);
    opacity:1;
  }
`;

const IconHover = styled.li`
  position: absolute;
  list-style: none;
  &:nth-child(1) {
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
  }
  &:nth-child(2) {
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
  }
  &:nth-child(3) {
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
  }
  &:nth-child(4) {
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
  }
`;

const LinkIcon = styled.div`
  color: #112833;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    transform: scale(1.5);
    color: blue;
  }
`;


const IconPivot = ({icon}) => {
  return (
    <Circle>
      <Share>
        <Icon>{icon}</Icon>
      </Share>
      <BoxIconHover>
        <IconHover>
          <LinkIcon href="">{icon}</LinkIcon>
        </IconHover>
        <IconHover>
          <LinkIcon href="">{icon}</LinkIcon>
        </IconHover>
        <IconHover>
          <LinkIcon href="">{icon}</LinkIcon>
        </IconHover>
        <IconHover>
          <LinkIcon href="">{icon}</LinkIcon>
        </IconHover>
      </BoxIconHover>
    </Circle>
  );
};

export default IconPivot;
