import {
  Avatar,
  Button,
  Flex,
  Heading,
  Icon,
  Link,
  Text
} from "@chakra-ui/react";
import React, { useState,Suspense } from "react";
import {
  FiBatteryCharging,
  FiBox,
  FiChevronsRight,
  FiCrosshair,
  FiDollarSign,
  FiHeart,
  FiHome,
  FiPieChart,
  FiSun,
  FiUsers
} from "react-icons/fi";



import TopNavbarDashbord from "../../components/Nav/TopNavbarDashbord";
import MYEvalution from "./MYEvalution";
import imag_funt from '../../assets/img/04e77cc8e99ec927c37de1ac3b3e82cd.png'
import FoundFile from "../function/useFoundfile";
import Layuot_dashbord from "../../components/Nav/layuot_dashbord";
import Slider from "react-slick";
import imag_1 from "../../assets/img/9579eff385e6525bfc9594ee8bd5c695.png";
import imag_2 from "../../assets/img/9579eff385e6525bfc9594ee8bd5c695.png";
import imag_3 from "../../assets/img/car_select_1.png";
import imag_4 from "../../assets/img/car_select_2.png";
import imag_5 from "../../assets/img/car_select_3.png";


export default function Dashboard() {
  // const [display, changeDisplay] = useState("hide");
  const [Vaule_responsive, setResponsive] = useState( window.innerWidth  < 970 ? true : false);

  const [Dark, setDark] = useState(false);

  const [REletiv, setRetiv] = useState( window.innerWidth  < 970 ? 'absolute' :'relative');
  const [width, setWidth] = useState(window.innerWidth);

  // const [pages,setPages] = useState('Dashboard')




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
  speed: 500,
  slidesToShow: width < 970 ? 1 : 2,
  // slidesToShow: 2,
  slidesToScroll: width < 970 ? 1 : 2,
  autoplay:true,
  arrows: false,
  
  // centerPadding: 100
};





  return (
    <div
    style={{
      backgroundColor: '#333333',
      width:'100%',display:"flex",flexDirection:'column',overflow:'hidden'}}
    >


<Flex
m={30}
// pb={100}
    >

<TopNavbarDashbord kind={Dark} />
</Flex>



    <Flex
      w="100%"
      minH='100vh'
    // mt={20}
    //   h={[null, null, "1000vh"]}

    backgroundColor={Dark? '#333333' : '#fff'}
      flexDir={["column", "column", "row-reverse"]}
      overflow="hidden"
    //   maxW="2000px"
    // maxH="130vh"
    >
      {/* *column 1 */}

<Layuot_dashbord  setDarkPage={setDark} pages={'Dashboard'}  Vaule_responsive={Vaule_responsive} setResponsive={setResponsive}/>

<Flex
w={window.innerWidth < 960? "100%" :'80%'}
>
{/* {pages === 'Dashboard'?
<DashboardHome setResponsive={setResponsive} setRetiv={setRetiv} Dark={Dark} />  
:pages === 'Evaluation'?
<MYEvalution setResponsive={setResponsive} setRetiv={setRetiv}  Dark={Dark} />
:
<FoundFile />
} */}

<Flex
        p="3%"
        onClick={()=>{
          if (window.innerWidth < 960 )
          // setResponsive(true)
          setRetiv("relative")

        }}
        // position='fixed'
        // top={0}
        // right={0}
        // left={0}
        flexDir="column"
        overflow='hidden'

        backgroundColor={ Dark ? "#020202" :"#F6F7F9"}
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

        <Flex justifyContent="space-between" flexDir="row-reverse" m={20} mt={8}>
          <Flex justifyContent="space-between" align="flex-end">
            <Heading as="h2" fontSize='1.5em' size="sm" letterSpacing="tight">
            مركباتي
            </Heading>
          </Flex>
          {/* <Heading as="h2" size="sm" letterSpacing="tight"> */}
          <Link color={"#3563E9"}  _hover={{ 
            color:Dark ?"#fff":'#000',
            textDecor: "none" }}>
                  <Text  fontSize="1.5em">عرض الكل</Text>
                </Link>
            {/* </Heading> */}
        </Flex>

      
        <Flex flexDir='row' flexWrap={width < 970 ?"wrap" :'nowrap'}justifyContent="space-around" mt={8}>
            {array_data.length > 0? array_data?.map(pic =>{

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
                    // onClick={() => changeValue("#B57295")}
                >
                    StartNow
                </Button>
                </Flex>
            </Flex>
            </Flex>
                )})
                :
                <FoundFile />
                }
            
            </Flex>


        </Flex>



</Flex>

        </Flex>

        </div>
  );
}
