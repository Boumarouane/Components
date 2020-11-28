import React from "react";
import styled from "styled-components";
import TitleOne from "../TexteComponents/TitleOne";
import Card from "./Card";
import ImageRelax from "../image/relax.jpg";
import ImageSleep from "../image/sleep.jpg";
import ImageAnalyse from "../image/analyse.jpg";

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
          
      </Section>
    </>
  );
};

export default PageCard;
