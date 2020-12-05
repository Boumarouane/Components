import React from "react";

const CircleText = ({txt, radius, classIndex}) => {
        txt = txt.split("")
          classIndex = document.getElementsByClassName("circTxt")[classIndex];
      
        var deg = 360 / txt.length,
          origin = 0;
      
        txt.forEach((ea) => {
          ea = `<p style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${ea}</p>`;
          classIndex.innerHTML += ea;
          origin += deg;
        });      
  return (
    <div class="container">
  <div class="circTxt" id="test"></div>
</div>
  );
};

export default CircleText;
