import { default as React, useEffect, useRef } from "react";

import styled from "styled-components";
// Components
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import FullButton from "../Buttons/FullButton";
// Assets
import Slider from "react-slick";

import Select from 'react-select';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import arrow_log from '../../assets/img/arrow_log.png';
import images from "../../data/images";
import { fetchManufacturers, fetchModels,fetchTrims } from "../../redux/features/dataSlice";
import { Loading } from "../Elements/Loading";
import { toast } from "react-toastify";
// import {fetchYearsApi} from "../../pages/function/useFatchYear";
import axios from 'axios';
const API_BASE_URL = 'https://partner-api.cartrust.sa/api/v2'; // Replace with your API endpoint



export default function Header() {
  const childRef = useRef(null);
  const history = useNavigate();
  const years = useSelector((state) => state.years);
  const models = useSelector((state) => state.models);
  const billing = useSelector((state) => state.billing);
  const data = useSelector((state) => state.trims);

  const manufacturers = useSelector((state) => state.manufacturers);
  const status = useSelector((state) => state.status);
  const dispatch = useDispatch();
  const [manufacturer, setManufacturer] = useState(0);
  const [model, setModel] = useState(null);
  const [year, setYear] = useState(null);
  const [icon, setIcon] = useState("");
  const [Brand, setBrand] = useState('');
  const [found, setFound] = useState(false);
  const [ModelsName, setModelsName] = useState('');
  const [data_years, setDatayrs] = useState([]);
  // const [Brand, setBrand] = useState("133");
  const [swiper, setSwiper] = React.useState(null);
  const [empty, setEmpty] = React.useState(false);



  useEffect(() => {
    dispatch(fetchManufacturers());   
    setTimeout(changeSlide, 1000);
  }, [dispatch]);






  const handleManufacturerChange = (value) => {
    setIcon(value.make_logo)
    setBrand(value.name)
    setModel(null)
    setYear(null)
    setManufacturer(value.id);
      dispatch(fetchModels(value.id));

  }

  const handleModelChange = (value) => {
    setModel(value.id);
    setModelsName(value.name);
    setEmpty(false)
    console.log(manufacturer,value.id,'manufacturerdont')
 
    // dispatch(fetchYears(value.id,manufacturer))
    fetchYearsApi(value.id,manufacturer)

    console.log(fetchYearsApi(value.id,manufacturer),'array')
   }



  const fetchYearsApi = async (model,manufacturer) => {
    try {
        console.log(manufacturer,'manugactur')
        const response = await axios.get(`${API_BASE_URL}/years?service_name=evaluation&manufacturer_id=${manufacturer}&model_id=${model}`);
        console.log(response.data.years)
        const databis = response.data.years;
        setDatayrs(databis)
        return response.data.years
    } catch (error) {
        return error;
    }  }




  const submitHandler = async () => {
    console.log(Brand,'brand');
    console.log(year,'year');
    console.log(Brand,ModelsName,year);
    setFound(true)
    if(Brand !== null && ModelsName !== null && year !== null){
    dispatch(fetchTrims({ manufacturer, model, year }))
      try{
          setTimeout(() => {
          status ? 
          history(`/checkout?&${manufacturer}&${model}&${year}&${icon}&${Brand}&${ModelsName}`)
          :   toast.error('لايوجد هناك تفاصيل لهذا الخيار');
        }, 1000);
        setFound(false)
      }catch(err){console.log(err)}
    ;

      setEmpty(false)
    }else{
      setEmpty(true)
      // alert('يجب اكمال البيانات ')
    }
    
  }

  let currentSlide = 0;
  function changeSlide() {
    try{
    const slides_tow = document.querySelectorAll('.slide');
  //  slides_tow[currentSlide].style.opacity = 0;
   slides_tow[currentSlide].style.display = 'none';
   currentSlide = (currentSlide + 1) % slides_tow.length;
   slides_tow[currentSlide].style.display = 'flex';
  }catch(err){
    console.log(err)
  }
  }
  // setInterval(changeSlide, 3000); // Change slide every 3 seconds
 // Change slide every 3 seconds



  const Stayle_selct={
    control: (provided) => ({
      ...provided,
      border: `1px solid ${empty? "#a02424":'#ccc'}`,
      borderRadius: "8px",
      padding: "1px 4px",
      // paddingTop: "7px",
      height: "46px",
      fontSize:"14px",
      minHeight: "56px",
      boxShadow: "none",
      cursor: "pointer",
      
      "&:hover": {
        borderColor: "#4d90fe",
      },
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "4px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      marginTop: "4px",
      zIndex: 999,
    }),
    menuList: (provided) => ({
      ...provided,
      padding: 0,
      maxHeight: "400px",
      overflowY: "auto",
    }),
    option: (provided, state) => ({
      ...provided,
      padding: "8px 12px",
      color: state.isSelected ? "#000" : "#333",
      backgroundColor: state.isSelected ? "#fff" : "#fff",
      "&:hover": {
        backgroundColor: "#f4f4f4",
      },
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
    }),
  }


  const settings = {
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    arrows: true,
    cssEase: "linear",
    responsive: [
      {
      breakpoint: 1280,
      settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      dots: true
      }
      },
      {
      breakpoint: 1024,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true
      }
      }
      ]
      

  
  };

  return (
    <>

      <Wrapper  id="home" >
        <Slider  autoplaySpeed={5000} {...settings} >
            {images.map((image, index) => {
              return (
                <div key={index} style={{border:'solid 2px #000'}} >
                  <div className="row">
                    <LeftSide className="col-sm-12 col-md-6 col-lg-6 ">
                      <div dir="rtl">
                        <div
                        style={{
                          marginTop:"9%",
                          marginRight:'7%',
                      }}
                        >
                        <h1 style={{   lineHeight:'2em'}} className="extraBold ">{image?.text1}</h1>
                        <h1 className="extraBold ">{image?.text2}</h1>
                        <h2>{image?.text3}</h2>
                        </div>
                        <BtnWrapper style={{
                          // position:'relative',
                          // top:'15em',
                          overflow:'hidden',
                        display:window.innerWidth < 960?'none': 'flex'
                        }}>
                          <FullButton title={image?.buttonText} hr="#headrEvleaction" />
                        </BtnWrapper>
                        <NextPrevWrapper className="Center_left">
                          <button
                            style={{ backgroundColor: "white", width: "50px", height: "50px", borderRadius: "50px", borderColor: "#a5a6a8", borderWidth: "1px", margin: "5px" }}
                            onClick={(e) => {
                              e.preventDefault();
                              // handleSlidePrevClick();
                              changeSlide()
                            }}
                          >
                          <i class="fi fi-rr-arrow-small-right"
                            style={{display:"flex", justifyContent:'center',alignItems:'center',fontSize:"30px"}}></i>
                          </button>
                          <button
                            style={{ 
                              backgroundColor: "white", width: "50px", height: "50px", borderRadius: "50px", 
                              borderColor: "#a5a6a8", borderWidth: "1px", margin: "5px" ,
                              }}
                            onClick={(e) => {
                              e.preventDefault();
                              // handleSlidePrevClick();
                              changeSlide()
                            }}
                          >
                          <i class="fi fi-rr-arrow-small-left"
                            style={{display:"flex", justifyContent:'center',alignItems:'center',fontSize:"30px"}}></i>
                          </button>
                        </NextPrevWrapper>
                      </div>
                    </LeftSide>
                    <RightSide className="col-sm-12 col-md-6 col-lg-6" >
           
                    <img src={arrow_log} alt={image.imgAlt} 
                    width='3%' 
                    style={{
                    position: "absolute",
                    top: "2.5em",
                    // left: '2%',
                    // right:'50%',
                    marginLeft:'-0.7%',
                    zIndex:999
                    }} />
                      <ImageWrapper>
                        <div style={{justifyContent:'center',
                      marginLeft:'60px',
                      position:'relative',
                      left:"20px"
                      }} className="image-container slide" key={index} >
                          <img src={image.imgURL} alt={image.imgAlt}
                          style={{
                            // border:'solid 2px #000',
                            minHeight:window.innerWidth > 960? "45em": "20em",
                          }}
                          className="image_slider" />
                        </div>
                      </ImageWrapper>

                    </RightSide>
                  </div>
                </div>
              );
              // return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
            })}
          </Slider>

      </Wrapper>
      <HeaderElement1 className="d-flex justify-content-center align-items-center" style={{position:'relative',zIndex:999, margin: "auto", }}>
        <div
        id="headrEvleaction" 
        class="row " 
        style={{ margin: "0 auto", width: "80%" ,
        lef:"20px",flexDirection:'row-reverse'}}>
          <div 
          // style={{marginTop:"5px"}}
          class="col-lg-3 mb-2">
            <h4
            style={{
              color: "#000",
              marginBottom:'10px',
              fontSize: "14px",
              fontStyle: "normal",
              textAlign:'right',
              fontWeight:"900",
              lineHeight: "normal"}}
            >الشركة المصنعة</h4>

          <Select 
          isRtl
            className="select-image"
              // isDisabled={false}
              placeholder='حدد ماركة السيارة'
            isSearchable={false}
            onChange={handleManufacturerChange}
            value={manufacturer?.name}
            options={
              manufacturers?.map((manufacturer, index) => manufacturer)
            }
            formatOptionLabel={country => (
              <div className="country-option">
                <span>{country.name_arabic}</span>
                <img src={country.make_logo} alt="country-image" />
              </div>
            )
          }
          styles={Stayle_selct}
        />

          </div>
          <div class="col-lg-3 mb-2 ">
          <h4
            style={{
              color: "#000",
              marginBottom:'10px',
              fontSize: "14px",
              fontStyle: "normal",
              textAlign:'right',
              fontWeight:"900",
              lineHeight: "normal"}}
            >الموديل</h4>

            <Select 
            isRtl
            placeholder="حدد موديل السيارة"
            className="select-image"
              // isDisabled={false}
            isSearchable={false}
            onChange={handleModelChange}
            // value={}
            value={model?.name}
            options={
              models?.map((model, index) => model)
            }
            formatOptionLabel={country => (
              <div className="country-option">
                <span>{country.name}</span>
              </div>)}
          styles={Stayle_selct}
        />
          </div>
          <div 
          class="col-lg-3 mb-2"
          >
            <h4
            style={{
              color: "#000",
              marginBottom:'10px',
              fontSize: "14px",
              fontStyle: "normal",
              textAlign:'right',
              fontWeight:"900",
              lineHeight: "normal"}}
            >السنة</h4>
            <Select 
            isRtl
            className="select-image"
            placeholder="حدد سنة الصنع"
              // isDisabled={false}
            isSearchable={false}
            onChange={(e) => setYear(e.id)}
            // value={}
            // value={year?.name}
            options={
              data_years?.map((model, index) => model)
            }
            formatOptionLabel={country => (
              <div className="country-option">
                <span>{country.name}</span>
              </div>)}
          styles={Stayle_selct}
        />
          </div>
          {status === "loading" ? (
                      <button style={{
                        border:'none',backgroundColor:'#fff'}}  className="col-lg-3 mt-4 ">
                          <Loading />
                      </button>
              
                  ) : (
          <button style={{
            border:'none',
            color:"white"}} onClick={submitHandler} className="col-lg-3  Evaluate">
          تقييم
          </button>
)}
        
        </div>
      </HeaderElement1>
    </>
  );
}


const Wrapper = styled.section`
  padding-top: 100px;
  width: 100%;
  height: 50em;
  overflow:hidden;
   @media (max-width: 960px) {
    flex-direction: column;
      height: 40em;
  }
`;
const LeftSide = styled.div`
`;
const RightSide = styled.div`
display:flex;
// border:solid 2px #000;
overflow: hidden;
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

 margin-top: 125px;
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
    width: 100%;
    justify-content: center;
  }
`;


const EavaluateButton = styled.button`

//  color:#FFF;
//  width: 248px;
//  height: 55rem,
//  padding:10rem;
//  flex-shrink: 0;
// border-radius: 8px;
// background: #2D3291;
// box-shadow: 0px -5px 13px 0px rgba(45, 50, 145, 0.12);
// @media(max-width:960px){
//   width: 100%;
 }  
 background:none;
`;



const HeaderElement1 = styled.div`
 width: 75%;
 height: 175px;
padding:1rem;
top:-70px;
background-color: #FFFFFF;
fill: linear-gradient(180deg, #FFF 0%, #FFF 100%);

filter: drop-shadow(0px 5px 12px rgba(10, 41, 96, 0.20));
border-radius:15px ;
// padding:0
@media(max-width:960px){
  height: 100%;
}
  
  
`;


