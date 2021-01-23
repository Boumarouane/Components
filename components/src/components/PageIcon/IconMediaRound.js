import React from "react";
import styled from "styled-components";

const IconMediaRound = ({ icon, color, colorHover }) => {

  const Link = styled.a`
    display: block;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    padding: 6px;
    text-align: center;
    background: linear-gradient(0deg, #ddd, #fff);
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);
    transition: 0.5s;
    &:hover {
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    }
  `;

  const Iframe = styled.i`
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    font-size: 5rem;
    line-height: calc(60px - 6px);
    background: linear-gradient(0deg, #fff, #ddd);
    transition:.5s;
    color: ${color};
  `;

  const Icon = styled.li`
    list-style: none;
    &:hover ${Iframe}{
      color: ${colorHover};
    }
  `;

  return (
    <>
      <Icon>
        <Link href="/">
          <Iframe>{icon}</Iframe>
        </Link>
      </Icon>
    </>
  );
};

export default IconMediaRound;
