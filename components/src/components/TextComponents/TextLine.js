import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Text = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 10em;
  line-height: 0.8em;
`;
const Span = styled.span`
  & {
    position: relative;
    text-transform: uppercase;
    display: block;
  }
  &:nth-child(1):before {
    content: "";
    position: absolute;
    top: calc(50% - 15px);
    right: 0;
    width: 50%;
    height: 30px;
    background: #f00;
    transform-origin: right;
    transform: scaleX(0);
    transition: 0.5s;
    z-index: 1;
  }

  &:hover:nth-child(1):before {
    transform: scaleX(1);
  }

  &:nth-child(2):before {
    content: "";
    position: absolute;
    top: calc(50% - 15px);
    left: 0;
    width: 50%;
    height: 30px;
    background: #f00;
    transform-origin: left;
    transform: scaleX(0);
    transition: 0.5s;
    z-index: 1;
  }
  &:hover:nth-child(2):before {
    transform: scaleX(1);
  }
`;

const TextLine = () => {
  return (
    <Section>
      <Text>
        <Span>
          <hide>Do</hide>n't
        </Span>
        <Span>
          <hide> Qu</hide>it
        </Span>
      </Text>
    </Section>
  );
};

export default TextLine;
