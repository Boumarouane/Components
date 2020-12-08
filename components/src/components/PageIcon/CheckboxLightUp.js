import React from "react";
import styled from "styled-components";
import { FaPowerOff } from "react-icons/fa";


// Text-shadow ne marche pas ?
const Label = styled.label`
  position: relative;
  width: 100px;
  height: 100px;
  cursor: pointer;
  border-radius: 50%;
`;

const Span = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  background: #1b1b1b;
  border-radius: 50%;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 1), inset 0 -2px 5px rgba(0, 0, 0, 1),
    inset 0 2px 2px rgba(255, 255, 255, 0.5), 0 0 0 2px black, 0 0 0 5px #0c0c0c,
    0 0 0 5.5px #080808;
`;

const Iframe = styled.i`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3em;
  color: #0c0c0c;
  transition: all 1s ease-in-out;
`;

const Input = styled.input.attrs({ type: "checkbox" })`
  -webkit-appearance: none;
  &:checked ~ ${Iframe} {
    color: #00a1ff;
    transition: all 0.8s ease-in;
    text-shadow: 80px 0 85px #00a1ff,
                0 0 80px #00a1ff;
  }
  &:checked ~ ${Span} {
    transition: all .8s ease-in;
    box-shadow: 0 0 0 rgba(0, 0, 0, 1), inset 0 -4px 4px rgba(0, 0, 0, 1),
      inset 0 2px 3px rgba(255, 255, 255, 1), 0 0 0 1px black, 0 0 0 15px #0c0c0c,
      0 0 0 17px #00a1ff;
  }
`;

const CheckboxLightUp = () => {
  return (
    <Label>
      <Input />
      <Span></Span>
      <Iframe>
        <FaPowerOff />
      </Iframe>
    </Label>
  );
};

export default CheckboxLightUp;
