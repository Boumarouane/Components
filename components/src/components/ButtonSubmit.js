import React from "react";
import styled, { css } from "styled-components";

const ButtonSubmit = ({
  texte,
  color,
  width,
  height,
  border,
  borderRadius,
  boxShadow,
  backImage,
  fontSize,
  texteShadow,
  changeBackground,
  changeColor,
}) => {
  const ButtonStyle = styled.button`
    color: ${color};
    border: ${border};
    border-radius: ${borderRadius};
    width: ${width};
    height: ${height};
    outline: none;
    box-shadow: ${boxShadow};
    cursor: pointer;
    background-size: 150% auto;
    transition: 1s;
    background-image: ${backImage};
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:${fontSize};
    text-shadow:${texteShadow};

    &:hover {
    background-position: right center;
    }

    ${(props) =>
      props.primary &&
      css`
        background: ${changeBackground};
        color: ${changeColor};
      `}
  `;
  return (
    <>
      <ButtonStyle>{texte}</ButtonStyle>
    </>
  );
}

export default ButtonSubmit;
