import React from "react";
import styled from "styled-components";
import IconNeu from "./IconNeu";
import IconPivot from "./IconPivot";
import IconHoverExtend from "./IconHoverExtend";
import IconHoverBack from "./IconHoverBack";
import IconHover from "./IconHover";
import SocialMediaHover from "./SocialMediaHover";
import IconHexagonal from "./IconHexagonal";
import IconMediaRound from "./IconMediaRound";
import CheckBoxLight from "./CheckBoxLight";
// import IconBorderRadius from "./IconBorderRadius";
import { FaBehance } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineShare } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Container = styled.article`
  display: grid;
  grid-template: 1fr / 1fr 1fr;
  @media screen and (max-width: 900px) {
    grid-template: auto / 1fr;
  }
`;

const ContainerIcons = styled.section`
  background-color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(7, 300px);
  /* text-align:center; */
`;

const ContainerInput = styled.section`
  background-color: #000;
  display: grid;
  grid-template: 300px 300px 300px 300px 300px / 1fr 1fr;
  /* text-align:center; */
`;

const Items = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  @media screen and (max-width: 600px) {
    grid-column: span 2;
  }
`;

const InputIconsPage = () => {
  return (
    <Container>
      <ContainerIcons>
        <h2>Social Icons </h2>

        <Items> 
          <IconPivot 
          mainIcon={<HiOutlineShare/>}
          topIcon={<FaInstagram />}
          bottomIcon={<FaDribbble />}
          leftIcon={<FaMediumM />}
          rightIcon={<FaBehance />}
          />
        </Items>

        <Items>
          <IconHoverExtend
            icon={<FaPinterestP />}
            textIcon="Pinterest"
            colorBackIconHover="#bd081c"
          />
        </Items>


        <Items>
          <IconHoverBack icon={<FaGithub />} color='#000' colorHover="#fff" colorBack="#000" />
        </Items>

        <Items>
          <IconHover icon={<FaFacebookF />} iconLink="" colorBack="#fff" colorBackHover="#3b5999" />
        </Items>

          <Items> 
            <IconMediaRound icon={<FaTwitter/>} color="#000" colorHover="#55acee" />
          </Items>

        <Items>
          <SocialMediaHover icon={<FaLinkedinIn />} color="#000" colorHover="#fff" colorBefore="#0077B5" />
        </Items>

        {/* <Items>
          <IconHexagonal
            icon={<FaFacebookF />}
            iconLink=""
            colorBack="#3b5999"
          />
        </Items> */}

        {/* <Items>
            <IconBorderRadius/>
        </Items> */}
      </ContainerIcons>
      <ContainerInput>
        <h2 style={{color: '#fff'}}>Checkbox</h2>
{/* 
        <Items>
          <IconNeu />
        </Items> */}
        <Items>
          <CheckBoxLight />
        </Items>
      </ContainerInput>
    </Container>
  );
};

export default InputIconsPage;
