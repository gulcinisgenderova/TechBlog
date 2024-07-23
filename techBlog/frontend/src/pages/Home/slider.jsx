import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

function HomeSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1500,
    autoplay: true,
    dots: true,
    autoplaySpeed: 1000,
  };
  return (
    <>
      <div className="sliderImage">
        <Slider {...settings}>
          <div className="slider1">
            <img
              src="birinci.jpg"
              alt=""
            />

          </div>
          <div className="slider2">
            <img
              src="ikinci.jpg"
              alt=""
            />

          </div>
          <div className="slider2">
            <img
              src="ucuncu.jpg"
              alt=""
            />

          </div>
        </Slider>
      </div>
    </>
  );
}

export default HomeSlider;