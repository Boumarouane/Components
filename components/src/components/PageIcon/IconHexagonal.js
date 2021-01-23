import React from "react";
import styled from "styled-components";

// After et Before ne marche plus ?
const PageIcon = ({ icon, iconLink, colorBack }) => {
  const Link = styled.a`
    width: 70px;
    height: 40px;
    background: ${colorBack};
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    transition: -5s;
    color: #fff;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${colorBack};
      z-index: 1;
      transform: rotate(60deg);
    }
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${colorBack};
      z-index: 1;
      transform: rotate(-60deg);
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

export default PageIcon;
