import React from "react";
import styled from "styled-components";
import ButtonSubmit from "../ButtonSubmit";

const Card = ({
  title,
  texte,
  backBoxColor,
  backImage,
  backSizeImage,
  colorTitle,
  fontSizeTitle,
  fontSizeTexte,
  texteButton,
  texteShadowButton,
  backImageButton
}) => {
  const Box = styled.div`
    display: flex;
    flex-direction: column;
    background: ${backBoxColor};
    box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.2);
    width: 20rem;
    height: 37rem;
    margin: 20px;
    border-radius: 25px;
    overflow: hidden;
  `;

  const ImageBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
  `;

  const Image = styled.div`
    background-image: url(${backImage});
    background-size: ${backSizeImage};
    border-radius: 50%;
    width: 240px;
    height: 220px;
  `;

  const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 50%;
    text-align: center;
  `;

  const TitleBox = styled.h2`
    color: ${colorTitle};
    font-size: ${fontSizeTitle};
    padding-bottom: 50px;
  `;

  const ParagrapheBox = styled.p`
    padding: 0 50px 0 50px;
    font-size: ${fontSizeTexte};
    letter-spacing: 0.02rem;
    padding-bottom: 50px;
  `;

  return (
    <>
      <Box>
        <ImageBox>
          <Image />
        </ImageBox>
        <TextBox>
          <TitleBox>{title}</TitleBox>
          <ParagrapheBox>{texte} </ParagrapheBox>
          <ButtonSubmit
            texte={texteButton}
            fontSize="18px"
            texteShadow={texteShadowButton}
            backImage={backImageButton}
            color="white"
            width="75%"
            height="3rem"
            border="none"
            borderRadius="50px"
          />
        </TextBox>
      </Box>
    </>
  );
};

export default Card;
