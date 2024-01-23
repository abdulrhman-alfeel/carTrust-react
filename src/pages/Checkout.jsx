import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";
import bmw from "../assets/img/BMW.png";
// import bmw_ from "../assets/img/BMW 1.png";
import applepay from "../assets/img/applepay.png";
import cash from "../assets/img/cash.png";
import mastercard from "../assets/img/mastercard.png";
import visa from "../assets/img/visa.png";
import CarSelect from "../components/Elements/CarSelect";
import { Loading } from "../components/Elements/Loading";
import TopNavbar from "../components/Nav/TopNavbar";
import { checkout, fetchOptions, fetchTrims, paymentUrl } from "../redux/features/dataSlice";
import Select from 'react-select';

import {
  Flex,
  Heading,
  Avatar,
  AvatarGroup,
  Text,
  Icon,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Divider,
  Link,
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import {
  FiHome,
  FiPieChart,
  FiDollarSign,
  FiBox,
  FiCalendar,
  FiChevronDown,
  FiChevronUp,
  FiPlus,
  FiCreditCard,
  FiSearch,
  FiBell,
  FiHeart,
  FiBatteryCharging,
  FiCrosshair,
  FiUsers,
  FiChevronsRight,
  FiSun,
  FiMoreHorizontal,
} from "react-icons/fi";


import imag_3 from "../assets/img/car_select_1.png";
import imag_4 from "../assets/img/car_select_2.png";
import imag_5 from "../assets/img/car_select_3.png";
import Slider from "react-slick";


// Sections

export default function Checkout() {
  const [width, setWidth] = useState(window.innerWidth);
  const history = useNavigate();
  const urlData = window.location.search.split("?")[1];
  const manufacturer = urlData?.split("&")[1];
  const model = urlData?.split("&")[2];
  const year = urlData?.split("&")[3];
  const dispatch = useDispatch();
  const status = useSelector(state => state.status);
  const error = useSelector(state => state.data);
  const data = useSelector(state => state.trims);
  const payment_link = useSelector((state) => state.payment_link);

  const optionsArray = useSelector(state => state.options);
  const [trim, setTrim] = useState({});
  const [updated, setUpdated] = useState(false);
  const [select_Car, setSelect_Cart] = useState(1)
  const [select_Car_text, setSelect_Cart_text] = useState(0)

  const [borderRadius,setBorder] = useState('14px')
  const [Rowing,setRowing] = useState(false)
  const [fontTitl,setFont] = useState({
    titlesub:"0.8em",
    titleHome:'20px'
  })


  const [checkoutData, setCheckoutData] = useState({
    mileage: "",
    address: "",
    color: "",
    purpose_of_use: "",
    warranty: "",
    origin: "",
    maintenance_history: "",
    certified: "",
    accident: "",
    plato_no: "",
    ct_score: "",
    promo_code_id: "",
  });

  const [formData, setFormData] = useState({
    cart_id: '4244b9fd-c7e9-4f16-8d3c-4fe7bf6c48ca',
    cart_description: 'testing order 123',
    cart_currency: 'SAR',
    cart_amount: 46.17,
    callback: 'http://localhost:3000/',
    return: 'http://localhost:3000/',
  });

    useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      if(window.innerWidth  < 970){
        setRowing(true)
      }else{
        setRowing(false)
      }


    };
    window.addEventListener('resize', handleResize);
    // swithcing()
    return () => {
      window.removeEventListener('resize', handleResize);
    };
    
  }, [window.innerWidth]);





  const handleChange = (key, value) => {
    console.log(value)
    setCheckoutData({
      ...checkoutData,
      [key]: value
    })
  }

  

  const handlePaymentChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handlePayment = async (e) => {

    dispatch(paymentUrl(21,'https://fwatiry.online/','1'));

    console.log(payment_link);

    // if(payment_link){
    // window.location.href =payment_link;

    // }
    // history.push(payment_link);


    // e.preventDefault();

    // try {
    //   const response = await fetch('https://test.paytabs.sa/payment/request', {
    //     method: 'POST',
    //     headers: {
    //       'Authorization': 'SGJNG9J2RJ-J6TN6NMND6-DTJ9TL6GB6',
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   const result = await response.json();
    //   console.log(result);

    //   // Handle the payment result and update UI accordingly
    // } catch (error) {
    //   console.error('Error during payment:', error);
    // }
  };


  const array_data = [
    {
        id:1,
        name:`i7 xDrive 60  
        asdkfj;lkajdflkjsdf asdkfj;lkajdflkjsdf sdfsdfsadfsdfsadfsdafsdfsafsadf lkajdflkjsdf asdkfj;lkajdflkjsdf sdfsdfsadfsdfsadfsdafsdfsafsadf
        `,
        Oil: "90L",
        imag:imag_3,
        icons: bmw

    },
    {
        id:2,
        name:'Nissan GT-R',
        Oil: "80L",
        imag:imag_4,
        icons: bmw
    },
    {
        id:3,
        name:'Rolls-Royce',
        Oil: "70L",
        imag:imag_5,
        icons: bmw
    },
    {
        id:4,
        name:'Nissan GT-R',
        Oil: "80L",
        imag:imag_3,
        icons: bmw
    },
    {
        id:5,
        name:'i7 xDrive 60',
        Oil: "90L",
        imag:imag_3,
        icons: bmw

    },
    {
        id:6,
        name:'Nissan GT-R',
        Oil: "80L",
        imag:imag_4,
        icons: bmw
    },
    {
        id:7,
        name:'Rolls-Royce',
        Oil: "70L",
        imag:imag_5,
        icons: bmw
    },
    {
        id:8,
        name:'Nissan GT-R',
        Oil: "80L",
        imag:imag_3,
        icons: bmw
    },


]




