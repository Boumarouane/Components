import React from "react";
import TextAnimation from "../TextComponents/TextAnimation";

const PageText = () => {
  return (
    <div>
      <TextAnimation
        textOne="Welcome"
        textTwo="On my website"
        heightContainer="40rem"
        widthContainer="100%"
        colorTextOne="black"
        colorTextTwo="black"
        backgroundTextOne="white"
      />
    </div>
  );
};

export default PageText;
