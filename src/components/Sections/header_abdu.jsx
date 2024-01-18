import { default as React, useEffect, useRef } from "react";

import styled from "styled-components";
// Components
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import FullButton from "../Buttons/FullButton";
// Assets
import Select from 'react-select';

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import images from "../../data/images";
import arrow_log from '../../assets/img/arrow_log.png'
import { fetchManufacturers, fetchModels, fetchYears } from "../../redux/features/dataSlice";

export default function Header() {
  const childRef = useRef(null);
  const history = useNavigate();
  const years = useSelector((state) => state.years);
  const models = useSelector((state) => state.models);
  const manufacturers = useSelector((state) => state.manufacturers);
  const status = useSelector((state) => state.status);
  const dispatch = useDispatch();
  const [slideIndex, setSlideIndex] = useState(0);
  const [update, setUpdate] = useState("");
  const [manufacturer, setManufacturer] = useState("64");
  const [model, setModel] = useState("2639");
  const [year, setYear] = useState("133");
  // const [Brand, setBrand] = useState("133");
  const [swiper, setSwiper] = React.useState(null);

  useEffect(() => {
    dispatch(fetchManufacturers());
    dispatch(fetchYears());
    dispatch(fetchModels("64"));
    console.log(manufacturers)
  }, [dispatch]);

  const handleSlideNext = (slideNext, ind) => {
    console.log(slideNext, ind)
    setSlideIndex(ind)
    setSlideIndex(slideIndex)
    // Now, you have a reference to the child function
    childRef.current = slideNext;

  };


  const handleSlidePrev = (slidePrev, ind) => {
    setSlideIndex(ind)
    // Now, you have a reference to the child function
    childRef.current = slidePrev;

  };

  const handleSlideNextClick = (e) => {
    swiper?.slideNext();
  };
  console.log(childRef)

  const handleSlidePrevClick = () => {
    swiper?.slidePrev();
  };

  // if (status === 'loading') {
  //   return <p>Loading...</p>;
  // }

  // if (status === 'failed') {
  //   return <p>Error loading data</p>;
  // }

  const handleManufacturerChange = (value) => {
    console.log(value.name)
    setManufacturer(value);

      console.log(manufacturers.find(pic => pic.name == value.name).id  )
      dispatch(fetchModels(manufacturers.find(pic => pic.name == value.name).id ));

  }

  const submitHandler = () => {
    history(`/checkout?&${manufacturer}&${model}&${year}`)
  }

  return (
    <>
      <Wrapper id="home" className="headerComp">
        <div>
          <Swiper
            initialSlide={0}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => setSwiper(swiper)}
          >

            {images.map((image, index) => {
              return (
                <SwiperSlide  key={index}>
                  {/* <div style={{ display: "flex", justifyContent: "space-between" }}> */}
                  <div className="row">
                    {/* <LeftSide className="flexCenter"> */}
                    <LeftSide className="col-sm-12 col-md-6 col-lg-6 ">
                      <div dir="rtl">
                        <div
                        style={{
                          marginTop:"12%",
                          marginRight:'7%'             
                      }}
                        >
                        <h1 className="extraBold font60">{image?.text1}</h1>
                        <h1 className="extraBold font60">{image?.text2}</h1>
                        <h2>{image?.text3}</h2>
                        </div>
                        <BtnWrapper>
                          <FullButton title={image?.buttonText} />
                        </BtnWrapper>
                        <NextPrevWrapper className="Center_left">
                          <button
                            style={{ backgroundColor: "white", width: "50px", height: "50px", borderRadius: "50px", borderColor: "#a5a6a8", borderWidth: "1px", margin: "5px" }}
                            onClick={(e) => {
                              e.preventDefault();
                              handleSlidePrevClick();
                            }}
                          >
                           <i class="fi fi-rr-arrow-small-right"
                            style={{display:"flex", justifyContent:'center',alignItems:'center',fontSize:"50px"}}

                           ></i>
                          </button>
                          <button
                            style={{ backgroundColor: "white", width: "50px", height: "50px", borderRadius: "50px", borderColor: "#a5a6a8", borderWidth: "1px", margin: "5px" }}
                            onClick={(e) => {
                              e.preventDefault();
                              handleSlidePrevClick();
                            }}
                          >
                           <i class="fi fi-rr-arrow-small-left"
                            style={{display:"flex", justifyContent:'center',alignItems:'center',fontSize:"50px"}}

                           ></i>
                          </button>
                      
                        </NextPrevWrapper>
                      </div>
                    </LeftSide>
                    <RightSide className="col-sm-12 col-md-6 col-lg-6" >
                    <img src={arrow_log} alt={image.imgAlt} className="image_arrow" />
                      <ImageWrapper>
                        <div className="image-container" key={index} >
                          <img src={image.imgURL} alt={image.imgAlt} className="image_slider" />
                        </div>
                      </ImageWrapper>
                    </RightSide>
                  </div>
                </SwiperSlide>
              );
              // return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
            })}
          </Swiper>

        </div>
      </Wrapper>
      <HeaderElement1 className="d-flex justify-content-center align-items-center" style={{ zInndex: "2", left: "50px", top: "200px", margin: "auto" }}>
        <div class="row " style={{ margin: "0 auto", width: "80%" ,lef:"20px"}}>
          <div 
          // style={{marginTop:"5px"}}
          class="col-lg-3 mb-2">
            <h4
            style={{
              color: "#000",
              fontFamily: "Poppins",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight:"900",
              lineHeight: "normal"}}
            >Car Brand</h4>
            <Select 
            className="select-image"
                  style={{
                    width: "12rem",
                    height: "60px",
                    borderRadius: "8px",
                    border:" 1px solid rgba(110, 118, 132, 0.33)",
                    background: "#FFF"}}
            // id="typeText"  placeholder="Type here"
            
            onChange={handleManufacturerChange}
            // value={}
            value={manufacturer}
            options={
        
              manufacturers?.map((manufacturer, index) => manufacturer)
          
            }
            formatOptionLabel={country => (
              <div className="country-option">
                <span>{country.name}</span>
                <img src={country.make_logo} alt="country-image" />

              </div>
            )
         
          }
            isSearchable
            />


{/* <Select mode="multiple" style={{ width: 120 }}>
    {manufacturers.map(({ id, name, make_logo }) =>
 
        <Select.Option value={name || ""} key={id}>
          <span>{name}</span>
           <img src={make_logo} alt="country-image" />
        </Select.Option>
 
    )}
  </Select> */}
              {/* {
                manufacturers?.map((manufacturer, index) => {
                  console.log(manufacturer.make_logo)

                  return (
                    <option 
                   
                    data-img_src={manufacturer?.make_logo}
                    key={index} value={manufacturer?.id}> 
                    
                    <img src={`${manufacturer?.make_logo}`} alt="Image 1" />
                    {manufacturer?.name}
                    </option>
                  )
                })
              } */}
          </div>
          <div class="col-lg-3 mb-2 ">
          <h4
            style={{
              color: "#000",
              fontFamily: "Poppins",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight:"900",
              lineHeight: "normal"}}
            >Car Model</h4>
            <select 
              
            id="typeText" placeholder="Type here" value={model} className="form-control select_name" onChange={(e) => setModel(e.target.value)}>
              {
                models?.map((model, index) => {
                  return (
                    <option key={index} value={model?.id}>{model?.name}</option>
                  )
                })
              }
            </select>
          </div>
          <div 
          class="col-lg-3 mb-2"
          >
                <h4
            style={{
              color: "#000",
              fontFamily: "Poppins",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight:"900",
              lineHeight: "normal"}}
            >Car Year</h4>
            <select
                 
            id="typeText" placeholder="Type here" value={year} className="form-control select_name" onChange={(e) => setYear(e.target.value)}>
              {
                years?.map((year, index) => {
                  return (
                    <option key={index} value={year?.id}>{year?.name}</option>
                  )
                })
              }
            </select>
          </div>
          <div class="col-lg-3 mt-3">
            <EavaluateButton href="" onClick={submitHandler}>Evaluate</EavaluateButton>
          </div>
        </div>
      </HeaderElement1>

    </>
  );
}


