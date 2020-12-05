import React from "react";
import styled from "styled-components";

const CardImage = ({
  textLeft,
  textRight,
  image,
  iconOne,
  iconTwo,
  posIcon,
  colorBackCard,
  gradientColorLeft,
  gradientColorRight,
  transformORight,
  transformOLeft,
  transformORightHover,
  transformOLeftHover,
  posAbsTopLeft,
  posAbsTopRight,
  colorHoverIcon,
  linkIconOne,
  linkIconTwo
}) => {

  const TextContentLeft = styled.div`
    color: white;
    background: ${gradientColorLeft};
    text-align: center;
    transform: ${transformOLeft};
    position: absolute;
    top: ${posAbsTopLeft};
    left: 25px;
    right: 25px;
    z-index: 2;
    transition: all 0.5s ease-out 0.2s;
  `;

  const TextContentRight = styled.div`
    color: white;
    background: ${gradientColorRight};
    text-align: center;
    transform: ${transformORight};
    position: absolute;
    top: ${posAbsTopRight};
    left: 25px;
    right: 25px;
    z-index: 2;
    transition: all 0.5s ease-out 0.2s;
  `;

  const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale3d(1, 1, 1);
    transition: all 0.3s ease-in-out 0.3s;
  `;

  const TextName = styled.h2`
    font-size: 25px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    height: 60px;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const TextPost = styled.p`
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 1px;
    height: 60px;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const BoxIcon = styled.ul`
    position: absolute;
    bottom: 10px;
    right: ${posIcon};
    z-index: 2;
  `;

  const Icon = styled.li`
    display: inline-block;
    margin: 0 5px;
    opacity: 0;
  `;

  const Card = styled.section`
    background: ${colorBackCard};
    position: relative;
    overflow: hidden;
    border: 8px solid black;
    width: 30em;
    height: 50em;
    &:hover ${Img} {
      opacity: 0.6;
      transform: scale(1.1);
    }
    &:hover ${TextContentLeft} {
      transform: ${transformOLeftHover};
    }
    &:hover ${TextContentRight} {
      transform: ${transformORightHover};
    }
    &:hover ${BoxIcon} ${Icon} {
      opacity: 1;
      transition: all 0.3s ease-in-out 0.2s;
    }
    & ul li a {
      color: white;
      background: transparent;
      font-size: 25px;
      padding: 10px;
      border: 1px solid white;
      border-radius: 50%;
      display: block;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.1s ease-in-out 0.2s;
    }
    & ul li a:hover{
        color:${colorHoverIcon};
        border: 1px solid ${colorHoverIcon};
    }
  `;

  return (
    <Card>
      <Img src={image} alt="people" />
      <TextContentLeft>
        <TextPost>{textLeft}</TextPost>
      </TextContentLeft>
      <TextContentRight>
        <TextName>{textRight}</TextName>
      </TextContentRight>
      <BoxIcon>
        <Icon>
          <a href={linkIconOne}>{iconOne}</a>
        </Icon>
        <Icon>
          <a href={linkIconTwo}>{iconTwo}</a>
        </Icon>
      </BoxIcon>
    </Card>
  );
};

export default CardImage;
