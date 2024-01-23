import React ,{useState} from 'react'
import bmw from "../assets/img/BMW.png";
// import cars from "../assets/img/cca223c76ca08ec8091914a2d782e74d.png";
import cars from "../assets/img/3a0c87f921f5ca9102586b1e963c53f2.png";
import pdfURL from "../assets/ctpg-1005833-1.pdf";
import PdfViewer from '../components/Sections/pdfView';
import TopNavbar from "../components/Nav/TopNavbar";
import Footer from "../components/Sections/Footer";
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
export default function PostPyment() {
    const [fontTitl,setFont] = useState({
        titlesub:"0.8em",
        titleHome:'20px',
        titleMedim:'18px',
        titleMedim_d:'16px',
      })
    const [color,setColor] = useState({
        colorSub:'var(--Secondary-300, #90A3BF)',
        color_brimry:"#2D3291"

    })
    const [padding,setPaddign] = useState(25)


    // const convertImag = () =>{
    //     // Load the PDF file
    // pdfjsLib.getDocument('path/to/pdf/file.pdf').promise.then(function(pdf) {
    //     // Get the first page of the PDF
    //     pdf.getPage(1).then(function(page) {
    //     // Get the viewport of the page
    //     var viewport = page.getViewport({scale: 1});
    
    //     // Create a canvas element with the same dimensions as the page
    //     var canvas = document.createElement('canvas');
    //     canvas.width = viewport.width;
    //     canvas.height = viewport.height;
    
    //     // Render the page on the canvas
    //     page.render({canvasContext: canvas.getContext('2d'), viewport: viewport}).promise.then(function() {
    //         // Convert the canvas to a PNG image
    //         var imgData = canvas.toDataURL('image/png');
    
    //         // Do something with the image data, such as display it on the page
    //         document.body.innerHTML += '<img src="' + imgData + '">';
    //     });
    //     });
    // });
    // }



  const Avatar_advertins = () =>{
    return(
        <Flex 
        w='100%'
        h='241px'
        borderRadius='10px'
        background='#2D3291'
        >
        <Flex 
        position="absolute"
        zIndex={1}
        flexDir='column'>
        <Flex 
        // transform="rotate(-160deg)" 
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="67" height="164" viewBox="0 0 67 164" fill="none">
        <path d="M22.6418 81.8335L0.577148 0.00012207H22.6418H44.7064L66.7711 81.8335L44.7064 163.667H22.6418H0.577148L22.6418 81.8335Z" fill="white" fill-opacity="0.03"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="67" height="164" viewBox="0 0 67 164" fill="none">
        <path d="M22.6955 81.8335L0.630859 0.00012207H22.6955H44.7602L66.8248 81.8335L44.7602 163.667H22.6955H0.630859L22.6955 81.8335Z" fill="white" fill-opacity="0.03"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="67" height="164" viewBox="0 0 67 164" fill="none">
        <path d="M22.6955 81.8335L0.630859 0.00012207H22.6955H44.7602L66.8248 81.8335L44.7602 163.667H22.6955H0.630859L22.6955 81.8335Z" fill="white" fill-opacity="0.03"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="67" height="164" viewBox="0 0 67 164" fill="none">
        <path d="M22.6955 81.8335L0.630859 0.00012207H22.6955H44.7602L66.8248 81.8335L44.7602 163.667H22.6955H0.630859L22.6955 81.8335Z" fill="white" fill-opacity="0.03"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="67" height="164" viewBox="0 0 67 164" fill="none">
        <path d="M22.6955 81.8335L0.630859 0.00012207H22.6955H44.7602L66.8248 81.8335L44.7602 163.667H22.6955H0.630859L22.6955 81.8335Z" fill="white" fill-opacity="0.03"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="67" height="164" viewBox="0 0 67 164" fill="none">
        <path d="M22.6955 81.8335L0.630859 0.00012207H22.6955H44.7602L66.8248 81.8335L44.7602 163.667H22.6955H0.630859L22.6955 81.8335Z" fill="white" fill-opacity="0.03"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="67" height="164" viewBox="0 0 67 164" fill="none">
        <path d="M22.6955 81.8335L0.630859 0.00012207H22.6955H44.7602L66.8248 81.8335L44.7602 163.667H22.6955H0.630859L22.6955 81.8335Z" fill="white" fill-opacity="0.03"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="67" height="164" viewBox="0 0 67 164" fill="none">
        <path d="M22.6955 81.8335L0.630859 0.00012207H22.6955H44.7602L66.8248 81.8335L44.7602 163.667H22.6955H0.630859L22.6955 81.8335Z" fill="white" fill-opacity="0.03"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="67" height="164" viewBox="0 0 67 164" fill="none">
        <path d="M22.6955 81.8335L0.630859 0.00012207H22.6955H44.7602L66.8248 81.8335L44.7602 163.667H22.6955H0.630859L22.6955 81.8335Z" fill="white" fill-opacity="0.03"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="67" height="164" viewBox="0 0 67 164" fill="none">
        <path d="M22.6955 81.8335L0.630859 0.00012207H22.6955H44.7602L66.8248 81.8335L44.7602 163.667H22.6955H0.630859L22.6955 81.8335Z" fill="white" fill-opacity="0.03"/>
        </svg>
        </Flex>
        <Flex 
        mt={15}
        // transform="rotate(-160deg)" 
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="67" height="164" viewBox="0 0 67 164" fill="none">
        <path d="M22.6418 81.8335L0.577148 0.00012207H22.6418H44.7064L66.7711 81.8335L44.7064 163.667H22.6418H0.577148L22.6418 81.8335Z" fill="white" fill-opacity="0.03"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="67" height="164" viewBox="0 0 67 164" fill="none">
        <path d="M22.6955 81.8335L0.630859 0.00012207H22.6955H44.7602L66.8248 81.8335L44.7602 163.667H22.6955H0.630859L22.6955 81.8335Z" fill="white" fill-opacity="0.03"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="67" height="164" viewBox="0 0 67 164" fill="none">
        <path d="M22.6955 81.8335L0.630859 0.00012207H22.6955H44.7602L66.8248 81.8335L44.7602 163.667H22.6955H0.630859L22.6955 81.8335Z" fill="white" fill-opacity="0.03"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="67" height="164" viewBox="0 0 67 164" fill="none">
        <path d="M22.6955 81.8335L0.630859 0.00012207H22.6955H44.7602L66.8248 81.8335L44.7602 163.667H22.6955H0.630859L22.6955 81.8335Z" fill="white" fill-opacity="0.03"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="67" height="164" viewBox="0 0 67 164" fill="none">
        <path d="M22.6955 81.8335L0.630859 0.00012207H22.6955H44.7602L66.8248 81.8335L44.7602 163.667H22.6955H0.630859L22.6955 81.8335Z" fill="white" fill-opacity="0.03"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="67" height="164" viewBox="0 0 67 164" fill="none">
        <path d="M22.6955 81.8335L0.630859 0.00012207H22.6955H44.7602L66.8248 81.8335L44.7602 163.667H22.6955H0.630859L22.6955 81.8335Z" fill="white" fill-opacity="0.03"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="67" height="164" viewBox="0 0 67 164" fill="none">
        <path d="M22.6955 81.8335L0.630859 0.00012207H22.6955H44.7602L66.8248 81.8335L44.7602 163.667H22.6955H0.630859L22.6955 81.8335Z" fill="white" fill-opacity="0.03"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="67" height="164" viewBox="0 0 67 164" fill="none">
        <path d="M22.6955 81.8335L0.630859 0.00012207H22.6955H44.7602L66.8248 81.8335L44.7602 163.667H22.6955H0.630859L22.6955 81.8335Z" fill="white" fill-opacity="0.03"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="67" height="164" viewBox="0 0 67 164" fill="none">
        <path d="M22.6955 81.8335L0.630859 0.00012207H22.6955H44.7602L66.8248 81.8335L44.7602 163.667H22.6955H0.630859L22.6955 81.8335Z" fill="white" fill-opacity="0.03"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="67" height="164" viewBox="0 0 67 164" fill="none">
        <path d="M22.6955 81.8335L0.630859 0.00012207H22.6955H44.7602L66.8248 81.8335L44.7602 163.667H22.6955H0.630859L22.6955 81.8335Z" fill="white" fill-opacity="0.03"/>
        </svg>
        </Flex>
        </Flex>
        <Avatar zIndex={2} w='100%' src={cars} />
        </Flex>
    )
  }    
  return (



    <div style={{    backgroundColor:"#F6F7F9"}}>
    <TopNavbar />
    <Flex
    w='100%'
    // mt={5}
    position="relative"
    top={100}
    mb={90}
    p={5}
    // h='100vh'
    overflow='hidden'
    flexDir='column'
    // gridColumn="auto"

    // border='solid 1px #000'
    >
<Flex width='80%'
m={window.innerWidth > 960 ? 'auto' : null}
// border='solid 2px #000'
// mr="2px"
position='relative'
top={window.innerWidth > 960 ? 20 : 0}
pl={10}
>
<Text
color={color.colorSub}
fontSize={fontTitl.titleMedim_d}
>Evaluations /Evaluation Details</Text>
</Flex>
<Flex 
w='100%'
mb={30}
display={window.innerWidth > 960 ? 'none' :'flex'}
// border='solid 2px #000'
flexDir='column'
>
<Avatar_advertins />
</Flex>
<Flex
// border='solid 1px #000'
flexDir={window.innerWidth < 960 ? 'column' :'row-reverse'}
w={window.innerWidth < 960 ? '100%' :'83%'}
align='center'
m='auto'
// h='641px'
// h='70vh'

mb={35}
>
<Box
    w={window.innerWidth < 960 ? '100%' :'50%'}
    // h={window.innerWidth > 960 ?'641px': null}
    m={20}
    // border='solid 1px #000'
    background='#fff'
    borderRadius='10px'
    overflow='hidden'
    p={padding}
display='flex' alignItems='center' flexDir='column'>
    <Flex 
    // border='solid 1px #000'
    w='100%'
    justifyContent='space-between'
    mb={25}
    >
    <Flex flexDir="column"> 
        <Text fontSize={fontTitl.titleHome} fontWeight={700}>i7xDrive60</Text>
        <Text 
        color=' var(--Secondary-300, #90A3BF)' 
        fontSize={fontTitl.titlesub}
        >7Series</Text>
    </Flex>
    <Flex justify='flex-end'
    w='100%'
    //  border='solid 1px #000'
    >
        <Flex 
        w='30%'
        // border="solid 2px #000"
        flexDir='column' mr={10} align='flex-end'>
        <Text
        color=' var(--Secondary-300, #90A3BF)' 
        fontSize={fontTitl.titleMedim}
        >BmW</Text>
        <Text
        color=' var(--Secondary-300, #90A3BF)' 
        fontSize={fontTitl.titlesub}
        >14-04-2024</Text>
        </Flex>
        <Avatar  w='5%' h={window.innerWidth < 950 ? '33%' : '50%'} src={bmw} />
    </Flex>
    </Flex>

<Flex
w='100%'
mt={20}
// border='solid 1px #000'
flexDir={window.innerWidth < 960 ? "column" : 'row'} 
// align='center'
justifyContent='space-between'>
<Flex 
w={window.innerWidth < 960 ?'100%' :'40%'}
// border='solid 1px #000'
flexDir='row' 
justifyContent='space-between'
>
<Flex 
// mr={50}
flexDir='column'
// border='solid 1px #000'
>
<Flex 
color=' var(--Secondary-300, #90A3BF)' 
fontSize={fontTitl.titleMedim_d}
p={5} >
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
<path d="M22.6562 8.33341C22.6562 8.7605 22.3021 9.11466 21.875 9.11466H3.125C2.69792 9.11466 2.34375 8.7605 2.34375 8.33341C2.34375 7.90633 2.69792 7.55216 3.125 7.55216H4.1875L4.58333 5.66675C4.95833 3.84383 5.73958 2.16675 8.84375 2.16675H16.1562C19.2604 2.16675 20.0417 3.84383 20.4167 5.66675L20.8125 7.55216H21.875C22.3021 7.55216 22.6562 7.90633 22.6562 8.33341Z" fill="#90A3BF"/>
<path d="M23.1045 14.2291C22.9482 12.5104 22.4899 10.6771 19.1461 10.6771H5.85448C2.51073 10.6771 2.06281 12.5104 1.89615 14.2291L1.31281 20.5729C1.2399 21.3646 1.50031 22.1562 2.04198 22.75C2.59406 23.3541 3.37531 23.6979 4.20865 23.6979H6.16698C7.85448 23.6979 8.1774 22.7291 8.38573 22.0937L8.59406 21.4687C8.83365 20.75 8.89615 20.5729 9.83365 20.5729H15.167C16.1045 20.5729 16.1357 20.6771 16.4066 21.4687L16.6149 22.0937C16.8232 22.7291 17.1461 23.6979 18.8336 23.6979H20.792C21.6149 23.6979 22.4066 23.3541 22.9586 22.75C23.5003 22.1562 23.7607 21.3646 23.6878 20.5729L23.1045 14.2291ZM9.37531 16.4062H6.25031C5.82323 16.4062 5.46906 16.0521 5.46906 15.625C5.46906 15.1979 5.82323 14.8437 6.25031 14.8437H9.37531C9.8024 14.8437 10.1566 15.1979 10.1566 15.625C10.1566 16.0521 9.8024 16.4062 9.37531 16.4062ZM18.7503 16.4062H15.6253C15.1982 16.4062 14.8441 16.0521 14.8441 15.625C14.8441 15.1979 15.1982 14.8437 15.6253 14.8437H18.7503C19.1774 14.8437 19.5316 15.1979 19.5316 15.625C19.5316 16.0521 19.1774 16.4062 18.7503 16.4062Z" fill="#90A3BF"/>
</svg>
<Text ml={10}>Make</Text>

</Flex>
<Flex
mt={10}
color=' var(--Secondary-300, #90A3BF)' 
fontSize={fontTitl.titleMedim_d}
p={5} >
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
<path d="M12.4997 2.08331C6.74967 2.08331 2.08301 6.74998 2.08301 12.5C2.08301 18.25 6.74967 22.9166 12.4997 22.9166C18.2497 22.9166 22.9163 18.25 22.9163 12.5C22.9163 6.74998 18.2497 2.08331 12.4997 2.08331ZM16.1768 13.7812L10.7809 17.5208C9.98926 18.0729 9.53092 17.75 9.76009 16.8229L10.7497 12.8229L9.03093 12.3958C8.24967 12.2083 8.15592 11.6666 8.81217 11.2083L14.208 7.46873C14.9997 6.91665 15.458 7.23956 15.2288 8.16665L14.2393 12.1666L15.958 12.5937C16.7393 12.7916 16.833 13.3229 16.1768 13.7812Z" fill="#90A3BF"/>
</svg>

<Text ml={10}>Trim</Text>
</Flex>
<Flex 
mt={10}
color=' var(--Secondary-300, #90A3BF)' 
fontSize={fontTitl.titleMedim_d}
p={5}                         >
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
<path d="M18.3434 2.9895H18.0518C17.9476 2.16659 17.6455 1.51034 17.1663 1.02075C16.5413 0.395752 15.6351 0.083252 14.4684 0.083252H8.65592C6.31217 0.083252 5.02051 1.37492 5.02051 3.71867C5.02051 4.88533 5.33301 5.79158 5.95801 6.41658C6.58301 7.04158 7.48926 7.35408 8.65592 7.35408H14.4684C16.5518 7.35408 17.8018 6.32283 18.0518 4.44783H18.3434C20.5205 4.44783 20.5205 4.7395 20.5205 6.62492V8.56242C20.5205 10.4478 20.5205 10.7395 18.3434 10.7395H14.4684C11.3538 10.7395 10.9059 12.2187 10.8434 13.6562C9.90593 13.7187 8.89551 14.1562 8.89551 15.8228V18.7291C8.89551 20.5312 10.083 20.9062 11.0726 20.9062H12.0413C13.0309 20.9062 14.2184 20.5312 14.2184 18.7291V15.8228C14.2184 14.177 13.2288 13.7187 12.2913 13.6562C12.3434 12.6041 12.6455 12.1874 14.458 12.1874H18.333C21.7184 12.1874 21.9684 10.8124 21.9684 8.552V6.62492C21.9788 4.3645 21.7288 2.9895 18.3434 2.9895Z" fill="#90A3BF"/>
</svg>
<Text ml={5}>Color</Text>
</Flex>
</Flex>
                
<Flex 
// ml={50}
align={window.innerWidth < 960 ? 'flex-start'  :'flex-end'}
justifyContent='space-around'
fontSize={fontTitl.titleMedim_d}
flexDir='column'>
    <Text mb={10}>BWM</Text>
    <Text mb={10}>i7xDrive60</Text>
    <Text mb={10}>white</Text>
</Flex>   
</Flex>   
{/* ********** */}
{window.innerWidth < 960?
<hr />
:
null
}
            <Flex
                w={window.innerWidth < 960 ? '100%' :'50%'}
                mr={-45}
                flexDir='row' 
                justifyContent={window.innerWidth < 960 ? 'space-between'  :'space-around'}
                //  border='solid 1px #000'
            >
                <Flex flexDir='column'>
                <Flex 
                mb={10}
                color=' var(--Secondary-300, #90A3BF)' 
                fontSize={fontTitl.titleMedim_d}
                p={5} justifyContent='space-between'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3144C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3146 13.9828 15.4995 13.9955 15.7925C13.9985 15.862 14 15.9314 14 16Z" fill="#90A3BF"/>
                        <path d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z" fill="#90A3BF"/>
                        <path d="M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6875 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0977C20.9863 12.1818 22 13.9755 22 16Z" fill="#90A3BF"/>
                        </svg>
                        <Text ml={5}>Model</Text>
                    </Flex>
                    <Flex 
                    color=' var(--Secondary-300, #90A3BF)' 
                    fontSize={fontTitl.titleMedim_d}
                    p={5} justifyContent='space-between'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path d="M17.4475 3.70831V2.08331C17.4475 1.65623 17.0933 1.30206 16.6663 1.30206C16.2392 1.30206 15.885 1.65623 15.885 2.08331V3.64581H9.11417V2.08331C9.11417 1.65623 8.76 1.30206 8.33292 1.30206C7.90584 1.30206 7.55167 1.65623 7.55167 2.08331V3.70831C4.73917 3.96873 3.37459 5.64581 3.16625 8.1354C3.14542 8.43748 3.39542 8.68748 3.68709 8.68748H21.3121C21.6142 8.68748 21.8642 8.42706 21.8329 8.1354C21.6246 5.64581 20.26 3.96873 17.4475 3.70831Z" fill="#90A3BF"/>
                        <path d="M20.8333 10.25H4.16667C3.59375 10.25 3.125 10.7187 3.125 11.2917V17.7083C3.125 20.8333 4.6875 22.9167 8.33333 22.9167H16.6667C20.3125 22.9167 21.875 20.8333 21.875 17.7083V11.2917C21.875 10.7187 21.4062 10.25 20.8333 10.25ZM9.59375 18.9687C9.54167 19.0104 9.48958 19.0625 9.4375 19.0937C9.375 19.1354 9.3125 19.1667 9.25 19.1875C9.1875 19.2188 9.125 19.2396 9.0625 19.25C8.98958 19.2604 8.92708 19.2708 8.85417 19.2708C8.71875 19.2708 8.58333 19.2396 8.45833 19.1875C8.32292 19.1354 8.21875 19.0625 8.11458 18.9687C7.92708 18.7708 7.8125 18.5 7.8125 18.2292C7.8125 17.9583 7.92708 17.6875 8.11458 17.4896C8.21875 17.3958 8.32292 17.3229 8.45833 17.2708C8.64583 17.1875 8.85417 17.1667 9.0625 17.2083C9.125 17.2188 9.1875 17.2396 9.25 17.2708C9.3125 17.2917 9.375 17.3229 9.4375 17.3646C9.48958 17.4062 9.54167 17.4479 9.59375 17.4896C9.78125 17.6875 9.89583 17.9583 9.89583 18.2292C9.89583 18.5 9.78125 18.7708 9.59375 18.9687ZM9.59375 15.3229C9.39583 15.5104 9.125 15.625 8.85417 15.625C8.58333 15.625 8.3125 15.5104 8.11458 15.3229C7.92708 15.125 7.8125 14.8542 7.8125 14.5833C7.8125 14.3125 7.92708 14.0417 8.11458 13.8437C8.40625 13.5521 8.86458 13.4583 9.25 13.625C9.38542 13.6771 9.5 13.75 9.59375 13.8437C9.78125 14.0417 9.89583 14.3125 9.89583 14.5833C9.89583 14.8542 9.78125 15.125 9.59375 15.3229ZM13.2396 18.9687C13.0417 19.1562 12.7708 19.2708 12.5 19.2708C12.2292 19.2708 11.9583 19.1562 11.7604 18.9687C11.5729 18.7708 11.4583 18.5 11.4583 18.2292C11.4583 17.9583 11.5729 17.6875 11.7604 17.4896C12.1458 17.1042 12.8542 17.1042 13.2396 17.4896C13.4271 17.6875 13.5417 17.9583 13.5417 18.2292C13.5417 18.5 13.4271 18.7708 13.2396 18.9687ZM13.2396 15.3229C13.1875 15.3646 13.1354 15.4062 13.0833 15.4479C13.0208 15.4896 12.9583 15.5208 12.8958 15.5417C12.8333 15.5729 12.7708 15.5937 12.7083 15.6042C12.6354 15.6146 12.5729 15.625 12.5 15.625C12.2292 15.625 11.9583 15.5104 11.7604 15.3229C11.5729 15.125 11.4583 14.8542 11.4583 14.5833C11.4583 14.3125 11.5729 14.0417 11.7604 13.8437C11.8542 13.75 11.9688 13.6771 12.1042 13.625C12.4896 13.4583 12.9479 13.5521 13.2396 13.8437C13.4271 14.0417 13.5417 14.3125 13.5417 14.5833C13.5417 14.8542 13.4271 15.125 13.2396 15.3229ZM16.8854 18.9687C16.6875 19.1562 16.4167 19.2708 16.1458 19.2708C15.875 19.2708 15.6042 19.1562 15.4062 18.9687C15.2187 18.7708 15.1042 18.5 15.1042 18.2292C15.1042 17.9583 15.2187 17.6875 15.4062 17.4896C15.7917 17.1042 16.5 17.1042 16.8854 17.4896C17.0729 17.6875 17.1875 17.9583 17.1875 18.2292C17.1875 18.5 17.0729 18.7708 16.8854 18.9687ZM16.8854 15.3229C16.8333 15.3646 16.7812 15.4062 16.7292 15.4479C16.6667 15.4896 16.6042 15.5208 16.5417 15.5417C16.4792 15.5729 16.4167 15.5937 16.3542 15.6042C16.2812 15.6146 16.2083 15.625 16.1458 15.625C15.875 15.625 15.6042 15.5104 15.4062 15.3229C15.2187 15.125 15.1042 14.8542 15.1042 14.5833C15.1042 14.3125 15.2187 14.0417 15.4062 13.8437C15.5104 13.75 15.6146 13.6771 15.75 13.625C15.9375 13.5417 16.1458 13.5208 16.3542 13.5625C16.4167 13.5729 16.4792 13.5937 16.5417 13.625C16.6042 13.6458 16.6667 13.6771 16.7292 13.7187C16.7812 13.7604 16.8333 13.8021 16.8854 13.8437C17.0729 14.0417 17.1875 14.3125 17.1875 14.5833C17.1875 14.8542 17.0729 15.125 16.8854 15.3229Z" fill="#90A3BF"/>
                        </svg>
                        <Text mr={14}>Year</Text>
                    </Flex> 
                </Flex>

{window.innerWidth < 960?
                
<Flex 
// color=' var(--Secondary-300, #90A3BF)' 
fontSize={fontTitl.titleMedim_d}
align='flex-start'
position="relative"
right={"20px"}
justifyContent='space-around'
flexDir='column'
>
        <Text >7Series</Text>
        <Text >2024</Text>
</Flex>
    :
    <Flex 
    // color=' var(--Secondary-300, #90A3BF)' 
    fontSize={fontTitl.titleMedim_d}
    // align='flex-start'
    // justifyContent='space-around'
    align={window.innerWidth < 960 ? 'flex-start'  :'flex-end'}
// justifyContent='space-around'
    flexDir='column'
    >
            <Text m={5}>7Series</Text>
            <Text m={5}>2024</Text>
    </Flex>
}           
</Flex>        
</Flex>

<Flex 
mt={40}
mb={50}
w='100%'
justifyContent='space-between'
>
<Flex 
flexDir='column'
justifyContent='space-between'
// border='solid 2px #000'
>
<Flex
mt={15}
>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM8.47 8.98L11.47 5.98C11.54 5.91 11.62 5.86 11.71 5.82C11.89 5.74 12.1 5.74 12.28 5.82C12.37 5.86 12.45 5.91 12.52 5.98L15.52 8.98C15.81 9.27 15.81 9.75 15.52 10.04C15.37 10.19 15.18 10.26 14.99 10.26C14.8 10.26 14.61 10.19 14.46 10.04L12.74 8.32V14.51C12.74 14.92 12.4 15.26 11.99 15.26C11.58 15.26 11.24 14.92 11.24 14.51V8.32L9.52 10.04C9.23 10.33 8.75 10.33 8.46 10.04C8.17 9.75 8.18 9.28 8.47 8.98ZM18.24 17.22C16.23 17.89 14.12 18.23 12 18.23C9.88 18.23 7.77 17.89 5.76 17.22C5.37 17.09 5.16 16.66 5.29 16.27C5.42 15.88 5.85 15.66 6.24 15.8C9.96 17.04 14.05 17.04 17.77 15.8C18.16 15.67 18.59 15.88 18.72 16.27C18.84 16.67 18.63 17.09 18.24 17.22Z" fill="#2D3291"/>
    </svg>
    <Text 
    color='#2D3291'
    ml={5}
    fontWeight={700}
    >ideal Price</Text>
</Flex>
<Flex
    mt={15}
>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM17.85 14.1C17.81 14.19 17.76 14.27 17.69 14.34L14.65 17.38C14.5 17.53 14.31 17.6 14.12 17.6C13.93 17.6 13.74 17.53 13.59 17.38C13.3 17.09 13.3 16.61 13.59 16.32L15.35 14.56H6.85C6.44 14.56 6.1 14.22 6.1 13.81C6.1 13.4 6.44 13.06 6.85 13.06H17.16C17.26 13.06 17.35 13.08 17.45 13.12C17.63 13.2 17.78 13.34 17.86 13.53C17.92 13.71 17.92 13.92 17.85 14.1ZM17.15 10.93H6.85C6.75 10.93 6.66 10.91 6.56 10.87C6.38 10.79 6.23 10.65 6.15 10.46C6.07 10.28 6.07 10.07 6.15 9.89C6.19 9.8 6.24 9.72 6.31 9.65L9.35 6.61C9.64 6.32 10.12 6.32 10.41 6.61C10.7 6.9 10.7 7.38 10.41 7.67L8.66 9.43H17.16C17.57 9.43 17.91 9.77 17.91 10.18C17.91 10.59 17.57 10.93 17.15 10.93Z" fill="#64BB6A"/>
</svg>
    <Text
    color='#64BB6A'
    ml={5}
    fontWeight={700}
    >Market Price</Text>
</Flex>
<Flex
mt={15}
>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM8.47 10.98C8.76 10.69 9.24 10.69 9.53 10.98L11.25 12.7V6.51C11.25 6.1 11.59 5.76 12 5.76C12.41 5.76 12.75 6.1 12.75 6.51V12.7L14.47 10.98C14.76 10.69 15.24 10.69 15.53 10.98C15.82 11.27 15.82 11.75 15.53 12.04L12.53 15.04C12.46 15.11 12.38 15.16 12.29 15.2C12.2 15.24 12.1 15.26 12 15.26C11.9 15.26 11.81 15.24 11.71 15.2C11.62 15.16 11.54 15.11 11.47 15.04L8.47 12.04C8.18 11.75 8.18 11.28 8.47 10.98ZM18.24 17.22C16.23 17.89 14.12 18.23 12 18.23C9.88 18.23 7.77 17.89 5.76 17.22C5.37 17.09 5.16 16.66 5.29 16.27C5.42 15.88 5.84 15.66 6.24 15.8C9.96 17.04 14.05 17.04 17.77 15.8C18.16 15.67 18.59 15.88 18.72 16.27C18.84 16.67 18.63 17.09 18.24 17.22Z" fill="#41A3DD"/>
</svg>
    <Text
        color='#41A2DC'
        ml={5}
        fontWeight={700}
>Quick Sell</Text>
</Flex>
</Flex>
<Flex 
align='flex-end'
justifyContent='space-between'
flexDir='column'>
<Text 
color='#2D3291'
fontWeight={700}
mt={15}
>589,787,25 SAR</Text>
<Text
color='#64BB6A'
fontWeight={700}
mt={15}
>567,103.13 SAR</Text>
<Text
color='#41A2DC'
fontWeight={700}
mt={15}
>533,076.94 SAR</Text>
</Flex>
</Flex>

<Flex 
w='100%'
// mb={20}
align='center'
flexDir='column'>
<Text
color='#2D3291'
fontSize={fontTitl.titleMedim_d}
fontWeight={700}
mt={20}
>Rate the Service</Text>
<Button
mt={27}
w='100%'
borderRadius='0.5em'
background='#2D3291'
border='none'
color='#fff'
p={10}

>Download Report</Button>
</Flex>
</Box>




<Flex 
h='641px'
w={window.innerWidth < 960 ? '100%' :'50%'}
p={5}
position='relative'
top={12}
m={20}
flexDir='column'>
<Flex 
w='100%'
mb={30}
display={window.innerWidth < 960 ? 'none' :'flex'}
// border='solid 2px #000'
flexDir='column'
>
<Avatar_advertins />
</Flex>
<Box
background='#fff'
h='325px'
borderRadius='10px'
// h='32vh'
p={padding}
>
    <Text
    fontWeight={700}
    fontSize={fontTitl.titleMedim}
    ml={10}
    pl={padding -7}
    >Rate the Service</Text>
    <Text
    color={color.colorSub}
    fontSize={fontTitl.titlesub}
    mb={10}
    ml={10}
    pl={padding -7}
    >Please rate the service to get better experience!</Text>
    <Flex 
    background='#F6F7F9'
    // border='solid 2px #000'
    height='50%'
    flexDir='column'
    justifyContent='space-between'
    borderRadius='10px'
    pl={padding}
    >
        <Text
        mt={10}
        // ml={10}
        >Comments</Text>
        <Flex
        mt={10}
        mb={20}
        // ml={10}
        >
        <Flex 
        // border='solid 2px #000'
        w='60%'>
        {/* <div  className="form-floating">
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{minWidth:'100%', height: "100px"}}></textarea>
            <label for="floatingTextarea2">write the comments her to help us</label>
        </div> */}
        <form style={{width:'100%'}} class="form-floating">
        <input style={{height:'70px'}} type="email" class="form-control" id="floatingInputValue"  />
        <label for="floatingInputValue">write the comments her to help us</label>
        </form>
        </Flex>
        <Flex 
        justify='center'
        align='center'
        // border='solid 3px #000'
        w='30%'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 36 36" fill="none">
            <path d="M20.0937 6.70913L22.3214 10.7378C22.6267 11.2908 23.3928 11.8161 24.0227 11.8871L27.7727 12.3585C30.1737 12.6551 30.7928 14.3591 29.1588 16.1438L26.375 19.1675C25.9103 19.6742 25.669 20.6408 25.8557 21.3043L26.8312 24.8641C27.5984 27.6745 26.1394 28.8394 23.5754 27.459L19.9937 25.5302C19.3414 25.1776 18.3052 25.2289 17.6924 25.6248L14.2827 27.8317C11.8419 29.4092 10.2887 28.3707 10.8243 25.5093L11.5102 21.8879C11.6382 21.211 11.3312 20.2663 10.8245 19.8016L7.78428 17.0133C6.01 15.3732 6.48727 13.6252 8.85158 13.1296L12.5433 12.3585C13.1663 12.2232 13.8883 11.6521 14.1418 11.071L16.0332 6.8658C17.067 4.60013 18.8909 4.52874 20.0937 6.70913Z" fill="#F5A200"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 36 36" fill="none">
            <path d="M20.0937 6.70913L22.3214 10.7378C22.6267 11.2908 23.3928 11.8161 24.0227 11.8871L27.7727 12.3585C30.1737 12.6551 30.7928 14.3591 29.1588 16.1438L26.375 19.1675C25.9103 19.6742 25.669 20.6408 25.8557 21.3043L26.8312 24.8641C27.5984 27.6745 26.1394 28.8394 23.5754 27.459L19.9937 25.5302C19.3414 25.1776 18.3052 25.2289 17.6924 25.6248L14.2827 27.8317C11.8419 29.4092 10.2887 28.3707 10.8243 25.5093L11.5102 21.8879C11.6382 21.211 11.3312 20.2663 10.8245 19.8016L7.78428 17.0133C6.01 15.3732 6.48727 13.6252 8.85158 13.1296L12.5433 12.3585C13.1663 12.2232 13.8883 11.6521 14.1418 11.071L16.0332 6.8658C17.067 4.60013 18.8909 4.52874 20.0937 6.70913Z" fill="#F5A200"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 36 36" fill="none">
            <path d="M20.0937 6.70913L22.3214 10.7378C22.6267 11.2908 23.3928 11.8161 24.0227 11.8871L27.7727 12.3585C30.1737 12.6551 30.7928 14.3591 29.1588 16.1438L26.375 19.1675C25.9103 19.6742 25.669 20.6408 25.8557 21.3043L26.8312 24.8641C27.5984 27.6745 26.1394 28.8394 23.5754 27.459L19.9937 25.5302C19.3414 25.1776 18.3052 25.2289 17.6924 25.6248L14.2827 27.8317C11.8419 29.4092 10.2887 28.3707 10.8243 25.5093L11.5102 21.8879C11.6382 21.211 11.3312 20.2663 10.8245 19.8016L7.78428 17.0133C6.01 15.3732 6.48727 13.6252 8.85158 13.1296L12.5433 12.3585C13.1663 12.2232 13.8883 11.6521 14.1418 11.071L16.0332 6.8658C17.067 4.60013 18.8909 4.52874 20.0937 6.70913Z" fill="#F5A200"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 36 36" fill="none">
            <path d="M20.0937 6.70913L22.3214 10.7378C22.6267 11.2908 23.3928 11.8161 24.0227 11.8871L27.7727 12.3585C30.1737 12.6551 30.7928 14.3591 29.1588 16.1438L26.375 19.1675C25.9103 19.6742 25.669 20.6408 25.8557 21.3043L26.8312 24.8641C27.5984 27.6745 26.1394 28.8394 23.5754 27.459L19.9937 25.5302C19.3414 25.1776 18.3052 25.2289 17.6924 25.6248L14.2827 27.8317C11.8419 29.4092 10.2887 28.3707 10.8243 25.5093L11.5102 21.8879C11.6382 21.211 11.3312 20.2663 10.8245 19.8016L7.78428 17.0133C6.01 15.3732 6.48727 13.6252 8.85158 13.1296L12.5433 12.3585C13.1663 12.2232 13.8883 11.6521 14.1418 11.071L16.0332 6.8658C17.067 4.60013 18.8909 4.52874 20.0937 6.70913Z" fill="#F5A200"/>
            </svg>
       
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 36 36" fill="none">
            <path d="M20.0937 6.70913L22.3214 10.7378C22.6267 11.2908 23.3928 11.8161 24.0227 11.8871L27.7727 12.3585C30.1737 12.6551 30.7928 14.3591 29.1588 16.1438L26.375 19.1675C25.9103 19.6742 25.669 20.6408 25.8557 21.3043L26.8312 24.8641C27.5984 27.6745 26.1394 28.8394 23.5754 27.459L19.9937 25.5302C19.3414 25.1776 18.3052 25.2289 17.6924 25.6248L14.2827 27.8317C11.8419 29.4092 10.2887 28.3707 10.8243 25.5093L11.5102 21.8879C11.6382 21.211 11.3312 20.2663 10.8245 19.8016L7.78428 17.0133C6.01 15.3732 6.48727 13.6252 8.85158 13.1296L12.5433 12.3585C13.1663 12.2232 13.8883 11.6521 14.1418 11.071L16.0332 6.8658C17.067 4.60013 18.8909 4.52874 20.0937 6.70913Z" fill="#F5A200"/>
            </svg>
           
        </Flex>

        </Flex>
    </Flex>
    <Button
        mt={45}
    w='100%'
    borderRadius='0.5em'
    background='#2D3291'
    border='none'
    color='#fff'
    p={10}

    >Rate Now</Button>
</Box>
</Flex>

</Flex>



{/* view pdf */}
        <Flex 
        // mt={30}
        mb={40}
        position='relative'
        top={window.innerWidth < 960 ? -290 : -20}
        p={10}
        // border='solid 2px #000'
        w={window.innerWidth < 960 ? '97%' :'80%'}
        h={window.innerWidth < 960 ?  '700px'   : '2300px' }
        overflow='hidden'
        backgroundColor='#fff'
        borderRadius='10px'
        flexDir='column'
        m='auto'
        >

        <Flex justifyContent='space-between'>
            <Flex
            flexDir='column'
            m={10}
            >
                <Text
                fontSize={fontTitl.titleHome}
                fontWeight={700}
                >Review Report</Text>
                <Text
                color={color.colorSub}
                fontSize={fontTitl.titlesub}
                >Please rate the service to get better experience!</Text>
            </Flex>
            <Flex m={10} justifyContent='space-around'>
            <Link display='flex' href={pdfURL}>
                <Text mr={10}>print</Text>
              
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M7 5C7 3.34 8.34 2 10 2H14C15.66 2 17 3.34 17 5C17 5.55 16.55 6 16 6H8C7.45 6 7 5.55 7 5Z" fill="#292D32"/>
                <path d="M17.75 15C17.75 15.41 17.41 15.75 17 15.75H16V19C16 20.66 14.66 22 13 22H11C9.34 22 8 20.66 8 19V15.75H7C6.59 15.75 6.25 15.41 6.25 15C6.25 14.59 6.59 14.25 7 14.25H17C17.41 14.25 17.75 14.59 17.75 15Z" fill="#292D32"/>
                <path d="M18 7H6C4 7 3 8 3 10V15C3 17 4 18 6 18H6.375C6.72018 18 7 17.7202 7 17.375C7 17.0298 6.71131 16.7604 6.38841 16.6384C5.72619 16.3882 5.25 15.7453 5.25 15C5.25 14.04 6.04 13.25 7 13.25H17C17.96 13.25 18.75 14.04 18.75 15C18.75 15.7453 18.2738 16.3882 17.6116 16.6384C17.2887 16.7604 17 17.0298 17 17.375C17 17.7202 17.2798 18 17.625 18H18C20 18 21 17 21 15V10C21 8 20 7 18 7ZM10 11.75H7C6.59 11.75 6.25 11.41 6.25 11C6.25 10.59 6.59 10.25 7 10.25H10C10.41 10.25 10.75 10.59 10.75 11C10.75 11.41 10.41 11.75 10 11.75Z" fill="#292D32"/>
                </svg>
                </Link>
            </Flex>
        </Flex>   
        
        <PdfViewer  pdfURL={pdfURL} />
        {/* <embed 
        style={{ borderRadius:'10px'}} 
        src={pdfURL} id="pdfViewer" type="application/pdf" 
        width="100%" height="2000px"
        // color='#fff' */}
        {/* /> */}

        </Flex>

    </Flex>
    <Footer />
    </div>
    )
}
