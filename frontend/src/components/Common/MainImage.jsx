import React from "react";
import ImgCover from "../../assets/img/cover.png";

const MainImage = () => {
  return (
    <>
      <section class="main-visual">
        <div class="main-catch">
          <p class="text-1">GET THE RIGHT FLOW OF MUSIC</p>
          <p class="text-2">Enjoy the exceptional quality of our Products</p>
        </div>
        <img src={ImgCover} alt="" />
      </section>
    </>
  );
};

export default MainImage;
