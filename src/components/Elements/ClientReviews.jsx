import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import carImage2 from "../../assets/img/car34.png";

// Assets


export default function ClientReviews() {



  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <Wrapper>
<h1>ما يقوله الناس عنا</h1>
<br />
    <Slider {...settings}>

       <LogoWrapper >
      
      <div className="client-name">
      <div>
      <h5>Dawn Marie Williams <span>Client</span> </h5>
        <p>******</p>     
 </div>

       <img style={{width: "40px", height: "40px" , margin:"0 10px"}} src={carImage2} alt="" />

       </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eveniet, veniam, repellat blanditiis, quam neque suscipit beatae possimus vero voluptatibus ipsa. </p>

         </LogoWrapper>

         <LogoWrapper >
         <div className="client-name">
        <h5>Dawn Marie Williams <span>Client</span> </h5>
        <img style={{width: "40px", height: "40px" , margin:"0 10px"}} src={carImage2} alt="" />
      </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eveniet, veniam, repellat blanditiis, quam neque suscipit beatae possimus vero voluptatibus ipsa. </p>
         </LogoWrapper>
       <LogoWrapper >
       <div className="client-name">
        <h5>Dawn Marie Williams <span>Client</span> </h5>
        <img style={{width: "40px", height: "40px" , margin:"0 10px"}} src={carImage2} alt="" />
      </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eveniet, veniam, repellat blanditiis, quam neque suscipit beatae possimus vero voluptatibus ipsa. </p>
         </LogoWrapper>
         <LogoWrapper >
         <div className="client-name">
        <h5>Dawn Marie Williams <span>Client</span> </h5>
        <img style={{width: "40px", height: "40px" , margin:"0 10px"}} src={carImage2} alt="" />
      </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eveniet, veniam, repellat blanditiis, quam neque suscipit beatae possimus vero voluptatibus ipsa. </p>
         </LogoWrapper>
         <LogoWrapper >
         <div className="client-name">
        <h5>Dawn Marie Williams <span>Client</span> </h5>
        <img style={{width: "40px", height: "40px" , margin:"0 10px"}} src={carImage2} alt="" />
      </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eveniet, veniam, repellat blanditiis, quam neque suscipit beatae possimus vero voluptatibus ipsa. </p>
         </LogoWrapper>
         <LogoWrapper >
         <div className="client-name">
        <h5>Dawn Marie Williams <span>Client</span> </h5>
        <img style={{width: "40px", height: "40px" , margin:"0 10px"}} src={carImage2} alt="" />
      </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eveniet, veniam, repellat blanditiis, quam neque suscipit beatae possimus vero voluptatibus ipsa. </p>
         </LogoWrapper>
    </Slider>
    </Wrapper>

  );


   
}

const LogoWrapper = styled.div`
overflow: hidden;
 background-color: #ffffff;
text-align: right;
border-radius: 0.5rem;
max-width: 290px;
box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
 
  :focus-visible {
    outline: none;
    border: 0px;  
  }
`;
const Wrapper = styled.div`
   margin-top:"60px";
   text-align:center;
`;