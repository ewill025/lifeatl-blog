import React from "react";
import { Carousel } from "react-responsive-carousel";
import  image1  from "./images/IMG_7029.jpg";
import  image2  from "./images/IMG_7113.jpg";
import  image3  from "./images/IMG_7115.jpg";
import  image4  from "./images/IMG_7118.jpg";

export const Slider = props => (
  <Carousel
    autoPlay
    showArrows={false}
    showStatus={false}
    showThumbs={false}
    infiniteLoop={true}
    swipeable={true}
    interval={3000}
    transitionTime={300}
    showIndicators={false}
    fade={true}
    className="mx-auto object-scale-down w-fill "
  >
    <div className="container opacity-50">
      <img class=" h-fill w-fill object-scale-down " src={image1} alt="" />
    </div>
    <div className="container opacity-50">
      <img class=" h-fill w-fill object-scale-down " src={image1} alt="" />
    </div>
    <div className="container opacity-50">
      <img class=" h-fill w-fill object-scale-down " src={image2} alt="" />
    </div>
    <div className="container opacity-50">
      <img class=" h-fill w-fill object-scale-down " src={image3} alt="" />
    </div>
    <div className="container opacity-50">
      <img class=" h-fill w-fill object-scale-down " src={image4} alt="" />
    </div>
  </Carousel>
);
