import React from "react";
import styled from "styled-components";

const IconHover = ({ icon, iconLink, colorBack }) => {
  const Link = styled.a`
    width: 60px;
    height: 60px;
    background: ${colorBack};
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    transition: -5s;
    color: #666;
    border-radius: 50%;
    transition: 0.5s;
    &:hover {
    border:1px solid yellow;
      box-shadow: 0 0 5px #ffee10;
      text-shadow: 0 0 5px #ffee10;
      color:#ffee10;
    }
  `;

  const Icon = styled.li`
    list-style: none;
    position: relative;
    margin: 0 10px;
  `;

  return (
    <>
      <Icon>
        <Link href={iconLink}>{icon}</Link>
      </Icon>
    </>
  );
};

export default IconHover;
