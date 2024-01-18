import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Assets
import ClientLogo01 from "../../assets/img/clients/logo01.svg";
import ClientLogo02 from "../../assets/img/clients/logo02.svg";
import ClientLogo03 from "../../assets/img/clients/logo03.svg";
import ClientLogo04 from "../../assets/img/clients/logo04.svg";
import ClientLogo05 from "../../assets/img/clients/logo05.svg";


export default function ClientSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    autoplay:true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container" style={{
      
      textAlign:"center", 
      // border:"solid 2px #000"
      }} >
      {/* <LogoSlider/> */}
      <h1
      style={{
      color: "#2D3291",
      textalign: "right",
      fontFamily: "Tajawal",
      fontSize: "38px",
      fontStyle: "normal",
      fontWeight: "800",
      lineHeight:" 72px"
      }}
      >شركاؤنا</h1>
      <Slider  {...settings} >
        <LogoWrapper >
          <ImgStyle src={ClientLogo01} alt="client logo" className="image_serves_box "/>
        </LogoWrapper>
        <LogoWrapper >
          <ImgStyle src={ClientLogo02} alt="client logo" className="image_serves_box "/>
        </LogoWrapper>
        <LogoWrapper >
          <ImgStyle src={ClientLogo03} alt="client logo" className="image_serves_box "/>
        </LogoWrapper>
        <LogoWrapper >
          <ImgStyle src={ClientLogo04} alt="client logo" className="image_serves_box "/>
        </LogoWrapper>
        <LogoWrapper >
          <ImgStyle src={ClientLogo05} alt="client logo" className="image_serves_box "/>
        </LogoWrapper>
       
        <LogoWrapper >
          <ImgStyle src={ClientLogo03} alt="client logo" className="image_serves_box "/>
        </LogoWrapper>
        <LogoWrapper >
          <ImgStyle src={ClientLogo04} alt="client logo" className="image_serves_box "/>
        </LogoWrapper>
        <LogoWrapper >
          <ImgStyle src={ClientLogo01} alt="client logo" className="image_serves_box "/>
        </LogoWrapper>
        <LogoWrapper >
          <ImgStyle src={ClientLogo02} alt="client logo" className="image_serves_box "/>
        </LogoWrapper>
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 100%;
  height: 100px;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
const ImgStyle = styled.img`
  max-width: 100%;
  max-height: 120%;
  padding: 2%;
`;