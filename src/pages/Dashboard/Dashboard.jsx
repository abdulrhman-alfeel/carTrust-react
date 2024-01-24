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
                      <svg
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='#000'>
                      <path d="M10.0427 3.15016L10.0431 3.14985C11.1273 2.27904 12.8675 2.28414 13.968 3.16073C13.9681 3.16084 13.9682 3.16094 13.9684 3.16105L20.514 8.39756C20.5146 8.39802 20.5152 8.39849 20.5157 8.39895C20.893 8.70711 21.2196 9.18942 21.4304 9.74099C21.641 10.2922 21.7196 10.8699 21.6462 11.351L20.3873 18.8845C20.3872 18.885 20.3872 18.8855 20.3871 18.8859C20.1374 20.3188 18.7432 21.5 17.3 21.5H6.69996C5.23549 21.5 3.8725 20.3476 3.62294 18.8965C3.62288 18.8961 3.62282 18.8958 3.62276 18.8955L2.36313 11.3576L2.36293 11.3565C2.28079 10.8718 2.35452 10.293 2.56465 9.74192C2.77476 9.19094 3.10548 8.70909 3.4918 8.40086L3.49267 8.40016L10.0427 3.15016ZM12 19.25C12.6861 19.25 13.25 18.6862 13.25 18V15C13.25 14.3139 12.6861 13.75 12 13.75C11.3138 13.75 10.75 14.3139 10.75 15V18C10.75 18.6862 11.3138 19.25 12 19.25Z" fill="#90A3BF" stroke="#90A3BF"/>
                      </svg>
                    
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clip-path="url(#clip0_430_1228)">
                    <path d="M17.1213 0.10792C15.9117 0.280724 14.7827 0.815443 13.8826 1.64179C12.9825 2.46814 12.3535 3.54747 12.0783 4.73792C11.917 5.62238 11.9249 6.52938 12.1013 7.41093C12.3627 8.46156 12.9008 9.42296 13.6597 10.1952C14.4185 10.9674 15.3703 11.5222 16.4163 11.8019C16.8925 11.9293 17.386 11.9803 17.8783 11.9529C18.6606 11.9882 19.4409 11.847 20.1613 11.5399C21.144 11.1162 22.0038 10.4513 22.6613 9.60691C23.118 8.95875 23.4625 8.23838 23.6803 7.47593C23.808 7.00177 23.859 6.51022 23.8313 6.01994C23.8595 5.53558 23.8085 5.04985 23.6803 4.58192C23.4158 3.53523 22.8701 2.58082 22.1023 1.82194C21.3479 1.05254 20.3943 0.508217 19.3483 0.249918C18.6181 0.0853772 17.8664 0.0374526 17.1213 0.10792ZM20.8653 4.05592L21.3723 4.56294L19.3923 6.54292L17.4123 8.52293L15.9273 7.03791L14.4423 5.55293L14.9663 5.02891L15.4903 4.50492L16.4513 5.46592L17.4123 6.42692L18.8563 4.98292C19.6483 4.19092 20.3063 3.54493 20.3243 3.54493C20.5153 3.70354 20.696 3.87421 20.8653 4.05592Z" fill="#ECECEE"/>
                    <path d="M8.066 8.09183C6.75261 8.20459 5.44916 8.41282 4.166 8.71484C3.997 8.76184 3.966 8.83082 3.38 10.3748L2.769 11.9878H0V13.4788L1.59 13.8688C2.82867 14.2023 4.08718 14.4571 5.358 14.6318C6.65857 14.8347 7.97271 14.938 9.289 14.9408C11.9419 15.0099 14.5929 14.7459 17.18 14.1548L17.85 13.9918L17.32 13.9508C15.9346 13.8432 14.6014 13.3755 13.4524 12.5941C12.3033 11.8127 11.3783 10.7446 10.769 9.49582C10.6088 9.17286 10.4725 8.83864 10.361 8.49582L10.22 8.02783L9.434 8.03384C9 8.03984 8.386 8.06283 8.066 8.09183Z" fill="#90A3BF"/>
                    <path d="M0.763 15.8309C0.580643 16.1038 0.422699 16.3923 0.291 16.6929C0.0110004 17.4209 0 17.5929 0 20.8509V23.9259H1.98L2.475 22.9359L2.97 21.9459H16.917L17.412 22.9359L17.907 23.9259L18.897 23.9139L19.887 23.8969V20.7519C19.887 17.4329 19.881 17.3389 19.607 16.6759C19.3767 16.185 19.0854 15.725 18.74 15.3069C18.711 15.3069 18.379 15.3829 18.006 15.4759C12.7553 16.7695 7.27033 16.7794 2.015 15.5049C1.572 15.3939 1.182 15.3049 1.153 15.3049C1.00479 15.466 0.874066 15.6423 0.763 15.8309ZM5 19.1909L4.983 19.9359L3.748 19.9529L2.508 19.9649V18.4509H5.018L5 19.1909ZM12.932 19.2079V19.9649H6.992V18.4509H12.932V19.2079ZM17.404 19.1909L17.387 19.9359H14.937L14.92 19.1909L14.903 18.4509H17.419L17.404 19.1909Z" fill="#90A3BF"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_430_1228">
                    <rect width="23.836" height="23.854" fill="white" transform="translate(0 0.072998)"/>
                    </clipPath>
                    </defs>
                    </svg>
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="24" viewBox="0 0 21 24" fill="none">
                  <g clip-path="url(#clip0_430_1241)">
                  <path d="M3.73 19.7C3.90538 19.4943 4.12582 19.3319 4.37419 19.2252C4.62257 19.1186 4.89218 19.0707 5.16209 19.0852C5.43199 19.0997 5.69491 19.1763 5.93042 19.3089C6.16593 19.4415 6.36768 19.6267 6.52 19.85L7.53 21.2C7.68709 21.4461 7.90366 21.6487 8.15971 21.789C8.41575 21.9293 8.70302 22.0029 8.995 22.0029C9.28698 22.0029 9.57425 21.9293 9.83029 21.789C10.0863 21.6487 10.3029 21.4461 10.46 21.2L11.47 19.85C11.6223 19.6267 11.8241 19.4415 12.0596 19.3089C12.2951 19.1763 12.558 19.0997 12.8279 19.0852C13.0978 19.0707 13.3674 19.1186 13.6158 19.2252C13.8642 19.3319 14.0846 19.4943 14.26 19.7C16.04 21.6 17.49 20.97 17.49 18.31V7.04C17.5 3.01 16.56 2 12.78 2H5.22C1.44 2 0.5 3.01 0.5 7.04V18.3C0.5 20.97 1.96 21.59 3.73 19.7Z" fill={ pages === 'Evaluation' ?  "white" : '#000'}/>
                  <path d="M13 7.75H5C4.80149 7.74869 4.61149 7.66925 4.47112 7.52888C4.33075 7.38851 4.25131 7.19851 4.25 7C4.25131 6.80149 4.33075 6.61149 4.47112 6.47112C4.61149 6.33075 4.80149 6.25131 5 6.25H13C13.1985 6.25131 13.3885 6.33075 13.5289 6.47112C13.6693 6.61149 13.7487 6.80149 13.75 7C13.7487 7.19851 13.6693 7.38851 13.5289 7.52888C13.3885 7.66925 13.1985 7.74869 13 7.75Z" fill="#ECECEE"/>
                  <path d="M12 11.75H6C5.80149 11.7487 5.61149 11.6693 5.47112 11.5289C5.33075 11.3885 5.25131 11.1985 5.25 11C5.25131 10.8015 5.33075 10.6115 5.47112 10.4711C5.61149 10.3307 5.80149 10.2513 6 10.25H12C12.1985 10.2513 12.3885 10.3307 12.5289 10.4711C12.6693 10.6115 12.7487 10.8015 12.75 11C12.7487 11.1985 12.6693 11.3885 12.5289 11.5289C12.3885 11.6693 12.1985 11.7487 12 11.75Z" fill="#ECECEE"/>
                  </g>
                  <defs>
                  {/* <clipPath id="clip0_430_1241">
                  <rect width="21" height="24" fill="white"/>
                  </clipPath> */}
                  </defs>
                  </svg>
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
                          setDark(false)
                        
                        
                        }}
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
