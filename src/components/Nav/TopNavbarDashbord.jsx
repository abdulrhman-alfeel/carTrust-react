import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
// Components
import Backdrop from "../Elements/Backdrop";
import Sidebar from "../Nav/Sidebar";
// Assets
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import BurgerIcon from "../../assets/svg/BurgerIcon";
import LogoIcon from "../../assets/svg/Logo";
import { logout } from "../../redux/features/dataSlice";
import  united from '../../assets/img/united-kingdom.png'

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
  // Link,
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
  FiGitPullRequest,
  FiSettings,
} from "react-icons/fi";






export default function TopNavbarDashbord({kind}) {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  useEffect(()=>{
    const handleResize = () => {
      let count =window.innerWidth;
     console.log( window.innerWidth );
     if (parseInt(count) > 960){
     toggleSidebar(false)}
     
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  
  },[window.innerWidth])
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    localStorage.removeItem("user");
    document.location.reload();
  }
  const Seaction_navber =()=>{
    return(
      <Flex>
            <li className="semiBold font15 pointer">
            <div className="dropdown">
              <a className="nav-link tm-nav-link" href="#testimonials">
                    <Icon 
                        display={["flex", "flex", "none", "flex", "flex"]}
                        as={FiHeart}
                        fontSize="1.7em"
                        color={kind == true ? '#fff': null}
                        className="active-icon-nave"/>
              </a>
              <div className="dropdown-content">
                  <a href="#">Tow</a>
                  <a href="#">One</a>
                  
              </div>
              </div>
            </li>
            <li className="semiBold font15 pointer">
            <div className="dropdown">
              <a className="nav-link tm-nav-link" href="#testimonials">
                    <Icon 
                        display={["flex", "flex", "none", "flex", "flex"]}
                        as={FiBell}
                        fontSize="1.7em"
                        color={kind == true ? '#fff': null}
                        className="active-icon-nave"/>
              </a>
              <div className="dropdown-content">
                  <a href="#">Tow</a>
                  <a href="#">One</a>
                  
              </div>
              </div>
            </li>
            <li className="semiBold font15 pointer">
            <div className="dropdown">
              <a className="nav-link tm-nav-link" href="#testimonials">
                    <Icon 
                        display={["flex", "flex", "none", "flex", "flex"]}
                        as={FiSettings}
                        fontSize="1.7em"
                        color={kind == true ? '#fff': null}
                        className="active-icon-nave"/>
              </a>
              <div className="dropdown-content">
                  <a href="#">Tow</a>
                  <a href="#">One</a>
                  
              </div>
              </div>
            </li>
            <li className="semiBold font15 pointer" style={window.innerWidth < 800 ?{display:'none'}: null}>
            <div className="dropdown">
              <Link  className="nav-link tm-nav-link active-icon-user" href="#testimonials">
    
                              <Avatar
              src="avata-1.jpg"/>
              </Link>
              <div className="dropdown-content">
                  <a href="#">Tow</a>
                  <a href="#">One</a>
                  
              </div>
              </div>
            </li>
  

            {/* <li className="semiBold font15 pointer">

              <NavLink to="checkout" style={{ padding: "10px 15px" }} spy={true} smooth={true} offset={-80}>
                checkouts
              </NavLink>
            </li> */}


          
      </Flex>
    )
  } 
  const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 44px;
  background:${kind == true ?  "#000"  : "#fff"};
  z-index: 999;
`;

  return (
    <>
      {/* <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} /> */}
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
     
      <Wrapper  className="flexCenter animate whiteBg" style={y > 100 ? { height: "60px"  } : { height: "80px" }}>
       
        <NavInner
        // style={{backgroundColor:kind == true ? '#333333' : '#fff' }}
        className="container flexSpaceCenter">
        <LogoIcon />


         
          {sidebarOpen?
           <div className="pointer" >
          <div className="dropdown_navber">
                 <Seaction_navber />

          </div>
          </div>
          :
          null
          }
  
 

          <InputGroup
             w="30%"
             display={window.innerWidth < 900 ? 'none' : "flex"}
             p={5}
             border="1px solid rgba(195, 212, 233, 0.40)"
             borderWidth={1}
             background=" var(--Primary-0, #FFF)"
             borderRadius="2em"
             justifyContent="space-between"
          pointerEvents="none"
          children={<FiCreditCard color="gray.700" />}
        >
          <Flex>
          <Icon as={FiSearch}
           fontSize="1.7em"
           ml={5}
           mr={5}
          />
          <Input
          border="none"
            mt={2}
            mb={2}
            type="number"
            placeholder="Search something here"
          />
          </Flex>
          <Icon as={FiGitPullRequest}
          fontSize='1.7em'
          mr={10}
          color="#3D5278"
          />
        </InputGroup>
        

          
          <Flex className="pointer" >
          {/* <Flex className="dropdown_navber"> */}
                 <Seaction_navber />

          {/* </Flex> */}
          </Flex>
{/* 
          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon  className="burgerIcon"/>
 
          </BurderWrapper> */}
          {/* <UlWrapperRight > */}
            
            {/* <li className="semiBold font15 pointer">
              <a href="/" style={{ padding: "10px 30px 10px 0" }}>
                Log in
              </a>
            </li>
            <li className="semiBold font15 pointer flexCenter">
              <a href="/" className="radius8 lightBg" style={{ padding: "10px 15px" }}>
                Get Started
              </a>
            </li> */}
          {/* </UlWrapperRight> */}
        </NavInner>
      </Wrapper>
    </>
  );
}


const NavInner = styled.div`
  position: relative;
  height: 100%;

  // border:solid 2px #000
`
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 960px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;

  @media (max-width: 960px) {
    display: none;
  }
`;
// const UlWrapperRight = styled.ul`
//   @media (max-width: 760px) {
//     display: none;
//   }
// `;


