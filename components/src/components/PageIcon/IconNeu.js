import React from "react";
import styled from "styled-components";
import { FaPowerOff } from "react-icons/fa";

const IconNeu = () => {
  const Label = styled.label`
    position: relative;
  `;

  const Iframe = styled.i`
    position: relative;
    width: 60px;
    height: 60px;
    background: #091921;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 4px;
    color: #6f6f6f;
    font-size: 25px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: -1px -1px 3px rgba(255, 255, 255, 0.1),
      2px 2px 6px rgba(0, 0, 0, 0.8);
    &:hover {
      box-shadow: -1px -1px 3px rgba(255, 255, 255, 0.1),
        2px 2px 6px rgba(0, 0, 0, 0.8),
        inset -2px -2px 10px rgba(255, 255, 255, 0.05),
        inset 2px 2px 10px rgba(0, 0, 0, 0.5);
    }
  `;
  const Input = styled.input.attrs({ type: "radio" })`
    appearance: none;
    -webkit-appearance: none;
    cursor: pointer;
    &:checked ~ ${Iframe} {
      color: #00fff1;
      box-shadow: inset -1px -1px 3px rgba(255, 255, 255, 0.1),
        inset 2px 2px 6px rgba(0, 0, 0, 1);
        transform:scale(.95);
        transition: all .8s ease-in-out;
      text-shadow: 0 0 0 5px #00fff1, 0 0 0 20px #00fff1;
    }
  `;
      const Radio = styled.input.attrs({ type: "radio" })`
      appearance: none;
      -webkit-appearance: none;
      cursor: pointer;
      &:checked ~ ${Iframe} {
        color: #00fff1;
        box-shadow: inset -1px -1px 3px rgba(255, 255, 255, 0.1),
          inset 2px 2px 6px rgba(0, 0, 0, 1);
          text-shadow:0 0 0 5px #00fff1,
                      0 0 0 20px #00fff1;
      }
    `;

  return (
    <>
      <Label>
        <Input aria-hidden="true"></Input>
        <Iframe>
          <FaPowerOff />
        </Iframe>
      </Label>
      <Label>
        <Radio aria-hidden="true"></Radio>
        <Iframe>
          <FaPowerOff />
        </Iframe>
      </Label>
    </>
  );
};

export default IconNeu;
