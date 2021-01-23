import React from "react";
import styled from "styled-components";

const IconHover = ({ icon, iconLink, colorBack, colorBackHover }) => {

  const Link = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 7rem;
    height: 7rem;
    color: #000;
    background: ${colorBack};
    font-size: 5rem;
    transition: .5s;
    border-radius: 50%;
    transition: .5s;
    border: 1px solid #000;
    &:hover {
      box-shadow: 0 0 4px rgba(0, 0 , 0 , 1.5);
      color: #fff;
      background: ${colorBackHover};
      border: 1px solid ${colorBackHover};
    }
  `;

  const Icon = styled.li`
    list-style: none;
    /* position: relative;
    margin: 0 10px; */
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
