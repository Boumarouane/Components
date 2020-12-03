import React from "react";
import styled, { keyframes } from "styled-components";


const animate = keyframes`
0%{
  transform:translateX(0)
}
100%{
  transform:translateX(-10%)
}

`

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const TextStroke = styled.h1`
  font-size: 18em;
  letter-spacing: 2px;
  text-transform: uppercase;
  -webkit-text-fill-color: #000;
  -webkit-text-stroke-width: 5px;
  &:hover  {
    -webkit-text-fill-color: transparent;
      transition:  0.2s;
  }
`;

const SectionAnimation = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
`;

const Block = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: blue;
  &:nth-child(2) {
    background-color: pink;
    clip-path: circle(200px at center);
  }
  &:nth-child(1) h2{
    -webkit-text-stroke: 2px;
    -webkit-text-stroke-color: #fff;
    color:transparent;
  }

`;

const Text = styled.h2`
  position: absolute;
  left: 0;
  font-size: 15em;
  color: #fff;
  white-space: nowrap;
  line-height: 100vh;
  cursor: default;
  z-index:1;
  animation: ${animate} 120s linear infinite;
`;

const ScrollText = () => {
  return (
    <>
      <Section>
        <TextStroke>Stroke</TextStroke>
      </Section>
      <Section>
        <SectionAnimation>
          <Block>
            <Text>
              sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
            </Text>
            <Text>
              sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
            </Text>
          </Block>
          <Block></Block>
        </SectionAnimation>
      </Section>
    </>
  );
};

export default ScrollText;
