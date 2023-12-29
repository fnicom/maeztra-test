import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Banner from "../../assets/Banner.png";
import BannerMobile from "../../assets/banner-mobile.png";

import "./styles.scss";
import "../../App.scss";

const BannerSlider = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    lazyLoad: "ondemand",
  };

  return (
    <Slider {...settings}>
      <div>
        <a href="#" target="_blank">
          <img src={isMobile ? BannerMobile : Banner} alt="Slide 1" />
        </a>
      </div>
      <div>
        <a href="#" target="_blank">
          <img src={isMobile ? BannerMobile : Banner} alt="Slide 2" />
        </a>
      </div>
      <div>
        <a href="#" target="_blank">
          <img src={isMobile ? BannerMobile : Banner} alt="Slide 3" />
        </a>
      </div>
      <div>
        <a href="#" target="_blank">
          <img src={isMobile ? BannerMobile : Banner} alt="Slide 3" />
        </a>
      </div>
    </Slider>
  );
};

export default BannerSlider;
