import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-weight: 300;
  font-size: 90px;
  color: #000;
  text-align:center;
  padding:10px 0 50px 0;
  width: 100%;
  border-bottom: 1px solid grey;
`;

const TitleOne = ({title}) => {
  return (
    <>
      <Title>{title}</Title>
    </>
  );
};

export default TitleOne;
