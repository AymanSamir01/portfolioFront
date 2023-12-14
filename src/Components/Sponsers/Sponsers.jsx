import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Style from "./Sponsers.module.css";

export default function Sponsers() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    prevArrow: <></>,
    nextArrow: <></>,
  };
  return (
    <>
      <div className={`${Style.mainContainer}`}>
        <Slider {...settings}>
          <div className="container">
            <img
              src="https://www.imgacademy.com/sites/default/files/2017-06/airweavelogo.png"
              alt=""
              className="w-100"
              style={{ height: "100px" }}
            />
          </div>
          <div className="container">
            <img
              src="https://www.imgacademy.com/sites/default/files/2018-01/academybus.png"
              alt=""
              className="w-100"
              style={{ height: "100px" }}
            />
          </div>
          <div className="container">
            <img
              src="https://www.imgacademy.com/sites/default/files/dunlop-bw-bg.jpg"
              alt=""
              className="w-100"
              style={{ height: "100px" }}
            />
          </div>
          <div className="container">
            <img
              src="https://www.imgacademy.com/sites/default/files/gt-jhop.png"
              alt=""
              className="w-100"
              style={{ height: "100px" }}
            />
          </div>
          <div className="container">
            <img
              src="https://www.imgacademy.com/sites/default/files/forever-lawn-website-logo.png"
              alt=""
              className="w-100"
              style={{ height: "100px" }}
            />
          </div>
          <div className="container">
            <img
              src="https://www.imgacademy.com/sites/default/files/tandem-logo.png"
              alt=""
              className="w-100"
              style={{ height: "100px" }}
            />
          </div>
        </Slider>
      </div>
    </>
  );
}
