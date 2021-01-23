import React from "react";
import styled from "styled-components";

// A l'intérieur du composant BoxCircle il y a le composant BoxShare qui contient l'icône Share, lorsque la souris survole cette élément, le Composant BoxCircleBoxSecondIcons qui, au préalable, est rotate de -300px et à une opacity de 0, apparait avec(opacity: 1) + (rotate:0deg).

const IconPivot = ({mainIcon, topIcon , bottomIcon, leftIcon,rightIcon}) => {
  
  const BoxShare = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    line-height: 4.5rem;
    text-align: center;
    background: #000;
    border-radius: 50%;
    z-index: 1;
    box-shadow: 0 0 0 2px #fff;
  `;

  // Icône principale
  const Share = styled.i`
    font-size: 3.8rem;
    color: #fff;
  `;

  // Cercle qui apparait contenant les icônes + les deux barres
  const BoxCircleBoxSecondIcons = styled.ul`
    position: absolute;
    top: -5rem;
    left: -5rem;
    transform: scale(0.1) rotate(-300deg);
    opacity: 0;
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    background: #000;
    transition: 1s;
    &:before, &:after {
      content: "";
      position: absolute;
      top: calc(50% - 1px);
      left: 0;
      width: 100%;
      height: 2px;
      background: #fff;
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  `;

  const BoxCircle = styled.div`
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    position: relative;
    &:hover ${BoxCircleBoxSecondIcons} {
      transform: scale(1.3) rotate(0deg);
      box-shadow: 0 0 6px rgba(0, 0 ,0 ,.5);
      opacity:1;
    }
  `;
  
  // Placement de chaque icônes secondaires dans son container
  const BoxSecondIcons = styled.li`
    position: absolute;
    list-style: none;
    &:nth-child(1) {
      top: 1rem;
      left: 50%;
      transform: translateX(-50%);
    }
    &:nth-child(2) {
      bottom: 1rem;
      left: 50%;
      transform: translateX(-50%);
    }
    &:nth-child(3) {
      top: 50%;
      left: 1.5rem;
      transform: translateY(-50%);
    }
    &:nth-child(4) {
      top: 50%;
      right: 1.5rem;
      transform: translateY(-50%);
    }
  `;
  
  // Icônes secondaires
  const SecondIcons = styled.i`
    color: #fff;
    transition: 0.6s;
    cursor: pointer;
    font-size: 3.2rem;
    &:hover {
      color: #dd4b39;
    }
  `;

  return (
    <BoxCircle>
      <BoxShare>
        <Share>{mainIcon}</Share>
      </BoxShare>
      <BoxCircleBoxSecondIcons>
        <BoxSecondIcons>
          <SecondIcons href="">{topIcon}</SecondIcons>
        </BoxSecondIcons>
        <BoxSecondIcons>
          <SecondIcons href="">{bottomIcon}</SecondIcons>
        </BoxSecondIcons>
        <BoxSecondIcons>
          <SecondIcons href="">{leftIcon}</SecondIcons>
        </BoxSecondIcons>
        <BoxSecondIcons>
          <SecondIcons href="">{rightIcon}</SecondIcons>
        </BoxSecondIcons>
      </BoxCircleBoxSecondIcons>
    </BoxCircle>
  );
};

export default IconPivot;
