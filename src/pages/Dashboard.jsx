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
  const [Vaule_responsive, setResponsive] = useState(false);
  const [REletiv, setRetiv] = useState('relative');
  const [Dark, setDark] = useState(false);


  const [width, setWidth] = useState(window.innerWidth);
  const [width_slid, setWidth_slid] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setWidth_slid(window.innerWidth < 970 ? 1 :2)
      window.innerWidth  < 970?
        setResponsive(true)
        :
        setResponsive(false)
        setRetiv('relative')

    };
    window.addEventListener('resize', handleResize);
    // swithcing()
    return () => {
      window.removeEventListener('resize', handleResize);
    };
    
  }, [window.innerWidth]);


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













  var settings = {
    infinite: true,
    speed: 400,
    slidesToShow: width < 970 ? 1 : 2,
    // slidesToShow: 2,
    slidesToScroll: 1,
    autoplay:false,
    arrows: false,
    centerPadding: 100
  };

  return (
    <Flex
    h={[null, null, "1000vh"]}
    flexDir={["column", "column", "column"]}
    overflow="hidden"
    maxW="2000px"
    >


<Flex
m={30}
    >

<TopNavbarDashbord kind={Dark} />
</Flex>














    <Flex
      w="100%"
    // mt={20}
    //   h={[null, null, "1000vh"]}
      flexDir={["column", "column", "row"]}
      overflow="hidden"
    //   maxW="2000px"
    maxH="130vh"
    >
      {/* *column 1 */}
  
  {Vaule_responsive == false ?
      <Flex
      position={REletiv}
        zIndex={1}
        // right={"20px"}
        // w="90%"
        w={REletiv == "relative"  ? "20%" : '80%'}
        flexDir="column"
        alignItems="center"
        border="solid 3px #fff"
        p={20}
        pt={40}
        // backgroundColor="#020202"
        backgroundColor="#FFFFFF"
        color="#fff">


        <Flex
        position='absolute'
        zIndex={0}
        mt={100}
        w={"30%"}
        right="-30%"
        h='2em'
        >
{Vaule_responsive == false &&   window.innerWidth  < 970?
    <Button 
    onClick={()=>{
        setResponsive(true)
        setRetiv("relative")
    }}
    w={"40%"}
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
        mb={20}
        mt={-15}
        //   border="solid 2px #333333"
          backgroundColor={Dark? '#333333' : '#fff'}
          justifyContent="space-between"
          alignItems="center"
          h="130vh"
        >
          <Flex flexDir="column" as="nav">
         

            <Flex flexDir="column" 
            align={['center','center','center',"flex-start","flex-start"]} 
            justifyContent="center">
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
                  <Icon color={Dark ? "#fff": null}
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
                <Link>
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
                  <Icon color={Dark ? "#fff": null} as={FiBox} fontSize="2xl" />
                  <Text color={Dark ? "#fff": null}>Dark Mode</Text>
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
          
            <li className="semiBold font15 pointer" style={window.innerWidth < 800 ?{display:"block" , marginTop:"70%"}: {display:'none'}}>
            <div className="dropdown">
              <Link  className="nav-link tm-nav-link active-icon-user-nav" href="#testimonials">
    
                              <Avatar
              src="avata-1.jpg"/>
              </Link>
              <div className="dropdown-content">
                  <a href="#">Tow</a>
                  <a href="#">One</a>
                  
              </div>
              </div>
            </li>
          </Flex>

          {/* <Flex flexDir='column'alignItems="center"  mb={18} mt={5}>
                    <Avatar my={2} src="avata-1.jpg"/>
                    <Text textAlign='center'>Calvin west</Text>
                </Flex> */}
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
        // w={["100%", "100%", "60%", "60%", "80%"]}
        // w='100%'
        p="3%"
        flexDir="column"
        overflow="auto"
        backgroundColor={Dark ? "#020202" :"#F6F7F9"}
        // minH="200vh"
        h="130vh"
      >
        <Heading fontWeight="normal" mb={4}>
        

        {/* <Slider dots={true} {...settings}  > */}
        <AvatarGroup flexDir='row'>
        <Avatar borderRadius='25px' m={5} width={"50%"} src={imag_2}/>
      <Avatar m={5} width={"50%"} borderRadius='25px' my={2} src={imag_1}/> 

      {/* <Avatar m={5} borderRadius='25px' my={2} src={imag_1}/> 
      <Avatar borderRadius='25px' my={2} src={imag_2}/> */}
      </AvatarGroup>
    {/* </Slider> */}
        </Heading>



  
        {/* <MyChart /> */}

        <Flex justifyContent="space-between" mt={8}>
          <Flex justifyContent="space-between" align="flex-end">
            <Heading as="h2" fontSize='1.5em' size="sm" letterSpacing="tight">
            My Vehicles
            </Heading>
     
          </Flex>
          {/* <Heading as="h2" size="sm" letterSpacing="tight"> */}
          <Link color={"#3563E9"}  _hover={{ 
            color:'#000',
            textDecor: "none" }}>
                  <Text  fontSize="1.5em">view All</Text>
                </Link>
            {/* </Heading> */}
        </Flex>

      
        <Flex flexDir='row' flexWrap={width < 970 ?"wrap" :'nowrap'}justifyContent="space-around" mt={8}>
            {array_data?.map(pic =>{

           return(
            <Flex 
                w={!Vaule_responsive ?'25%' : '80%'} 
                h='41vh' 
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


        </Flex>
  );
}
