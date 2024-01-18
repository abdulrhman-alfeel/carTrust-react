import React,{useState,useEffect} from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Assets
import ClientLogo01 from "../../assets/img/clients/logo01.svg";
import ClientLogo02 from "../../assets/img/clients/logo02.svg";
import ClientLogo03 from "../../assets/img/clients/logo03.svg";
import ClientLogo04 from "../../assets/img/clients/logo04.svg";
import ClientLogo05 from "../../assets/img/clients/logo05.svg";


export default function ClientSlider() {
  const [width_slid, setWidth_slid] = useState(4);
  // useEffect(() => {
  //   const handleResize = () => {
  //     setWidth_slid(window.innerWidth < 960 ? 2 :4)

  //   };
  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, [window.innerWidth]);
  const settings = {
    infinite: true,
    speed: 200,
    slidesToShow: 7,
    slidesToScroll: 7,
    autoplay:true,
    arrows: false,

  };
  return (
    <div className="container" style={{
      
      textAlign:"center", 
      position:'relative',
      // top:"-50%"
      // padding:"20px"
      overflow:'hidden'
      // border:"solid 2px #000"
      }} >
      {/* <LogoSlider/> */}
      <h1
      style={{
      color: "#2D3291",
      textalign: "center",
      fontFamily: "Tajawal",
      fontSize: "38px",
      fontStyle: "normal",
      fontWeight: "800",
      lineHeight:" 72px"
      }}
      >شركاؤنا</h1>
      <div     style={{
        width:"100rem",
        height:"8rem",overflow:'hidden',
        // border:'solid 2px #000',
    marginBottom:'20px',

  }}>
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
    </div>
//     <div class="logo-slider">
// 	<div class="logo-slide-track">
// 		<div class="slide">
// 		<img src={ClientLogo01} alt="client logo" className="image_serves_box "/>
// 		</div>
// 		<div class="slide">
// 		<img src={ClientLogo02} alt="client logo" className="image_serves_box "/>
// 		</div>
// 		<div class="slide">
// 		<img src={ClientLogo03} alt="client logo" className="image_serves_box "/>
// 		</div>
// 		<div class="slide">
// 		<img src={ClientLogo04} alt="client logo" className="image_serves_box "/>
// 		</div>
// 		<div class="slide">
// 		<img src={ClientLogo05} alt="client logo" className="image_serves_box "/>
// 		</div>
	
// 	</div>
// </div>
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