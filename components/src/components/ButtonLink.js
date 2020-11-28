import React from "react";
import styled, { css } from "styled-components";
import { Link } from 'react-router-dom';

const ButtonSubmit = ({
  texte,
  color,
  width,
  height,
  border,
  borderRadius,
  boxShadow,
  changeBackground,
  changeColor,
}) => {
  const ButtonStyle = styled(Link)`
    color: ${color};
    background: red;
    border: ${border};
    border-radius: ${borderRadius};
    width: ${width};
    height: ${height};

    ${(props) =>
      props.primary &&
      css`
        background: ${changeBackground};
        color: ${changeColor};
      `}
    box-shadow: ${boxShadow};
  `;
  return (
    <div>
      <ButtonStyle primary>{texte}</ButtonStyle>
    </div>
  );
}

export default ButtonSubmit;