const Wrapper = styled.section`
  padding-top: 100px;
  width: 100%;
   @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
   
`;
const RightSide = styled.div`
@media (max-width: 960px) {
  position:relative;
  top:-10px;
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;

  }
   
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
   max-width: 190px;
   margin-top:20px;
  @media (max-width: 960px) {
    margin: 0 auto;


  }
`;


const NextPrevWrapper = styled.div`

 margin-top: 25px;
 margin-right:70%;
 @media(max-width:960px){

  margin-top: 25px;
  margin-right:70%;
 }
  
`;
const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  // display: flex;
  // justify-content: space-between;
  // position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 10%;
    justify-content: center;
  }
`;


const EavaluateButton = styled.button`
 color:#FFF;
 width: 248px;
 height: 40px;
 flex-shrink: 0;
border-radius: 8px;
background: #2D3291;
box-shadow: 0px -5px 13px 0px rgba(45, 50, 145, 0.12);
@media(max-width:960px){
  width: 100%;
 }  
`;



const HeaderElement1 = styled.div`
 width: 75%;
// height: 7rem;
padding:1rem;
background-color: #FFFFFF;
fill: linear-gradient(180deg, #FFF 0%, #FFF 100%);

filter: drop-shadow(0px 5px 12px rgba(10, 41, 96, 0.20));
border-radius:15px ;
// padding:0

  
  
`;


