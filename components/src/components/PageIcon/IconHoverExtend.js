import React from "react";
import styled from "styled-components";

// Lorsqu'on survole le composant ButtonIcon qui est à 60px de base, il s'étend jusque 200px faisant apparaitre le <SpanText/> en jouant avec le display: inline-block. (à mettre dans un container <ul>)

const IconExtend = ({ icon,textIcon, colorBackIconHover }) => {
  const Icon = styled.i`
    display: inline-block;
    height: 6rem;
    width: 6rem;
    text-align: center;
    border-radius: 5rem;
    line-height: 5.5rem;
    transition: 0.3s ease-in-out;
    font-size:4rem;
    color:${colorBackIconHover};
  `;

  const SpanText = styled.span`
      font-size: 2.2rem;
      font-weight: 500;
      line-height: 5.5rem;
      margin-left: 1rem;
  `;

  const ButtonIcon = styled.li`
    height: 6rem;
    width: 6rem;
    overflow: hidden;
    border-radius: 5rem;
    cursor: pointer;
    box-shadow: 1px 5px 5px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
    list-style: none;
    &:hover {
      width: 20rem;
    }
    &:hover ${Icon}{
        color: #fff;
    }
    &:nth-child(1):hover ${Icon} {
      background: ${colorBackIconHover};
    }
    &:nth-child(1) ${SpanText} {
      color: ${colorBackIconHover};
    }
  `;

  return (
    <>
      <ButtonIcon>
          <Icon>
            {icon}
          </Icon>
          <SpanText>
            {textIcon}
          </SpanText>
      </ButtonIcon>
    </>
  );
};

export default IconExtend;