const onClick_care = (id) =>{

  setSelect_Cart(id)
}


let slid;
if (window.innerWidth < 1030 || window.innerWidth   > 960){
    slid = 2
} 
if(window.innerWidth < 800 ){
  slid = 1.5
} 
if (window.innerWidth > 1000){
  slid= 4
}
let height;
if(window.innerWidth < 970 && window.innerWidth > 600){
  height = '45vh'
}else{
  height='28vh'
}


var settings = {
  infinite: true,
  speed: 600,
  slidesToShow: slid,
  slidesToScroll:slid,
  // autoplay:true,
  arrows: false,
};
const NaveEvltion = () =>{
  return(

        <Slider style={{
          // position: "relative",
          // right: '50%',
          // left: '-3%',
          // transition:"2s",
          // padding:'1px',
          animation:" 3s linear infinite;"
          }}  {...settings} >
        {/* <Flex
        overflowY="auto"
        maxW='100%'
        minH='30vh'
        > */}
    {array_data?.map(pic =>{

  return(
    <Flex 

        onClick={()=>{{
          onClick_care(pic.id)
        }}}
        m={10}
        
        minW={ window.innerWidth  > 970 ?'35%' : '80%'} 
        overflow={'hidden'}
        h={height} 
        background="#F6F7F9"
        style={{
          transition: "2s"
        }}
        // _hover={{border:""}}
        border={select_Car === pic.id ? "solid 2px #2D3291" : "2px #fff" }
        borderRadius={borderRadius}      
        flexDirection='column'
        justifyContent="space-between"
        // pb={10}
        >
            <Flex 
            flexDir='row'
            p={20}
            justifyContent="space-between"
            >
                <Flex
                className="drow_car"
                onClick={()=>{
                  select_Car_text !== pic.id && pic.name.length > 11?
                  setSelect_Cart_text(pic.id)
                  :
                  setSelect_Cart_text(0)
                  // null
                }}
                flexDir='column'
                >
                <Text

                    fontSize='1.2em'
                    fontWeight='bold'
                    >{pic.name.substring(0,14)} {pic.name.length > 11 ? 

                    <Icon onClick={()=>{
                    pic.name.length > 11?
                    setSelect_Cart_text(pic.id)
                    :
                    setSelect_Cart_text(0)
                    
                    }} as={FiMoreHorizontal} />
                    
                    : null}</Text>


               {pic.name.length > 18 ? 
               
               <Text
                  className= "name_drow"
                style={{
                  width:'12em',
                  overflow:'auto',
                  wordBreak: "break-all",
                  whiteSpace: "normal",
                  }}
                  zIndex={2}
                  // display={select_Car_text === pic.id?'flex':'none'}
                  backgroundColor='#fff'
                  position='absolute'
                  // top={0}
                  fontSize='1em'
                  p={15}
                  color='#2D3291'
                  borderRadius={borderRadius}
                  opacity='80%'
                  fontWeight='bold'
                  >{pic.name}</Text>:null}

                    <Text
                    color="var(--Secondary-300, #90A3BF)"
                    >7 Series</Text>
                </Flex>
                <img width='15%' height='50%' src={pic.icons}/>
                </Flex>
        
            <Flex
            m={10}
            justify='center'
            borderRadius={borderRadius}            >
            <Avatar borderRadius={borderRadius}w='100%' my={2} src={pic.imag}/>
            </Flex>
      
        <Flex   animation=" 3s linear 1s infinite running slidein" justifyContent="center" >
        <Button
        // className={select_Car === pic.id ? "buttonamait": null}
            w='90%'
            h="2.4em"
            color={select_Car === pic.id ?'#fff': '#2D3291'}
            // mb={25}
            animation={select_Car === pic.id ?"all 3s linear infinite":null}
            backgroundColor={select_Car === pic.id ?'#2D3291' : '#fff'}
            mt={15}
            border='solid 2px #2D3291'
            // p={3}
            fontWeight={700}
            borderWidth={2}
            borderRadius='0.3em'           // bgColor={value == 1 ? 'gray.600' : 'gray.400'}
            // onClick={() => changeValue("#B57295")}
        >
            StartNow
        </Button>
        </Flex>

    </Flex>
        )})}
 </Slider> 
    //  </Flex>
  )
}







  const submitHandler = async () => {
    checkoutData.manufacturer_id = manufacturer;
    checkoutData.model_id = model;
    checkoutData.year_id = year;
    checkoutData.trim_id = trim?.id;
    await dispatch(checkout(checkoutData));

    setUpdated(true);
    if (status === "succeeded" && error?.success) {
      console.log("Success");
      toast.success("Submitted successfully");
    } else if (status === "succeeded" && !error.success && error?.errors) {
      console.log(status);
      let message = Object.values(error?.errors)[0][0];
      toast.error(message);
    }
    await dispatch(paymentUrl(21,'https://fwatiry.online/','1'));
    if(payment_link && (status === "succeeded" && error?.success)){
      console.log(payment_link);
      window.location.href =payment_link;
  
      }


  }

  useEffect(() => {
    dispatch(fetchTrims({ manufacturer, model, year }));
    dispatch(fetchOptions());
  }, [dispatch]);

  // console.log(status, error)

  // useEffect(() => {
  //   if (status === "succeeded" && error?.message === "ok") {
  //     toast.success("Submitted successfully");
  //   }
  //   else if (status === "failed") {
  //     let message = Object.values(error?.errors)[0][0];
  //     toast.error(message);
  //   }

  //   return () => {

  //   }
  // }, [updated])






  const array_w =  [{id:1,name:"manufacturer"} 
                ,{id:2,name:"car_trust"},
                {id:3,name: "others"}, {id:1,name:"no"}]
  const Svg = (p: JSX.IntrinsicElements['svg']) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 10"
      focusable="false"
      role="presentation"
      {...p}
    />
  );

  const DropdownIndicator = () => (
    <div css={{ color: '#00579F', height: 24, width: 32 }}>
      <Svg style={{border:"2px #000"}}>
    <path d="M12.9188 0H6.68877H1.07877C0.118772 0 -0.361228 1.16 0.318772 1.84L5.49877 7.02C6.32877 7.85 7.67877 7.85 8.50877 7.02L10.4788 5.05L13.6888 1.84C14.3588 1.16 13.8788 0 12.9188 0Z" fill="#90A3BF"/>
      </Svg>
    </div>
  );

  const Stayle_selct={
    control: (provided) => ({
      ...provided,
      border: 'none',
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
    icon:(provid) =>({
     ...provid,
     border:'none', 
     background:'#000'
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
      maxHeight: "300px",
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










  return (
    <>
      <ToastContainer />
      <TopNavbar />
      {/* borderRadius:{borderRadius}/}
      {/* /////////////// */}
      <section style={{ marginTop:'3%', background: "#F6F7F9" }} className="bg-light py-5">
        <div class="container" 
        style={{ marginTop: "40px", }}
        >
          <div class="row">

            <div class="col-xl-8 col-lg-8 mb-4 ">
              <div className="card shadow-0 " style={{border:'none',borderRadius:borderRadius}}>
                <div className={window.innerWidth > 1000 ?"p-4" : 'p-sm'}>
                  
                  
                  
                  
                  <Flex
                  w='100%'
                  justifyContent='space-between'
                  align='center'
                  // border="solid 1px #000"
                  flexDir='row'
                  // m={11}
                  // ml={21}
                  >
                  <Flex
                  flexDir='column'
                  m={11}
                  ml={21}
                  >
                  <Text 
                  fontFamily='Plus Jakarta Sans'
                  fontWeight={700}
                  fontStyle='normal'
                  fontSize={fontTitl.titleHome} >Car Trims</Text>
                  <Text 
                  fontSize={fontTitl.titlesub}
                  color="var(--Secondary-300, #90A3BF)"
                  >Please select your car trim</Text>
                  </Flex>
                  <Text
                  m={10}
                  color='var(--Secondary-300, #90A3BF)'
                  fontSize='14px'
                  >{array_data.length} trims</Text>
                  </Flex>




                  <NaveEvltion />

                  {/* {
                    status === "loading" ?
                      <Loading />
                      : */}
                      {/* <CarSelectWrapper>
                        <CarSelect trims={data?.trims} onSelect={(val) => setTrim(val)} />
                      </CarSelectWrapper> */}
                  {/* } */}
                  {/* <hr class="my-4" /> */}
                </div>
              </div>


              <div className="card shadow-0 "  style={{border:'none',borderRadius:borderRadius, marginTop: "30px" }}>
                <div style={{padding:'1.7rem ', paddingLeft:'2rem'}} >
                  <Flex flexDir="column" className="mb-4">
                  <h5 className="card-title"  style={{fontWeight:700 , fontSize:fontTitl.titleHome}}>Evaluation Details</h5>
                  <Text fontSize={fontTitl.titlesub} color='var(--Secondary-300, #90A3BF)'>Please select your car evaluation data</Text>
                  </Flex>
                  <div style={{  borderRadius:borderRadius, width: "100%", background: "#F6F7F9", padding: "4%" }}>
                    <div class={!Rowing? "row": null}>

                      <div class="col-12 mb-3">
                        <p class="mb-3" style={{fontWeight:700}}>Mileage KM</p>
                        <div class="form-outline">
                          <input 
                          style={{height:'3em'}}
                          type="text" id="typeText" placeholder="Mileage KM" class="form-control" onChange={(e) => handleChange("mileage", e.target.value)} />
                        </div>
                      </div>
                      <div class={!Rowing ? "col-6 mb-3" :'mb-3'}>
                        <p class="mb-3" style={{fontWeight:700}}>Car Color</p>
                        <div class="form-outline">
                      <Select 
                      placeholder="Select a car Color"
                      components={{ DropdownIndicator, null: null }}
                      className="select-image"
                      isSearchable={false}
                      onChange={(e) => handleChange("color", e.id)}
                      // value={}
                      options={
                        optionsArray?.colors?.map((manufacturer, index) => manufacturer)
                      }
                      formatOptionLabel={country => (
                        <div key={country.id} className="country-option">
                          <span>{country.title}</span>
                          <span style={{
                            width:"2em",
                            height:'2em',
                            borderRadius:'20%',
                            boxShadow:'0 4px 10px rgba(0, 0, 0, 0.07)',
                            backgroundColor:country.color_code,
                            color:country.color_code,
                            }}>...</span>
                        </div>
                      )
                    }
                    styles={Stayle_selct}
                  />
                        </div>
                      </div>


                      {/* <div class="col-6 mb-3"> */}
                      <div class={!Rowing ? "col-6 mb-3" :'mb-3'}>
                        <p class="mb-3" style={{fontWeight:700}}>Purpose of use</p>
                        <div class="form-outline">

                        <Select 
                      className="select-image"
                      placeholder="Select purpose of use"
                      components={{ DropdownIndicator, null: null }}
                      isSearchable={false}
                      
                      onChange={(e) => handleChange("purpose_of_use", e.id)}
                      // value={}
                      options={
                        optionsArray?.purpose_of_use?.map((opt, index) => opt)
                      }
                      formatOptionLabel={country => (
                        <div key={country.id} className="country-option">
                          <span>{country.title}</span>
                        
                        </div>
                      )
                    }
                    styles={Stayle_selct}
                  />
                        </div>
                      </div>
                      {/* <div class="col-6 mb-3"> */}
                      <div class={!Rowing ? "col-6 mb-3" :'mb-3'}>
                        <p class="mb-3" style={{fontWeight:700}}>Origins</p>
                        <div class="form-outline">
                        <Select 
                      className="select-image"
                      components={{ DropdownIndicator, null: null }}
                      placeholder="Select origins"
                      // isSearchable={false}
                      onChange={(e) => handleChange("origin", e.id)}
                      // value={}
                      options={
                        optionsArray?.origins?.map((opt) => opt)
                      }
                      formatOptionLabel={(oopt) => (
                        <div key={oopt.id} className="oopt-option">
                          <span>{oopt.title}</span>
                        </div>
                      )
                    }
                    styles={Stayle_selct}
                  />
                        </div>
                      </div>

                      {/* <div class="col-6 mb-3"> */}
                      <div class={!Rowing ? "col-6 mb-3" :'mb-3'}>
                        <p class="mb-3" style={{fontWeight:700}}>Waranty provider</p>
                        <div class="form-outline">

                        <Select 
                      className="select-image"
                      components={{ DropdownIndicator, null: null }}
                      placeholder="Select waranty provider"
                      // isSearchable={false}
                      onChange={(e) => handleChange("warranty", e.id)}
                      // value={}
                      options={
                        array_w?.map((opt) => opt)
                      }
                      formatOptionLabel={(oopt) => (
                        <div key={oopt.id} className="oopt-option">
                          <span>{oopt.name}</span>
                        
                        </div>
                      )
                    }
                    styles={Stayle_selct}
                  />
                        </div>
                      </div>

                      {/* <div class="col-6 mb-3"> */}
                      <div class={!Rowing ? "col-6 mb-3" :'mb-3'}>
                        <p class="mb-3" style={{fontWeight:700}}>Maintenance History</p>
                        <div class="form-outline">
                        <Select 
                      className="select-image"
                      components={{ DropdownIndicator, null: null }}
                      placeholder="Select maintenance History"
                      // isSearchable={false}
                      onChange={(e) => handleChange("maintenance_history", e.name)}
                      // value={}
                      options={
                        [{id:1 ,name:"available"}, {id:2,name:"not_available"}]?.map((opt) => opt)
                      }
                      formatOptionLabel={(oopt) => (
                        <div key={oopt.id} className="oopt-option">
                          <span>{oopt.name}</span>
                        
                        </div>
                      )
                    }
                    styles={Stayle_selct}
                  />
          
                        </div>
                      </div>

                      {/* <div class="col-6 mb-3"> */}
                      <div class={!Rowing ? "col-6 mb-3" :'mb-3'}>
                        <p class="mb-3" style={{fontWeight:700}}>Accidents</p>
                        <div class="form-outline">
                        <Select 
                      className="select-image"
                      components={{ DropdownIndicator, null: null }}
                      placeholder="Select accidents"
                      // isSearchable={false}
                      onChange={(e) => handleChange("accident", e.name)}
                      // value={}
                      options={
                        [{id:1 ,name:"Low"}, {id:2,name:"Medium"},{id:3 ,name:"Major"}, {id:4,name:"No"}]?.map((opt) => opt)
                      }
                      formatOptionLabel={(oopt) => (
                        <div key={oopt.id} className="oopt-option">
                          <span>{oopt.name}</span>
                        
                        </div>
                      )
                    }
                    styles={Stayle_selct}
                  />
                        </div>
                      </div>

                      {/* <div class="col-6 mb-3"> */}
                      <div class={!Rowing ? "col-6 mb-3" :'mb-3'}>
                        <p class="mb-3" style={{fontWeight:700}}>Certified</p>
                        <div class="form-outline">
                        <Select 
                      className="select-image"
                      components={{ DropdownIndicator, null: null }}
                      placeholder="Select certified"
                      // isSearchable={false}
                      onChange={(e) => handleChange("certified", e.name)}
                      // value={}
                      options={
                        [{id:1,name:"yes"}, {id:2,name:"no"}]?.map((opt) => opt)
                      }
                      formatOptionLabel={(oopt) => (
                        <div key={oopt.id} className="oopt-option">
                          <span>{oopt.name}</span>
                        
                        </div>
                      )
                    }
                    styles={Stayle_selct}
                  />
                        </div>
                      </div>




                    </div>

                    {/* <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">Keep me up to date on news</label>
            </div> */}

                    {/* <hr class="my-4" /> */}

                    {/* <h5 class="card-title mb-3">Shipping info</h5> */}

                    <Flex  w='100%' 
                    // border='solid 2px #000'
                     flexDir='column' class="row mb-3">

                      <Flex   
                      flexDir={!Rowing ? 'row' : 'column'}
                      // border='solid 2px #000'
                        w='100%'>
                          <Flex  
                          // border='solid 2px #000'
                            w='100%' flexDir='column'>
                          <div className="con-lg-12" style={{ margin: "20px" }}>
                            <p style={{fontSize:'16px',fontWeight:700}}>Maintainance history </p>
                          </div>
                          <Flex justifyContent='space-around' >
                              <div className="col-lg-6 responsev-m">
                                <input class="form-check-input" type="radio" name="flexRadioDefault8" id="flexRadioDefault8" />
                                <label class="form-check-label" style={{marginLeft:"5px"}} for="flexRadioDefault8">
                                  Available 
                                </label>
                              </div>

                              <div className="col-lg-6 responsev-m">
                                <input class="form-check-input" type="radio" name="flexRadioDefault8" id="flexRadioDefault8" checked />
                                <label class="form-check-label" style={{marginLeft:"5px"}} for="flexRadioDefault8">
                                  Not  Available
                                  {/* <small class="text-muted">3-4 days via Fedex </small> */}
                                </label>
                              </div>
                            </Flex>
                
                            </Flex>

                          <Flex  
                          // border='solid 2px #000'
                            w='100%'flexDir='column'>
                          <div className="con-lg-12" style={{ margin: "20px" }}>
                            <p style={{fontSize:'16px',fontWeight:700}}>Is it Inspected </p>
                          </div>
                          <Flex justifyContent='space-around' >
                              <div className="col-lg-6 responsev-m">
                                <input class="form-check-input" type="radio" name="flexRadioDefault8" id="flexRadioDefault8" />
                                <label class="form-check-label" style={{marginLeft:"5px"}} for="flexRadioDefault8">
                                  Yes 
                                </label>
                              </div>

                              <div className="col-lg-6 responsev-m">
                                <input class="form-check-input" type="radio" name="flexRadioDefault8" id="flexRadioDefault8" checked />
                                <label class="form-check-label" style={{marginLeft:"5px"}} for="flexRadioDefault8">
                                  No
                                  {/* <small class="text-muted">3-4 days via Fedex </small> */}
                                </label>
                              </div>
                            </Flex>
                
                            </Flex>
                            </Flex>
{/* *********************************** */}
                      <Flex 
                      flexDir={!Rowing ? 'row' : 'column'}
                      // border='solid 2px #000'
                        w='100%'>
                          <Flex
                          mt={25}
                          // border='solid 2px #000'
                            w='100%' flexDir='column'>
                          <div className="con-lg-12" style={{ margin: "20px" }}>
                            <p style={{fontSize:'16px',fontWeight:700}}>origin </p>
                          </div>
                          <Flex justifyContent='space-around' >
                              <div className="col-lg-6 responsev-m">
                                <input class="form-check-input" type="radio" name="flexRadioDefault8" id="flexRadioDefault8" />
                                <label class="form-check-label" style={{marginLeft:"5px"}} for="flexRadioDefault8">
                                  KSA/GCC Import  
                                </label>
                              </div>

                              <div className="col-lg-6 responsev-m">
                                <input class="form-check-input" type="radio" name="flexRadioDefault8" id="flexRadioDefault8" checked />
                                <label class="form-check-label" style={{marginLeft:"5px"}} for="flexRadioDefault8">
                                  other Import 
                                  {/* <small class="text-muted">3-4 days via Fedex </small> */}
                                </label>
                              </div>
                            </Flex>
                            </Flex>

                          <Flex  
                          mt={25}
                          // border='solid 2px #000'
                            w='100%'flexDir='column'>
                          <div className="con-lg-12" style={{ margin: "20px" }}>
                            <p style={{fontSize:'16px',fontWeight:700}}>Is it Modified </p>
                          </div>
                          <Flex  justifyContent='space-around' >
                              <div className="col-lg-6 responsev-m">
                                <input class="form-check-input" type="radio" name="flexRadioDefault8" id="flexRadioDefault8" />
                                <label class="form-check-label" style={{marginLeft:"5px"}} for="flexRadioDefault8">
                                  Yes 
                                </label>
                              </div>

                              <div className="col-lg-6 responsev-m">
                                <input class="form-check-input" type="radio" name="flexRadioDefault8" id="flexRadioDefault8" checked />
                                <label class="form-check-label" style={{marginLeft:"5px"}} for="flexRadioDefault8">
                                  No
                                  {/* <small class="text-muted">3-4 days via Fedex </small> */}
                                </label>
                              </div>
                            </Flex>
                
                            </Flex>
                            </Flex>

                    </Flex>
                  </div>
                </div>
              </div>
            </div>


            <Wrapper style={{borderRadius:borderRadius,  paddingLeft:'2%',paddingRight:'2%'}} 
            className= " col-xl-4 col-lg-4   justify-content-center" >
              <div className="row  mt-2">
                <ColumnWrapper className="col-lg-12 mt-4">
                  <h3 style={{fontSize:fontTitl.titleHome,fontWeight:700}}>Service Summary</h3>
                  <p style={{
                    width:'90%',
                    color:'var(--Secondary-300, #90A3BF)',
                    fontSize:fontTitl.titlesub}}>Prices may change depending on the length of the rental and the price of your rental car.</p>
                </ColumnWrapper>

                <ColumnWrapper className="col-4">
                  <img style={{ width: "130px" }} src={trim?.trim_image} alt="" />
                </ColumnWrapper>

                <ColumnWrapper className={Rowing ? "col-6" : null}>
                  <p>{trim?.name}</p>
                </ColumnWrapper>

              <Flex 
              justifyContent="space-between"
              >
                <Flex
                w='30%'
                h='7em'
                borderRadius={borderRadius}               
                align='center'
                // justifyContent='center'
                backgroundColor='#F6F7F9'
                >
                <Avatar
                margin="auto"
                w='90%'  src={imag_3}/>
                </Flex>
                <Flex
                w='40%'
                // p={20}
                align='center'
                justify='center'
                flexDir="column"
                >
                  <Text
                    // fontFamily='Plus Jakarta Sans'
                    fontWeight={700}
                    fontStyle='normal'
                    // fontSize='2em'
                    fontSize='150%'
                  >
                  i7 xDrive 60
                  </Text>
                  <Flex 
                  w='100%'
                  // fontFamily='Plus Jakarta Sans'
                  fontWeight={700}
                  fontStyle='normal'
                  fontSize='1em'
                  // border="solid 5px  #000"
                  justifyContent='space-around'
                  >
                    <Text>
                    BMW
                    </Text>
                    <Text>
                    7 Series
                    </Text>
                  </Flex>
                </Flex>
                <Flex 
                w='25%'
                // mr={20}
                justify="flex-end"
                align='center'
                className="col-2">
                  <img width={window.innerWidth < 960? "30%" :  '30%'}style={{ maxHeight:'30%'}} src={bmw} alt="" />
                </Flex>
                </Flex>
              

                <ColumnWrapper  style={{ fontFamily:"Plus Jakarta Sans"}} className="col-lg-12">
                  <hr style={{color:'var(--Secondary-300, #90A3BF)  '}} />
                  <h3 style={{fontSize:fontTitl.titleHome,fontWeight:700}}>Payment Method</h3>
                  <p style={{fontSize:fontTitl.titlesub,color:'var(--Secondary-300, #90A3BF)'}}>Please enter your payment method</p>
                </ColumnWrapper>
              </div>
              <div
              className="mt-5 mt-lg-4">
                <PaymentMethodWrapper className="d-flex justify-content-between">
                  <Flex w='25%' justifyContent='space-around'  className="mt-2 ">
                    <input class="form-check-input" type="radio" name="payment_method"onChange={handlePaymentChange} id="payment_method" />
                    <label style={{fontWeight:700}} class="form-check-label"  for="payment_method">
                      Apple Pay 
                    </label>
                  </Flex>
                  <Avatar className="m-3" w='14%' h='10%' src={applepay} alt="" />
                </PaymentMethodWrapper>
                <PaymentMethodWrapper className="d-flex justify-content-between">
                  <Flex w='27%' justifyContent='space-around'  className="mt-2 ">
                    <input class="form-check-input" type="radio" name="payment_method"onChange={handlePaymentChange} id="payment_method" />
                    <label style={{fontWeight:700}} class="form-check-label"  for="payment_method">
                    Credit Card
                    </label>
                  </Flex>
                  <Flex m={10} justifyContent="flex-start">
                  <span><Avatar  src={visa} alt="" /></span>
                  <Avatar  src={mastercard} alt="" />
                  </Flex>
                </PaymentMethodWrapper>

           
           
           
           
           
                <PaymentMethodWrapper className="d-flex justify-content-between p-1">
                  <Flex w='23%' h={"10%"}  justifyContent='space-around'  className="mt-2 ">
                    <input class="form-check-input" type="radio" name="payment_method"onChange={handlePaymentChange} id="payment_method" />
                    <label  class="form-check-label"  style={{ fontWeight:700, marginBottom:'1%'}} for="payment_method">
                    Pay later
                    </label>
                  </Flex>
                  <Avatar  w='10%' h='10%' src={cash} alt="" />
                </PaymentMethodWrapper>
      
                <hr  style={{marginTop:'8%',  background:'var(--Secondary-300, #90A3BF)'}}/> 

              </div>

              <div class=" mt-5 mt-lg-4">
                <div class="d-flex justify-content-between">
                  <p class="mb-3" style={{fontSize:fontTitl.titlesub,color:'var(--Secondary-300, #90A3BF)'}}>Subtotal</p>
                  <p class="mb-3" style={{fontSize:fontTitl.titlesub,fontWeight:700}}>SAR 195.90</p>
                </div>
                <div class="d-flex justify-content-between">
                  <p class="mb-3" style={{fontSize:fontTitl.titlesub,color:'var(--Secondary-300, #90A3BF)'}}>Tax:</p>
                  <p class="mb-3" style={{fontSize:fontTitl.titlesub,fontWeight:700}}>- SAR 60.00</p>
                </div>
               




                <Flex 
                h='56px'
                // border="solid 1px #000"
                overflow='hidden'
                borderRadius='10px'
                justifyContent='space-between'  style={{  background: "#F6F7F9" }}>
                  <input type="text" style={{ marginLeft:'10%', border:'none',borderColor:"#F6F7F9" ,background:'#F6F7F9',fontSize:"10px"}} name="" placeholder="Apply promo code " />
                  <Button 
                  style={{fontSize:"12px", margin:'2%',fontWeight:600, background: "#F6F7F9" }}
                  border="none"
                  >Apply now</Button>
                </Flex>

                <div style={{marginTop:'10%'}} class="d-flex justify-content-between">
                  <Flex flexDir='column'>
                  <p class="mb-2">Total price:</p>
                    <Text h='30%' w='97%' overflow='hidden' color="var(--Secondary-300, #90A3BF)" fontSize={fontTitl.titlesub}>Overall price and includes rental discount</Text>
                  </Flex>
                
                  <p class="mb-2 fw-bold" style={{fontSize:'28px'}}>$149.90</p>
                </div>
                <Flex justify='center' m={10}>
                                  {
                  status === "loading" ?
                    <Loading />
                    :
                    <Button w='100%'   onClick={submitHandler}>
                      Pay now

                    </Button>
                }

                </Flex>

              </div>



            </Wrapper>
          </div>
        </div>
      </section>

    </>
  );



}


const Wrapper = styled.div`
   background:#FFF


`;

const CarSelectWrapper = styled.div`
   background:#FFF;
  //  height:250px;
`;

const PaymentMethodWrapper = styled.div`
margin-top:10px;
background:#F6F7F9;
border-radius: 10px;
width:100%

`;


const ColumnWrapper = styled.div`

margin-top:20px;
`;

const PayButton = styled.button`
 width: 350px;
// height: 40px;
padding: 0px 20px;
justify-content: center;
align-items: center;
// gap: 8px;
// flex-shrink: 0;
border-radius: 8px;
background: #2D3291;
color:white;
text-align: center;

 
`;





