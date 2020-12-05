import React from "react";
import styled from "styled-components";
import TitleOne from "../TextComponents/TitleOne";
import Card from "./Card";
import ImageRelax from "../image/relax.jpg";
import ImageSleep from "../image/sleep.jpg";
import ImageAnalyse from "../image/analyse.jpg";
import CardImage from "./CardImage";
import Image from "../image/people.jpeg";
import ImageTwo from "../image/prop.jpeg";
import { FaDribbble } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";



const Section = styled.section`
  background-color: #F5F5F5;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 50px 0 50px 0;
  border-bottom: 1px solid grey;
`;

const PageCard = () => {
  return (
    <>
      <TitleOne title="Card Components" />
      <Section>
        <Card
          backImage={ImageRelax}
          title="Relax"
          texte="Pre-Choose your music you would like to listen to before going to sleep"
          backBoxColor="#fff"
          backSizeImage="cover"
          colorTitle="#0f3247"
          fontSizeTitle="35px"
          fontSizeTexte="17px"
          texteButton="Choose Song"
          texteShadowButton="1.4px 1.4px #0F3247"
          backImageButton="linear-gradient(to right, #0F3247 10%, #5FBDC4)"
        />
        <Card
          backImage={ImageSleep}
          title="Sleep"
          texte="Let your mind waver and go to sleep. Our cute workers will process your data"
          backBoxColor="#fff"
          backSizeImage="cover"
          colorTitle="#762D49"
          fontSizeTitle="35px"
          fontSizeTexte="17px"
          texteButton="Set Timer"
          texteShadowButton="1.4px 1.4px #301B40"
          backImageButton="linear-gradient(to right, #762D49 10%, #F1BCCC)"
        />
        <Card
          backImage={ImageAnalyse}
          title="Analyse"
          texte="Look the data chart and make decisions on how to improve your sleeping"
          backBoxColor="#fff"
          backSizeImage="cover"
          colorTitle="#E64A1D"
          fontSizeTitle="35px"
          fontSizeTexte="17px"
          texteButton="Process Data"
          texteShadowButton="1.4px 1.4px #301B40"
          backImageButton="linear-gradient(to right, #E64A1D 10%, #FACB39)"
        />
      </Section>
      <Section>
        <CardImage
          textLeft="Web Designer"
          textRight="Sophie Dubois"
          image={ImageTwo}
          iconOne={<FaDribbble />}
          iconTwo={<FaBehance />}
          posIcon="350px"
          colorBackCard="#ff5e62"
          gradientColorLeft="linear-gradient(to bottom, #ff9966 , #ff5e62)"
          gradientColorRight="linear-gradient(to bottom, #ff5e62, #ff9966)"
          transformORight="skew(10deg) rotate(12deg) translateX(150%) translateY(-50%)"
          transformOLeft="skew(10deg) rotate(12deg) translateX(-150%) translateY(-50%)"
          transformORightHover="skew(10deg) rotate(10deg) translateX(0) translateY(-50%)"
          transformOLeftHover="skew(10deg) rotate(10deg) translateX(0) translateY(-50%)"
          posAbsTopLeft="80%"
          posAbsTopRight="73%"
          colorHoverIcon="#ff9966"
          linkIconOne=""
          linkIconTwo=""        
        />
        <CardImage
          textLeft="Devellopeur Web"
          textRight="Robe Van Himst"
          image={Image}
          iconOne={< FaGithub/>}
          iconTwo={<FaLinkedinIn />}
          posIcon="0px"
          colorBackCard="#c33764"
          gradientColorLeft="linear-gradient(to bottom, #c33764, #1d2671)"
          gradientColorRight="linear-gradient(to bottom, #1d2671, #c33764)"
          transformORight="skew(-10deg) rotate(-12deg) translateX(150%) translateY(-50%)"
          transformOLeft="skew(-10deg) rotate(-12deg) translateX(-150%) translateY(-50%)"
          transformORightHover="skew(-10deg) rotate(-10deg) translateX(0) translateY(-50%)"
          transformOLeftHover="skew(-10deg) rotate(-10deg) translateX(0) translateY(-50%)"
          posAbsTopLeft="67%"
          posAbsTopRight="60%"
          colorHoverIcon="#1d2671"
          linkIconOne=""
          linkIconTwo=""        
        />
      </Section>
    </>
  );
};

export default PageCard;
