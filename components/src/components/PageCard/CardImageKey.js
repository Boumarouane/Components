import React from "react";
import styled, { keyframes } from "styled-components";
import Image from "../image/people.jpeg";

const animate = keyframes`
    0%{
        transform: skew(-10deg) rotate(-12deg) translateX(-150%) translateY(-50%);
    }
    50%{
        transform: skew(-10deg) rotate(-10deg) translateX(0) translateY(-50%);
    }
    60%{
        transform: skew(-10deg) rotate(-10deg) translateX(1%) translateY(-50%);
    }

    70%{
        transform: skew(-10deg) rotate(-10deg) translateX(2%) translateY(-50%);
    }
    80%{
        transform: skew(-10deg) rotate(-10deg) translateX(3%) translateY(-50%);
    }
    90%{
        transform: skew(-10deg) rotate(-10deg) translateX(4%) translateY(-50%);
    }
    100%{
        transform: skew(-10deg) rotate(-10deg) translateX(150%) translateY(-50%);
    }
`;

const BoxContent = styled.div`
  color: white;
  background: linear-gradient(to bottom, #4834d4, #192157);
  text-align: center;
  /* page-break-inside: 0px 5px; */
  transform: skew(-10deg) rotate(-12deg) translateX(-150%) translateY(-50%);
  /* transform-style: preserve-3d; */
  position: absolute;
  top: 50%;
  left: 25px;
  right: 25px;
  z-index: 2;
  transition: all 5s ease-in 8s;

`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale3d(1.1, 1.1, 1.1);
  transition: all 0.3s ease-in-out;
`;

const BoxContentInverse = styled.div`
  color: white;
  background: linear-gradient(to bottom, #4834d4, #192157);
  text-align: center;
  /* page-break-inside: 0px 5px; */
  transform: skew(-10deg) rotate(-12deg) translateX(150%) translateY(-50%);
  /* transform-style: preserve-3d; */
  position: absolute;
  top: 42%;
  left: 25px;
  right: 25px;
  z-index: 2;
  transition: all 0.5s ease-out 0.3s;
`;

const Title = styled.h3`
  font-size: 25px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0 0 10px;
  border: 1px solid white;
`;

const Post = styled.span`
  font-size: 18px;
  letter-spacing: 1px;
  text-transform: capitalize;
`;

const Icon = styled.ul`
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 2;
`;

const Li = styled.li`
  display: inline-block;
  margin: 0 5px;
  opacity: 0;
`;

const Box = styled.section`
  background: #4d34d4;
  position: relative;
  overflow: hidden;
  border: 8px solid black;
  width: 30em;
  height: 50em;
  /* &:before {
    content: "";
    width: 100%;
    height: 100%;
    opacity: 0;
    filter: blur(10px);
    transform: rotate(110deg);
    position: absolute;
    top: 25px;
    left: 50%;
    z-index: 1;
    transition: all 0.3s ease-in-out;
  } */
  &:hover ${Img} {
    opacity: 0.5;
    transform: scale(1);
  }
  &:hover ${BoxContent} {
    opacity: 1;
    animation: ${animate} 3s ease-in-out .1s;
  }
  &:hover ${BoxContentInverse} {
    opacity: 1;
    transform: skew(-10deg) rotate(-10deg) translateX(0) translateY(-50%);
  }

  &:hover ${Icon} ${Li} {
    opacity: 1;
    transition: all 0.3s ease-in-out 0.2s;
  }
  & ul li a {
    color: white;
    background: blue;
    font-size: 15px;
    text-align: center;
    line-height: 35px;
    height: 40px;
    width: 40px;
    border: 2px solid white;
    border-radius: 50%;
    display: block;
  }
`;

const CardImage = () => {
  return (
    <Box>
      <Img src={Image} alt="people" />
      <BoxContent>
        <Title>Rebel Noon</Title>
        <Post>Web designer</Post>
      </BoxContent>
      <BoxContentInverse>
        <Title>Rebel Noon</Title>
        <Post>Web designer</Post>
      </BoxContentInverse>
      <Icon>
        <Li>
          <a href="">Icon</a>
        </Li>
        <Li>
          <a href="">Icon</a>
        </Li>
      </Icon>
    </Box>
  );
};

export default CardImage;
