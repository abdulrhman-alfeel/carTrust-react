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

import useDark from "../../function/useDark";
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
import DashboardHome from "./DashboardHome";
import MYEvalution from "./MYEvalution";
import imag_funt from '../../assets/img/04e77cc8e99ec927c37de1ac3b3e82cd.png'


export default function Dashboard() {
  const [display, changeDisplay] = useState("hide");

  const [Vaule_responsive, setResponsive] = useState( window.innerWidth  < 970 ? true : false);
  const [REletiv, setRetiv] = useState( window.innerWidth  < 970 ? 'absolute' :'relative');
  const [Dark, setDark] = useState(false);
  const [pages,setPages] = useState('Dashboard')


  const {setDarkup} = useDark();

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



const stylefouce = {
  backgroundColor:"#2D3291",

  borderRadius: "10px",
  color:"#fff"

}






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
                  <Flex p={12}
                  style={pages === 'Dashboard' ? stylefouce : null}
                  className="sidebar-items">
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
                    <Link 
                    _focus={{ 
                backgroundColor:"#2D3291",
                borderRadius: "10px",
                color:'#fff',
                textDecor: "none" }}
                style={pages === 'Dashboard' ? {color:'#fff'} : null}
                onClick={()=>{
                  setPages('Dashboard')
                }}
                justifyContent='space-around'
                >
                      <Text fontSize="1em" 
                      color={Dark ? "#fff": null}
                    //   className="active"
                      >Dashboard</Text>
                    </Link>
                  </Flex>
    
                  <Flex  p={12}
                  style={pages === 'Vehicles' ? stylefouce : null}
                  className="sidebar-items">
                    <Link
                    style={pages === 'Vehicles' ? {color:'#fff'} : null}
                    >
                      <Icon color={Dark ? "#fff": null} as={FiPieChart} fontSize="2xl" />
                    </Link>
                    <Link 
                    style={pages === 'Vehicles' ? {color:'#fff'} : null}
                        onClick={()=>{
                          setPages('Vehicles')
                        }}
                    _hover={{ 
                color:'#000',
                textDecor: "none" }}>
                      <Text  color={Dark ? "#fff": null}> My Vehicles</Text>
                    </Link>
                  </Flex>
    
                  <Flex 
                  style={pages === 'Evaluation' ? stylefouce : null}
                  p={12} className="sidebar-items">
                    <Link
                  style={pages === 'Evaluation' ? {color:'#fff'} : null}
                    >
                      <Icon color={Dark ? "#fff": null} as={FiDollarSign} fontSize="2xl" />
                    </Link>
                    <Link 
                    style={pages === 'Evaluation' ? {color:'#fff'} : null}
                    onClick={()=>{
                      setPages('Evaluation')
                    }}
                    _hover={{ 
                color:'#000',
                textDecor: "none" }}>
                      <Text color={Dark ? "#fff": null}>My Evaluation</Text>
                    </Link>
                  </Flex>
    
                  <Flex p={12}
                  style={pages === 'Warranties' ? stylefouce : null}
                  className="sidebar-items">
                    <Link 
                    style={pages === 'Warranties' ? {color:'#fff'} : null}
                    >
                      <Icon color={Dark ? "#fff": null} as={FiBox} fontSize="2xl" />
                    </Link>
                    <Link 
                    style={pages === 'Warranties' ? {color:'#fff'} : null}
                      onClick={()=>{
                        setPages('Warranties')
                      }}
                    _hover={{ 
                color:'#000',
                textDecor: "none" }}>
                      <Text color={Dark ? "#fff": null}>My Warranties</Text>
                    </Link>
                  </Flex>
    
                  <Flex p={12}
                  style={pages === 'CodesHistory' ? stylefouce : null}
                  className="sidebar-items">
                    <Link
                    style={pages === 'CodesHistory' ? {color:'#fff'} : null}
                    >
                      <Icon color={Dark ? "#fff": null} as={FiBox} fontSize="2xl" />
                    </Link>
                    <Link 
                        style={pages === 'CodesHistory' ? {color:'#fff'} : null}
                        onClick={()=>{
                          setPages('CodesHistory')
                        }}
                    _hover={{ 
                color:'#000',
                textDecor: "none" }}>
                      <Text color={Dark ? "#fff": null} fontSize="1em">QR CodesHistory</Text>
                    </Link>
                  </Flex>
    
                  <Flex
                  style={pages === 'MyTransaction' ? stylefouce : null}
                  pl={12} pt={10}  className="sidebar-items">
                    <Link
                    style={pages === 'MyTransaction' ? {color:'#fff'} : null} 
                    >
                      <Icon color={Dark ? "#fff": null} as={FiBox} fontSize="2xl" />
                    </Link>
                    <Link
                    style={pages === 'MyTransaction' ? {color:'#fff'} : null} 
                    onClick={()=>{
                      setPages('MyTransaction')
                    }}
                    _hover={{ 
                color:'#000',
                textDecor: "none" }}>
                      <Text color={Dark ? "#fff": null}>MyTransaction</Text>
                    </Link>
                  </Flex>
    
                  <Flex 
                  style={pages === 'Branches' ? stylefouce : null}
                  p={12} className="sidebar-items">
                    <Link
                    style={pages === 'Branches' ? {color:'#fff'} : null} 
                    >
                      <Icon color={Dark ? "#fff": null} as={FiBox} fontSize="2xl" />
                    </Link>
                    <Link
                      style={pages === 'Branches' ? {color:'#fff'} : null} 
                      onClick={()=>{
                      setPages('Branches')
                    }}
                    _hover={{ 
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



                  <Flex 
                  style={pages === 'ContactUs' ? stylefouce : null}
                  p={12} className="sidebar-items">
                    <Link
                    style={pages === 'Branches' ? {color:'#fff'} : null} 
                    >
                      <Icon color={Dark ? "#fff": null} as={FiBox} fontSize="2xl" />
                    </Link>
                    <Link 
                    style={pages === 'Branches' ? {color:'#fff'} : null} 
                    onClick={()=>{
                      setPages('ContactUs')
                    }}
                    _hover={{ 
                color:'#000',
                textDecor: "none" }}>
                      <Text color={Dark ? "#fff": null}>ContactUs</Text>
                    </Link>
                  </Flex>
    
                  <Flex 
                  style={pages === 'Settings' ? stylefouce : null}
                  p={12} className="sidebar-items">
                    <Link
                    style={pages === 'Settings' ? {color:'#fff'} : null} 
                    >
                      <Icon color={Dark ? "#fff": null} as={FiBox} fontSize="2xl" />
                    </Link>
                    <Link 
                      style={pages === 'Settings' ? {color:'#fff'} : null} 
                      onClick={()=>{
                      setPages('Settings')
                    }}
                    _hover={{ 
                color:'#000',
                textDecor: "none" }}>
                      <Text color={Dark ? "#fff": null}> Settings</Text>
                    </Link>
                  </Flex>
    
    
                  <Flex 
                  w='100%'
                  p={12} 
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
                        onClick={()=>{
                          setDarkup('Dark',false)
                          setDark(false)}}
                        borderRadius='10em' backgroundColor={Dark ?   "#F6F7F9" : "#2D3291" }>
                        <Icon as={FiSun} fontSize="2xl" />
                        </Link>
                        <Link
                            align='center'
                            width='50%'
                            h="1.6em"
                            onClick={()=>{
                            setDarkup('Dark',true)
                            setDark(true)}}
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

<Flex
w={window.innerWidth < 960? "100%" :'80%'}
>
{pages === 'Dashboard'?
<DashboardHome setResponsive={setResponsive} setRetiv={setRetiv} />  
:pages === 'Evaluation'?
<MYEvalution setResponsive={setResponsive} setRetiv={setRetiv} />
:
<Flex 
align='center'
justify='center'
flexDir='column'
w='100%'
// border='solid 2px #000'
>
  <img width='15%' height="20%" src={imag_funt} />
  <Text
  m={15}
  color="#B0BBD0"
  >No Evaluation Found</Text>
</Flex>
}

</Flex>

        </Flex>

        </div>
  );
}
