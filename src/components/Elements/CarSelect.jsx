import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import carImage2 from "../../assets/img/BMW.png";
import "./CarSelect.css";

// Assets


export default function CarSelect({ trims, onSelect }) {

  const [isActive, setIsActive] = useState(null);


  const handleClick = (trim) => {
    onSelect(trim);
    setIsActive(trim?.id);
    console.log('Button cliked');
  };





  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <br />
      <Slider {...settings} className="slider">
        {
          trims?.map((trim, index) => {
            return (
              <LogoWrapper>
                <ContentWrapper key={index} className="row">

                  <div className="col-6">
                    <h5>{trim?.name} </h5>
                    <h6>{trim?.id} </h6>


                  </div>
                  <div className="col-6">
                    <img style={{ width: "40px", height: "40px", margin: "0 10px" }} src={carImage2} alt="" />

                  </div>

                  <ImageWrapper className="col-12 mt-4">
                    <img style={{ width: "100%", height: "80px" }} src={trim?.trim_image} alt="" />

                  </ImageWrapper>

                  <div className='col-12 mt-10'>
                    <Button className={isActive === trim?.id ? 'selected-car' : ''} onClick={() => handleClick(trim)}>
                      select
                    </Button>

                  </div>

                </ContentWrapper>
              </LogoWrapper>
            )
          })
        }

        {/* <LogoWrapper >
          <ContentWrapper className="row">

            <div className="col-6">
              <h5>Dawn </h5>
              <h6>65764 </h6>


            </div>
            <div className="col-6">
              <img style={{ width: "40px", height: "40px", margin: "0 10px" }} src={carImage2} alt="" />

            </div>

            <ImageWrapper className="col-12 mt-10">
              <img src={car_select_1} alt="" />

            </ImageWrapper>

            <div className="col-12 mt-10">
              <Button>
                select
              </Button>

            </div>
          </ContentWrapper>

        </LogoWrapper>
        <LogoWrapper >
          <ContentWrapper className="row">

            <div className="col-6">
              <h5>Dawn </h5>
              <h6>65764 </h6>


            </div>
            <div className="col-6">
              <img style={{ width: "40px", height: "40px", margin: "0 10px" }} src={carImage2} alt="" />

            </div>

            <ImageWrapper className="col-12 mt-10">
              <img src={car_select_1} alt="" />

            </ImageWrapper>

            <div className="col-12 mt-10">
              <Button>
                select
              </Button>

            </div>
          </ContentWrapper>
        </LogoWrapper>
        <LogoWrapper >
          <ContentWrapper className="row">

            <div className="col-6">
              <h5>Dawn </h5>
              <h6>65764 </h6>

            </div>
            <div className="col-6">
              <img style={{ width: "40px", height: "40px", margin: "0 10px" }} src={carImage2} alt="" />

            </div>

            <ImageWrapper className="col-12 mt-10">
              <img src={car_select_1} alt="" />

            </ImageWrapper>

            <div className="col-12 mt-10">
              <Button>
                select
              </Button>

            </div>
          </ContentWrapper>
        </LogoWrapper> */}
      </Slider>
    </Wrapper>

  );



}

const LogoWrapper = styled.div`
background-color: #F6F7F9;
width: 50px;
height: 260px;
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

const ContentWrapper = styled.div`
   margin:20px auto;
   
 `;


const ImageWrapper = styled.div`
   margin: 20px;
   justify-content: center;
 align-items: center;
 `;

const Button = styled.button`
  width: 180px;
 height: 31px;
 padding: 0px 20px;
 justify-content: center;
 align-items: center;
border-radius: 4px;
border: 1px solid #2D3291;
// background: #F6F7F9;


/* Default background color for non-selected cars */
background: #F6F7F9;

/* Background color for the selected car */
&.selected-car {
  background: #2D3291; /* Green background for selected car */
  color :white
}

margin:10px auto;
`;