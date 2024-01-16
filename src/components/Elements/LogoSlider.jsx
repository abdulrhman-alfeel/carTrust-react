import { React, useState } from "react";
import Slider from "react-slick";

export default function LogoSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: currentSlide === 2 ? null : <div>Next</div>,
    prevArrow: currentSlide === 0 ? null : <div>Prev</div>,
    beforeChange: (current, next) => setCurrentSlide(next),
  };
  return (
    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}