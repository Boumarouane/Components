import React from "react";
import styled from "styled-components";
import IconHexagonal from "./IconHexagonal";
import IconHoverBack from "./IconHoverBack";
import IconHoverExtend from "./IconHoverExtend";
import CheckboxLightUp from "./CheckboxLightUp";
import SocialMediaHover from './SocialMediaHover'
import IconPivot from './IconPivot'
import IconHover from "./IconHover";
import IconNeu from "./IconNeu";
import { FaBehance } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const PageIcon = () => {
  const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #fff;
  `;

  const BoxIcon = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  return (
    <>
      <Section>
        <BoxIcon>
          <IconHexagonal icon={<FaBehance />} iconLink="" colorBack="#131418" />
          <IconHexagonal
            icon={<FaFacebookF />}
            iconLink=""
            colorBack="#3b5999"
          />
          <IconHexagonal
            icon={<FaLinkedinIn />}
            iconLink=""
            colorBack="#0077B5"
          />
          <IconHexagonal
            icon={<FaInstagram />}
            iconLink=""
            colorBack="#e4405f"
          />
        </BoxIcon>
      </Section>
      <Section style={{ backgroundColor: "black" }}>
        <CheckboxLightUp />
      </Section>
      <Section style={{ backgroundColor: "#262626" }}>
        <BoxIcon>
          <IconHover icon={<FaInstagram />} iconLink="" colorBack="#333" />
        </BoxIcon>
      </Section>
      <Section style={{ backgroundColor: "#091921" }}>
        <IconNeu />
      </Section>
      <Section>
        <IconHoverBack icon={<FaInstagram />} colorBack="#333" />
      </Section>
      <Section>
        <IconHoverExtend icon={<FaInstagram />} textIcon="Instagram" colorBackIconHover="#e4405f" />
      </Section>
      <Section>
      <SocialMediaHover
      icon={<FaInstagram />}
      />
      </Section>
      <Section>
        <IconPivot
        icon={<FaInstagram />}
        />
      </Section>
    </>
  );
};

export default PageIcon;
