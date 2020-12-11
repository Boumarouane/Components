import React from "react";
import styled from "styled-components";

const Section = styled.section`
    display:flex;
    flex-direction:column;    
`

const Label = styled.label`
  position: relative;
  margin: 5px 0;
  cursor: pointer;
`;

const Span = styled.span`
  position: relative;
  display: block;
  width: 80px;
  height: 40px;
  background: #222;
  border-radius: 40px;
  box-shadow: inset 0 2px 15px rgba(0, 0, 0, 0.2),
             inset 0 2px 2px rgba(0, 0, 0, .2),
            inset 0 -1px 1px rgba(0, 0, 0, 0.2);
`;

const Iframe = styled.i`
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  background: linear-gradient(to bottom , #444, #222);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5),
             inset 0 1px 1px rgba(255, 255, 255, .1);
  border-radius:50%;
  transition:.5s;
  transform: scale(.9);
  &:before{
      content:'';
      position: absolute;
      top: 50%;
      left: 50%;
      transform:translate(-50%, -50%);
      width: 5px;
      height: 5px;
      background: #f00;
      border-radius:50%;
      transition:.5s;
      box-shadow: 0 0 5px #f00,
                  0 0 10px #f00,
                  0 0 15px #f00,
                  0 0 20px #f00,
                  0 0 25px #f00,
                  0 0 30px #f00,
                  0 0 40px #f00;
  }
`;

const Input = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  display:none;
  &:checked ~ ${Iframe} {
      left: 40px;
  }
  &:checked ~ ${Iframe}:before {
      background: #0f0;
      box-shadow: 0 0 2px #0f0,
                  0 0 5px #0f0,
                  0 0 15px #0f0,
                  0 0 20px #0f0,
                  0 0 25px #0f0,
                  0 0 30px #0f0,
                  0 0 40px #0f0;
  }
`;

const CheckBoxLight = () => {
  return (
    <Section>
      <Label>
        <Input />
        <Span></Span>
        <Iframe></Iframe>
      </Label>

      <Label>
        <Input />
        <Span></Span>
        <Iframe></Iframe>
      </Label>
    </Section>
  );
};

export default CheckBoxLight;
