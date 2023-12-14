import React from "react";
import img1 from "../../Assets/Images/image-1.jpg";
import img2 from "../../Assets/Images/image-2.jpg";
import img3 from "../../Assets/Images/image-3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function MainSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    arrows: false,
    swipe: true,
    fade: true,
    swipeToSlide: true,
    slidesToShow: 1,
    autoplay: true,
    draggable: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    slidesToScroll: 1,
  };
  return (
    <>
      <section
        className="max-vh-100 position-relative top-0 bottom-0"
        id="slider"
      >
        <div className="max-vh-100">
          <Slider {...settings}>
            <img src={img1} className="w-100 h-100" alt="" />
            <img src={img2} className="w-100 h-100" alt="" />
            <img src={img3} className="w-100 h-100" alt="" />
          </Slider>
        </div>
      </section>
    </>
  );
}
