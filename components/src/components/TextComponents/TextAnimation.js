import React from "react";
import styled, { keyframes } from "styled-components";

const TextAnimation = ({
  textOne,
  textTwo,
  heightContainer,
  widthContainer,
  colorTextOne,
  colorTextTwo,
  backgroundTextOne,
}) => {
  const animationText = keyframes`
    0% {
    color: white;
    margin-right:-350px;
    }

    30% {
    letter-spacing: 20px;
    margin-right:-350px;
    }

    85% {
    letter-spacing: 8px;
    margin-right:-350px;
    }   
`;

  const Container = styled.div`
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: ${heightContainer};
    width: ${widthContainer};
  `;

  const TextOne = styled.p`
    color: ${colorTextOne};
    text-transform: uppercase;
    font-size: 60px;
    font-weight: 700;
    letter-spacing: 8px;
    margin-right: 20px;
    background-color: ${backgroundTextOne};
    position: relative;
    animation: ${animationText} 2s 1;
  `;

  const TextTwo = styled.p`
    color: ${colorTextTwo};
    text-transform: uppercase;
    font-size: 30px;
  `;
  return (
    <Container>
      <TextOne>{textOne}</TextOne>
      <TextTwo>{textTwo}</TextTwo>
    </Container>
  );
};

export default TextAnimation;
