import React, { useEffect,useState } from 'react'
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
  import {
    Avatar,
    Button,
    Flex,
    Heading,
    Icon,
    Link,
    Text
  } from "@chakra-ui/react";

import Slider from "react-slick";
import imag_1 from "../../assets/img/9579eff385e6525bfc9594ee8bd5c695.png";
import imag_2 from "../../assets/img/9579eff385e6525bfc9594ee8bd5c695.png";
import imag_3 from "../../assets/img/car_select_1.png";
import imag_4 from "../../assets/img/car_select_2.png";
import imag_5 from "../../assets/img/car_select_3.png";
import imag_BMW from "../../assets/img/a24c2f47f4598cf70dc820e4983c4bc0.png";


import useDark from "../../function/useDark";

export default function MYEvalution({setResponsive,setRetiv}) {
    const {getDark} = useDark();

    // useEffect(()=>{
    //     getDark('Dark')
    // },[])
    const [width, setWidth] = useState(window.innerWidth);
    const [width_slid, setWidth_slid] = useState(4);
    const [height, setHeight] = useState(0);
    const [Dark, setDark] = useState(getDark('Dark'));
    const [value, changeValue] = useState("#F2B300");
    const [count, setCont] = useState(8)
  useEffect(() => {
    getDark('Dark') ?
    setDark(true)
    :
    setDark(false)
    console.log(Dark,'hhhhhhhhhhhhhhhhooo')
    setHeight(window.innerHeight);
    const handleResize = () => {
    setWidth(window.innerWidth);
    setWidth_slid(window.innerWidth < 970 ? 1 :2)
    };
    window.addEventListener('resize', handleResize);
    // swithcing()
    return () => {
      window.removeEventListener('resize', handleResize);
    };
 
  }, []);



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
            id:4,
            name:'Nissan GT-R',
            Oil: "80L",
            imag:imag_3
        },
        {
            id:5,
            name:'Koenigsegg',
            Oil: "90L",
            imag:imag_3
        },
        {
            id:6,
            name:'Nissan GT-R',
            Oil: "80L",
            imag:imag_4
        },
        {
            id:7,
            name:'Rolls-Royce',
            Oil: "70L",
            imag:imag_5
        },
        {
            id:8,
            name:'Nissan GT-R',
            Oil: "80L",
            imag:imag_3
        },
        {
            id:9,
            name:'Nissan GT-R',
            Oil: "80L",
            imag:imag_3
        },
        {
            id:10,
            name:'Koenigsegg',
            Oil: "90L",
            imag:imag_3
        },
        {
            id:11,
            name:'Nissan GT-R',
            Oil: "80L",
            imag:imag_4
        },
        {
            id:12,
            name:'Rolls-Royce',
            Oil: "70L",
            imag:imag_5
        },
        {
            id:13,
            name:'Nissan GT-R',
            Oil: "80L",
            imag:imag_3
        },
        {
          id:14,
          name:'Koenigsegg',
          Oil: "90L",
          imag:imag_3
      },
      {
          id:15,
          name:'Nissan GT-R',
          Oil: "80L",
          imag:imag_4
      },
      {
          id:16,
          name:'Rolls-Royce',
          Oil: "70L",
          imag:imag_5
      },
      {
          id:17,
          name:'Nissan GT-R',
          Oil: "80L",
          imag:imag_3
      },
      {
          id:18,
          name:'Koenigsegg',
          Oil: "90L",
          imag:imag_3
      },
      {
          id:19,
          name:'Nissan GT-R',
          Oil: "80L",
          imag:imag_4
      },
      {
          id:20,
          name:'Rolls-Royce',
          Oil: "70L",
          imag:imag_5
      },
      {
          id:21,
          name:'Nissan GT-R',
          Oil: "80L",
          imag:imag_3
      },
      {
          id:22,
          name:'Nissan GT-R',
          Oil: "80L",
          imag:imag_3
      },
      {
          id:23,
          name:'Koenigsegg',
          Oil: "90L",
          imag:imag_3
      },
      {
          id:24,
          name:'Nissan GT-R',
          Oil: "80L",
          imag:imag_4
      },
      {
          id:25,
          name:'Rolls-Royce',
          Oil: "70L",
          imag:imag_5
      },
      {
          id:26,
          name:'Nissan GT-R',
          Oil: "80L",
          imag:imag_3
      },
    ]

    

      


  return (
    <>

         {/* Column 2 */}
      <Flex
      w='100%'
      // border="solid 10px #000"
        p="3%"
        onClick={()=>{
          if (window.innerWidth < 960 )
          setResponsive(true)
          setRetiv("relative")
        }}
        // top={0}
        // right={0}
        // left={0}
        flexDir="column"
        overflow='hidden'
        backgroundColor={ !getDark('Dark') ? "#020202" :"#F6F7F9"}
        // minH="200vh"
        // height
        // h="130vh"
      >

        {/* <MyChart /> */}
        <Flex 
        w='100%'
        ml={window.innerWidth > 960 ?  window.innerWidth /19 : window.innerWidth /10}
        mt={window.innerWidth > 960 ?  window.innerWidth /40 : window.innerWidth /10}
        position='fixed'
        // top={0}
        justifyContent="space-between">
          <Flex justifyContent="space-between" align="flex-end">
            <Heading as="h2" fontSize={window.innerWidth > 960 ? window.innerWidth /80 : window.innerWidth /25} size="sm" letterSpacing="tight">
            My Evaluation
            </Heading>
          </Flex>
        </Flex>

        {/* a::selection {
  background-color: yellow;
  color: black;
} */}
        <Flex 
        w='100%'
        // overflowY="scroll"
        flexWrap='wrap'
        flexDir='row' justifyContent='center' mt={70}>
            {array_data?.slice(0,count).map(pic =>{

           return(
            <Flex 
                // w={ window.innerWidth  > 970 ?'22%' : '80%'} 
                // h={width < 970 && width > 600? '51vh': '37vh'} 
                w={window.innerWidth  > 970 ? window.innerWidth /10 *1.5 : '80%'}
                h={window.innerWidth  > 970 ? window.innerWidth /10.1 *2 : '37vh'}
                mt={window.innerWidth  > 970 ? window.innerWidth /100 : window.innerWidth /45}
                mb={window.innerWidth  > 970 ? window.innerWidth /100 : window.innerWidth /20}
                mr={window.innerWidth  > 970 ? window.innerWidth /100 : window.innerWidth /20}
                ml={window.innerWidth  > 970 ? window.innerWidth /110 : window.innerWidth /20}
                background="var(--Primary-0, #FFF)"
                // boxShadow="0 0.1px 3px #000"
                borderRadius="5%"
                overflow='hidden'
                flexDirection='column'
                justifyContent="space-between"
                pb={10}
                pt={10}
                >
                    <Flex 
                    flexDir='row'
                    pl={20}
                    pr={20}
                    pt={10}
                    justifyContent="space-between"
                    >
                        <Flex
                        flexDir='column'
                        >
                            <Text
                            fontSize={window.innerWidth > 960 ? window.innerWidth /100 :window.innerWidth /25}
                            fontWeight='bold'
                            >{pic.name}</Text>
                            <Text
                            fontSize={window.innerWidth > 960 ? window.innerWidth /120 :window.innerWidth /30}

                            color="var(--Secondary-300, #90A3BF)"
                            >Sport</Text>
                        </Flex>
                        <img width={window.innerWidth < 960 ? window.innerWidth /15:window.innerWidth /70}  height={window.innerWidth < 960 ? window.innerWidth /15:window.innerWidth /70} src={imag_BMW}/>
                   
                        </Flex>
                
                    <Flex
                    overflow='hidden'
                    m={10}
                    // w={window.innerWidth.length > 960? window.innerWidth / 7:window.innerWidth / 1.5}
                    // border="solid 5px #000"
                    justify='center'
                    borderRadius='25px'
                    >
                    <img borderRadius='25px' 
                    width={window.innerWidth.length > 960? window.innerWidth / 1:window.innerWidth / 1.5}
                      src={pic.imag}/>
                    </Flex>
            <Flex
            w='100%'
            flexDir='column'
            >        
                <Flex
                w='90%'
                ml={10}
                mr={10}
                // border="solid 2px #000 "
                justifyContent='space-around'
                >
                    <Flex>
                    {/* <Icon
                        display={["flex", "flex", "none", "flex", "flex"]}
                        as={FiBatteryCharging}
                        fontSize=
                        mr={9}
                        className="icon_car"/> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width={window.innerWidth > 960 ?window.innerWidth /80 :window.innerWidth /25} height={window.innerWidth > 960 ?window.innerWidth /80 :window.innerWidth /25} viewBox="0 0 24 24" fill="none">
                      <path d="M22.34 9.33L20.34 8.33C19.97 8.15 19.51 8.29 19.33 8.66C19.14 9.04 19.29 9.49 19.66 9.67L21.25 10.46V15.25L17.5 15.26V5C17.5 3 16.16 2 14.5 2H6.5C4.84 2 3.5 3 3.5 5V21.25H2C1.59 21.25 1.25 21.59 1.25 22C1.25 22.41 1.59 22.75 2 22.75H19C19.41 22.75 19.75 22.41 19.75 22C19.75 21.59 19.41 21.25 19 21.25H17.5V16.76L22 16.75C22.42 16.75 22.75 16.41 22.75 16V10C22.75 9.72 22.59 9.46 22.34 9.33ZM6 6.89C6 5.5 6.85 5 7.89 5H13.12C14.15 5 15 5.5 15 6.89V8.12C15 9.5 14.15 10 13.11 10H7.89C6.85 10 6 9.5 6 8.11V6.89ZM6.5 12.25H9.5C9.91 12.25 10.25 12.59 10.25 13C10.25 13.41 9.91 13.75 9.5 13.75H6.5C6.09 13.75 5.75 13.41 5.75 13C5.75 12.59 6.09 12.25 6.5 12.25Z" fill="#90A3BF"/>
                      </svg>
                    <Text  fontSize={window.innerWidth > 960 ? window.innerWidth /120 : window.innerWidth /40}>{pic.Oil}</Text>
                    </Flex>
                    <Flex>
                    {/* <Icon
                        display={["flex", "flex", "none", "flex", "flex"]}
                        as={FiCrosshair}
                        mr={9}
                        fontSize={window.innerWidth /100}
                        className="icon_car"/> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width={window.innerWidth > 960 ?window.innerWidth /80 :window.innerWidth /25} height={window.innerWidth > 960 ?window.innerWidth /80 :window.innerWidth /25} viewBox="0 0 24 24" fill="none">
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.53 2 12 2Z" fill="#90A3BF"/>
                        <rect x="4" y="4" width="16" height="16" rx="8" fill="white"/>
                        <path d="M12 6C8.688 6 6 8.688 6 12C6 15.312 8.688 18 12 18C15.312 18 18 15.312 18 12C18 8.688 15.318 6 12 6Z" fill="#90A3BF"/>
                        <rect x="8" y="8" width="8" height="8" rx="4" fill="white"/>
                        <rect x="11" y="17" width="2" height="4" fill="#90A3BF"/>
                        <rect x="17" y="11" width="4" height="2" fill="#90A3BF"/>
                        <rect x="3" y="11" width="4" height="2" fill="#90A3BF"/>
                        </svg>
                    <Text fontSize={window.innerWidth > 960 ? window.innerWidth /120 : window.innerWidth /40}>Manual</Text>
                    </Flex>
                    <Flex>
                    <svg xmlns="http://www.w3.org/2000/svg" width={window.innerWidth > 960 ?window.innerWidth /80 :window.innerWidth /25} height={window.innerWidth > 960 ?window.innerWidth /80 :window.innerWidth /25} viewBox="0 0 24 24" fill="none">
                    <path d="M9 2C6.38 2 4.25 4.13 4.25 6.75C4.25 9.32 6.26 11.4 8.88 11.49C8.96 11.48 9.04 11.48 9.1 11.49C9.12 11.49 9.13 11.49 9.15 11.49C9.16 11.49 9.16 11.49 9.17 11.49C11.73 11.4 13.74 9.32 13.75 6.75C13.75 4.13 11.62 2 9 2Z" fill="#90A3BF"/>
                    <path d="M14.08 14.1499C11.29 12.2899 6.73996 12.2899 3.92996 14.1499C2.65996 14.9999 1.95996 16.1499 1.95996 17.3799C1.95996 18.6099 2.65996 19.7499 3.91996 20.5899C5.31996 21.5299 7.15996 21.9999 8.99996 21.9999C10.84 21.9999 12.68 21.5299 14.08 20.5899C15.34 19.7399 16.04 18.5999 16.04 17.3599C16.03 16.1299 15.34 14.9899 14.08 14.1499Z" fill="#90A3BF"/>
                    <path d="M19.9904 7.3401C20.1504 9.2801 18.7704 10.9801 16.8604 11.2101C16.8504 11.2101 16.8504 11.2101 16.8404 11.2101H16.8104C16.7504 11.2101 16.6904 11.2101 16.6404 11.2301C15.6704 11.2801 14.7804 10.9701 14.1104 10.4001C15.1404 9.4801 15.7304 8.1001 15.6104 6.6001C15.5404 5.7901 15.2604 5.0501 14.8404 4.4201C15.2204 4.2301 15.6604 4.1101 16.1104 4.0701C18.0704 3.9001 19.8204 5.3601 19.9904 7.3401Z" fill="#90A3BF"/>
                    <path d="M21.9902 16.5899C21.9102 17.5599 21.2902 18.3999 20.2502 18.9699C19.2502 19.5199 17.9902 19.7799 16.7402 19.7499C17.4602 19.0999 17.8802 18.2899 17.9602 17.4299C18.0602 16.1899 17.4702 14.9999 16.2902 14.0499C15.6202 13.5199 14.8402 13.0999 13.9902 12.7899C16.2002 12.1499 18.9802 12.5799 20.6902 13.9599C21.6102 14.6999 22.0802 15.6299 21.9902 16.5899Z" fill="#90A3BF"/>
                    </svg>
                    <Text  fontSize={window.innerWidth > 960 ? window.innerWidth /120 : window.innerWidth /40}>People</Text>
                    </Flex>
                </Flex>
                <Flex justifyContent="center" mt={2}>
                <Button
                    w='90%'
                    h={window.innerWidth > 960 ? window.innerWidth /40 : window.innerWidth /11}
                    color='#fff'
                    backgroundColor='#2D3291'
                    m={20}
                    // p={3}
                    borderWidth={1}
                    borderRadius="4px"
                    fontSize={window.innerWidth > 960 ? window.innerWidth /100 : window.innerWidth /40}
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
            <Link
            onClick={()=> {
              count >= array_data.length? 
              setCont(4)
              :
              setCont(count +4)
            
            }}
            align='center'
            cursor='cell'
            _hover={{color:'#2D3291'}}
            mt={40}
            >
            <Text
            className='button'
          
            color={!getDark('Dark') ? "var(--Primary-0, #FFF)" : '#2D3291'}
            fontWeight={700}
            >{count >= array_data.length ? "back" :"Load More"}</Text>
            </Link>

        </Flex>
    </>
  )
}
