import React from "react";
import styled from "styled-components";

const PageIcon = ({ icon,textIcon, colorBackIconHover }) => {
  const Icon = styled.i`
    display: inline-block;
    height: 60px;
    width: 60px;
    text-align: center;
    border-radius: 50px;
    /* box-sizing: border-box; */
    line-height: 60px;
    transition: all 0.3s ease-out;
    font-size:30px;
    color:${colorBackIconHover};
  `;

  const Span = styled.span`
    font-size: 20px;
    font-weight: 500;
    line-height: 60px;
    margin-left: 10px;
    transition: all 0.3s ease-out;
  `;

  const Button = styled.li`
    /* display: inline-block; */
    height: 60px;
    width: 60px;
    /* float: left; */
    /* margin: 0 5px; */
    overflow: hidden;
    /* background: #fff; */
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-out;
    list-style:none;
    &:hover {
      width: 200px;
    }
    &:hover ${Icon}{
        color: #fff;
    }
    &:nth-child(1):hover ${Icon} {
      background: ${colorBackIconHover};
    }
    &:nth-child(1) ${Span} {
      color: ${colorBackIconHover};
    }
  `;

  return (
    <>
      <Button>
          <Icon>
            {icon}
          </Icon>
  <Span>{textIcon}</Span>
      </Button>
    </>
  );
};

export default PageIcon;
