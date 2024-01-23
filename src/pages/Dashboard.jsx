import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";
import RollerIcon from "..//assets/img/logo.png";
import imag_1 from "../assets/img/9579eff385e6525bfc9594ee8bd5c695.png";
import imag_2 from "../assets/img/image-1702562405-image-1702453944-WhatsAppImage2023-12-12at6.17 1 (1).png";
import imag_3 from "../assets/img/car_select_1.png";
import imag_4 from "../assets/img/car_select_2.png";
import imag_5 from "../assets/img/car_select_3.png";
import iScroll from 'iscroll';
import {
  checkout,
  fetchOptions,
  fetchTrims,
} from "../redux/features/dataSlice";
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
} from "react-icons/fi";
import ClientReviews from "../components/Elements/ClientReviews";
import TopNavbarDashbord from "../components/Nav/TopNavbarDashbord";

// import MyChart from "../components/MyChart";
import Slider from "react-slick";


// Sections

export default function Dashboard() {
  const [display, changeDisplay] = useState("hide");
  const [value, changeValue] = useState("#F2B300");
  const [Vaule_responsive, setResponsive] = useState( window.innerWidth  < 970 ? true : false);
  const [REletiv, setRetiv] = useState( window.innerWidth  < 970 ? 'absolute' :'relative');
  const [Dark, setDark] = useState(false);


  const [width, setWidth] = useState(window.innerWidth);
  const [width_slid, setWidth_slid] = useState(4);
  const [height, setHeight] = useState(0);


  // useEffect(() => {
  //   setHeight(window.innerHeight);
  //   const handleResize = () => {
  //     setWidth(window.innerWidth);
  //     setWidth_slid(window.innerWidth < 970 ? 1 :2)
  //     // if(window.innerWidth  < 970){
  //     //   setResponsive(true)
  //     //   setRetiv('absolute')
  //     // }else{
  //     //   setResponsive(false)
  //     //   setRetiv('relative')}


  //   };
  //   window.addEventListener('resize', handleResize);
  //   // swithcing()
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
    
  // }, []);


// const swithcing = () =>{
//    const darking=  document.querySelector('.css-1g7aboa');
//    if(darking !== null && darking !== undefined) {
//     darking.stayle.background = '#000000'
//    }
     
 
// }
const array_data = [
    {
        id:1,
        name:'Koenigsegg',
        Oil: "90L",
        imag:imag_3
    },
    {
        id:2,
        name:'Nissan GT-R',
        Oil: "80L",
        imag:imag_4
    },
    {
        id:3,
        name:'Rolls-Royce',
        Oil: "70L",
        imag:imag_5
    },
    {
        id:1,
        name:'Nissan GT-R',
        Oil: "80L",
        imag:imag_3
    },
]









// useEffect(()=>{loaded()},[])



  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: width < 970 ? 1 : 2,
    // slidesToShow: 2,
    slidesToScroll: width < 970 ? 1 : 2,
    autoplay:true,
    arrows: false,
    
    // centerPadding: 100
  };
  // const loaded = ()=>{
  //   const wrapper = document.querySelector('#wrapper')
  //   new iScroll(wrapper, { mouseWheel: true })
  // }

  return (
    <div
    style={{
      backgroundColor: '#333333',
      width:'100%',display:"flex",flexDirection:'column',overflow:'hidden',height:`${window.innerHeight}.px`}}
    >


<Flex
m={30}
// pb={100}
    >

<TopNavbarDashbord kind={Dark} />
</Flex>



    <Flex
      w="100%"
    // mt={20}
    //   h={[null, null, "1000vh"]}

    backgroundColor={Dark? '#333333' : '#fff'}
      flexDir={["column", "column", "row"]}
      overflow="hidden"
    //   maxW="2000px"
    // maxH="130vh"
    >
      {/* *column 1 */}

  {Vaule_responsive === false ?

          <Flex
          id="wrapper"
          position={REletiv === 'absolute'?"fixed" :REletiv}
          zIndex={2}

            // right={"20px"}
            // w="90%"
            h={`${window.innerHeight}.px`}
            // position="fixed"
            w={REletiv === "relative"  ? "20%" : '60%'}
            overflow={REletiv === "relative" ? "none": 'hidden'}
            overflowY={REletiv === "relative" ? "none": 'auto'}
            maxH='100vh'
            flexDir="column"
            alignItems="center"
            // border="solid 3px #fff"
            p={20}
            pt={40}
            pb={40}
            // backgroundColor="#020202"
            // backgroundColor="#FFFFFF"
            color="#fff">
    
    
            <Flex
            position='fixed'
            zIndex={0}
            mt={100}
            w={"100%"}
            right="-60%"
            h='2em'
            >
              {window.innerWidth  < 970 ?
                  <Button 
                  // position='fixed'
                  // top={0}
                  p={"2%"}
                  // right={"30.5%"}
                
                  onClick={()=>{
                      setResponsive(true)
                      setRetiv("relative")
                  }}
                  w={"8%"}
                  backgroundColor='#2D3291'
                  border='none' borderRadius='0 20px 20px 0' color="#000" >
                    <Icon 
                    color='#fff'
                    as={FiChevronsRight}/>     
                  </Button>
              :
              null    
              }
            </Flex>
            <Flex     
              flexDir="column"
            w='117%'
            h={`${window.innerHeight}.px `}
            border= '0 black' 
            p={"10%"} 
            mb={-20}
            mt={-15}
            
            //   border="solid 2px #333333"
              backgroundColor={Dark? '#333333' : '#fff'}
              justifyContent="space-between"
              alignItems="center"
            >
              <Flex flexDir="column" as="nav">
                <Flex flexDir="column" 
                // overflowY='auto'
                // maxH='100vh'
                align={['center','center','center',"flex-start","flex-start"]} 
                justifyContent='space-around'>
                  <Flex>
                    <Text
                    color=" rgba(148, 167, 203, 0.40)"
                    fontSize='12px'
                    m={10}
                    mb={30}
                    >MAIN MENU</Text>
                  </Flex>
                  <Flex p={12} className="sidebar-items">
                    <Link
                      display={[
                        "center",
                        "center",
                        "center",
                        "flex-start",
                        "flex-start",
                      ]} 
                    >
                      <Icon color={Dark ? "#fff": '#000'}
                        display={["flex", "flex", "none", "flex", "flex"]}
                        as={FiHome}
                        fontSize="2xl"
                        className="active-icon"
                      />
                    </Link>
                    <Link _hover={{ 
                color:'#000',
                textDecor: "none" }}>
                      <Text fontSize="1em" 
                      color={Dark ? "#fff": null}
                    //   className="active"
                      >Dashboard</Text>
                    </Link>
                  </Flex>
    
                  <Flex  p={12} className="sidebar-items">
                    <Link>
                      <Icon color={Dark ? "#fff": null} as={FiPieChart} fontSize="2xl" />
                    </Link>
                    <Link  _hover={{ 
                color:'#000',
                textDecor: "none" }}>
                      <Text  color={Dark ? "#fff": null}> My Vehicles</Text>
                    </Link>
                  </Flex>
    
                  <Flex p={12} className="sidebar-items">
                    <Link>
                      <Icon color={Dark ? "#fff": null} as={FiDollarSign} fontSize="2xl" />
                    </Link>
                    <Link  _hover={{ 
                color:'#000',
                textDecor: "none" }}>
                      <Text color={Dark ? "#fff": null}>My Evaluation</Text>
                    </Link>
                  </Flex>
    
                  <Flex p={12} className="sidebar-items">
                    <Link >
                      <Icon color={Dark ? "#fff": null} as={FiBox} fontSize="2xl" />
                    </Link>
                    <Link  _hover={{ 
                color:'#000',
                textDecor: "none" }}>
                      <Text color={Dark ? "#fff": null}>My Warranties</Text>
                    </Link>
                  </Flex>
    
                  <Flex p={12} className="sidebar-items">
                    <Link>
                      <Icon color={Dark ? "#fff": null} as={FiBox} fontSize="2xl" />
                    </Link>
                    <Link  _hover={{ 
                color:'#000',
                textDecor: "none" }}>
                      <Text color={Dark ? "#fff": null} fontSize="1em">QR CodesHistory</Text>
                    </Link>
                  </Flex>
    
                  <Flex pl={12} pt={10}  className="sidebar-items">
                    <Link>
                      <Icon color={Dark ? "#fff": null} as={FiBox} fontSize="2xl" />
                    </Link>
                    <Link  _hover={{ 
                color:'#000',
                textDecor: "none" }}>
                      <Text color={Dark ? "#fff": null}>MyTransaction</Text>
                    </Link>
                  </Flex>
    
                  <Flex p={12} className="sidebar-items">
                    <Link>
                      <Icon color={Dark ? "#fff": null} as={FiBox} fontSize="2xl" />
                    </Link>
                    <Link  _hover={{ 
                color:'#000',
                textDecor: "none" }}>
                      <Text color={Dark ? "#fff": null}>Branches</Text>
                    </Link>
                  </Flex>
                      
                  <Flex>
                    <Text
                    color=" rgba(148, 167, 203, 0.40)"
                    m={10}
                    mb={30}
                    fontSize='12px'
                    >P R E F E R E N C E S</Text>
                  </Flex>



                  <Flex p={12} className="sidebar-items">
                    <Link>
                      <Icon color={Dark ? "#fff": null} as={FiBox} fontSize="2xl" />
                    </Link>
                    <Link  _hover={{ 
                color:'#000',
                textDecor: "none" }}>
                      <Text color={Dark ? "#fff": null}>ContactUs</Text>
                    </Link>
                  </Flex>
    
                  <Flex p={12} className="sidebar-items">
                    <Link>
                      <Icon color={Dark ? "#fff": null} as={FiBox} fontSize="2xl" />
                    </Link>
                    <Link  _hover={{ 
                color:'#000',
                textDecor: "none" }}>
                      <Text color={Dark ? "#fff": null}> Settings</Text>
                    </Link>
                  </Flex>
    
    
                  <Flex p={12} 
                  justifyContent='space-between'
                  className="sidebar-items_dark">
                    <Link 
                    
                    display="flex" flexDir="row">
                      {/* <Icon color={Dark ? "#fff": null} as={FiBox} fontSize="2xl" /> */}
                      <Text color={Dark ? "#fff": null}fontSize='0.9em'm={5}>Dark Mode</Text>
                    </Link>
                        <Flex
                        w='50%'
                        h='2em'
                        p={3}
                        justifyContent='space-around'
                        borderRadius='10em' backgroundColor="#F6F7F9">
                        <Link  
                        align="center"
                        width='50%'
                        color={Dark ?  "#2D3291" :  "#F6F7F9"}
                        onClick={()=>setDark(false)}
                         borderRadius='10em' backgroundColor={Dark ?   "#F6F7F9" : "#2D3291" }>
                        <Icon as={FiSun} fontSize="2xl" />
                        </Link>
                        <Link
                            align='center'
                             width='50%'
                             h="1.6em"
                             onClick={()=>setDark(true)}
                             borderRadius='10em' backgroundColor={Dark ?  "#2D3291" :  "#F6F7F9"}
                        >
                        <Icon as={FiBox} fontSize="2xl" />
                        </Link>
                        </Flex>
                  </Flex>
    
                </Flex>             
                <li className="semiBold font15 pointer" style={window.innerWidth < 800 ?{display:"block", 
                alignSelf:'center',
                marginTop:'30%',
                marginBottom:'30%'
                
                }: {display:'none'}}>
                <div className=" dropdown-dashboard">
                 <Flex align='center' flexDir='column' className="nav-link ">
                  <Link  className=" active-icon-user-nav" href="#testimonials"> 
                                  <Avatar
                  src="avata-1.jpg"/>
                  </Link>
                  <Text style={{color: Dark ? "#fff" :'#000',margin:'10px'}}>user Name</Text>
                  </Flex>
               
                  </div>
                </li>
              </Flex>
    
            </Flex>
          </Flex>
:
<Flex
position='absolute'
zIndex={1}
mt={100}
w={"30%"}
h='2em'
>

    <Button 
    onClick={()=>{
        setResponsive(false)
        setRetiv("absolute")
    }}
    w={"30%"}

    backgroundColor='#2D3291'
    border='none' borderRadius='0 20px 20px 0' color="#000" >
      <Icon 
      color='#fff'
      as={FiChevronsRight}/>     
    </Button>
</Flex>
}





      {/* Column 2 */}
      <Flex
        p="3%"
        onClick={()=>{
          if (window.innerWidth < 960 )
          setResponsive(true)
          setRetiv("relative")

        }}
        // position='fixed'
        // top={0}
        // right={0}
        // left={0}
        flexDir="column"
        overflow='hidden'

        backgroundColor={Dark ? "#020202" :"#F6F7F9"}
        // minH="200vh"
        // height
        // h="130vh"
      >
        <Heading 
        h={"38%"}
        w={'97%'}
        // overflow={'hidden'}
        fontWeight="normal" mb={4}>
        

        <Slider style={{ height:'40%' ,margin:" auto" }} dots={true} {...settings}  >
        {/* <AvatarGroup flexDir='row'> */}
        <Avatar borderRadius='25px' m={2}  src={imag_2}/>
      
        <Avatar m={2}  borderRadius='25px'  src={imag_1}/> 
        <Avatar borderRadius='25px' m={2}  src={imag_2}/>
        <Avatar m={2}  borderRadius='25px'  src={imag_1}/> 
        <Avatar m={2}  borderRadius='25px'  src={imag_1}/> 

      {/* <Avatar m={5} borderRadius='25px' my={2} src={imag_1}/> 
      <Avatar borderRadius='25px' my={2} src={imag_2}/> */}
      {/* </AvatarGroup> */}
    </Slider>
        </Heading>



  
        {/* <MyChart /> */}

        <Flex justifyContent="space-between" m={20} mt={8}>
          <Flex justifyContent="space-between" align="flex-end">
            <Heading as="h2" fontSize='1.5em' size="sm" letterSpacing="tight">
            My Vehicles
            </Heading>
     
          </Flex>
          {/* <Heading as="h2" size="sm" letterSpacing="tight"> */}
          <Link color={"#3563E9"}  _hover={{ 
            color:Dark ?"#fff":'#000',
            textDecor: "none" }}>
                  <Text  fontSize="1.5em">view All</Text>
                </Link>
            {/* </Heading> */}
        </Flex>

      
        <Flex flexDir='row' flexWrap={width < 970 ?"wrap" :'nowrap'}justifyContent="space-around" mt={8}>
            {array_data?.map(pic =>{

           return(
            <Flex 
                w={ window.innerWidth  > 970 ?'25%' : '80%'} 
                h={width < 970 && width > 600? '51vh': '41vh'} 
                m={12}
                background="var(--Primary-0, #FFF)"
                // boxShadow="0 0.1px 3px #000"
                borderRadius="5%"
                flexDirection='column'
                justifyContent="space-between"
                pb={10}
                
                >
                    <Flex 
                    flexDir='row'
                    p={20}
                    justifyContent="space-between"
                    >
                        <Flex
                        flexDir='column'
                        >
                            <Text
                            fontSize='1em'
                            fontWeight='bold'
                            >{pic.name}</Text>
                            <Text
                            color="var(--Secondary-300, #90A3BF)"
                            >Sport</Text>
                        </Flex>
                        <Icon 
                        display={["flex", "flex", "none", "flex", "flex"]}
                        as={FiHeart}
                        fontSize="1.7em"
                        className="active-icon"/>
                        </Flex>
                
                    <Flex
                    overflow='hidden'
                    m={10}
                    // border="solid 5px #000"
                    justify='center'
                    borderRadius='25px'
                    >
                    <Avatar borderRadius='25px' w='100%' my={2} src={pic.imag}/>
                    </Flex>
            <Flex
            flexDir='column'
            >        
                <Flex
                ml={10}
                mr={10}
                // border="solid 2px #000 "
                justifyContent='space-around'
                >
                    <Flex>
                    <Icon
                        display={["flex", "flex", "none", "flex", "flex"]}
                        as={FiBatteryCharging}
                        fontSize="1em"
                        mr={9}
                        className="icon_car"/>
                    <Text fontSize='0.8em'>{pic.Oil}</Text>
                    </Flex>
                    <Flex>
                    <Icon
                        display={["flex", "flex", "none", "flex", "flex"]}
                        as={FiCrosshair}
                        mr={9}
                        fontSize="1em"
                        className="icon_car"/>
                    <Text fontSize='0.8em'>Manual</Text>
                    </Flex>
                    <Flex>
                    <Icon
                        display={["flex", "flex", "none", "flex", "flex"]}
                        as={FiUsers}
                        mr={8}
                        color='#90A3BF'
                        fontSize="1em"
                        className="icon_car"/>
                    <Text fontSize='0.8em'>People</Text>
                    </Flex>
                </Flex>
                <Flex justifyContent="center" mt={2}>
                <Button
                    w='90%'
                    h="2.8em"
                    color='#fff'
                    backgroundColor='#3563E9'
                    m={20}
                    // p={3}
                    borderWidth={1}
                    borderRadius="4px"
                    // bgColor={value == 1 ? 'gray.600' : 'gray.400'}
                    onClick={() => changeValue("#B57295")}
                >
                    StartNow
                </Button>
                </Flex>
            </Flex>
            </Flex>
                )})}
            
            </Flex>


        </Flex>

        </Flex>


        </div>
  );
}
