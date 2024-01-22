import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
// Components
import Backdrop from "../Elements/Backdrop";
// Assets
import { useDispatch } from "react-redux";
import LogoIcon from "../../assets/svg/Logo";
import Logopng from "../../assets/img/logo.png";
import { logout } from "../../redux/features/dataSlice";
import {useSaction_navbar} from './seaction_center_nav.js'
import {
  Flex,
  Avatar,
  Icon,
  Input,
  InputGroup,
} from "@chakra-ui/react";

import {
  FiCreditCard,
  FiSearch,
  FiBell,
  FiHeart,
  FiGitPullRequest,
  FiSettings,
  FiMenu,
} from "react-icons/fi";






export default function TopNavbarDashbord({kind}) {
  const [y, setY] = useState(window.scrollY);
  const [width, setwidth] = useState(window.innerWidth);
  const [sidebarOpen, toggleSidebar] = useState(false);
  const Seaction_navber_center = useSaction_navbar(kind)
  // const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    // console.log(kind,)
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  // useEffect(()=>{
  //   const handleResize = () => {
  //    if (window.innerWidth < 960){
  //    toggleSidebar(true)}
     
  //   };
  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  
  // },[window.innerWidth])
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
            <div className="dropdown-dashboard">
              <a className="nav-link tm-nav-link-dashboard" href="#testimonials">
                    <Icon 
                        _hover={{
                          color:'#fff'
                        }}
                        display={["flex", "flex", "none", "flex", "flex"]}
                        as={FiBell}
                        fontSize="1.7em"
                        color={kind === true ? '#fff': null}
                        className="active-icon-nave"/>
              </a>
              <div className="dropdown-content-dashboard">
                  <a href="#">Tow</a>
                  <a href="#">One</a>
                  
              </div>
              </div>
            </li>
            <li className="semiBold font15 pointer">
            <div className="dropdown-dashboard">
              <a className="nav-link tm-nav-link-dashboard" href="#testimonials">
                    <Icon 
                        _hover={{
                          color:'#fff'
                        }}
                        display={["flex", "flex", "none", "flex", "flex"]}
                        as={FiSettings}
                        fontSize="1.7em"
                        color={kind === true ? '#fff': null}
                        className="active-icon-nave"/>
              </a>
              <div className="dropdown-content-dashboard">
                  <a href="#">Tow</a>
                  <a href="#">One</a>
                  
              </div>
              </div>
            </li>
            <li className="semiBold font15 pointer" style={window.innerWidth < 800 ?{display:'none'}: null}>
            <div className="dropdown-dashboard">
              <Link  
                  _hover={{
                    color:'#fff'
                  }}
              className="nav-link tm-nav-link-dashboard active-icon-user" href="#testimonials">
    
                              <Avatar
              src="avata-1.jpg"/>
              </Link>
              <div className="dropdown-content-dashboard">
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
  // padding: 14px;
  padding-bottom: 24px;
  background:${kind === true ?  "#000"  : "#fff"};
  z-index: 999;
`;

  return (
    <>
      {/* <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} /> */}
      {/* {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />} */}
     
      <Wrapper  className="flexCenter animate whiteBg" style={y > 100 ? { height: "70px"  } : { height: "90px" }}>
       
        <NavInner
        
        style={{flexDirection:width < 960 ? 'row-reverse': 'row',
        // border:'solid 2px #000',
        width:`${width}.px`
      }}
        // style={{backgroundColor:kind === true ? '#333333' : '#fff' }}
        className="container flexSpaceCenter">
        
      

        <Flex 
          // border="solid 2px #000"
          align='center'
          position="relative"
          right={window.innerWidth > 960 ? '5%' : 0}
          // top='-1em'
          flexDir='row-reverse'
          justifyContent='space-around'
          // border="solid 3px #000"
          w={window.innerWidth < 960? '80%' : '8%'}
          h='10vh'
          >
          <div className="pointer"  >
            {/* <Icon  color={'#000'} as={FiMenu} className="dropdown" /> */}
            
            <Icon 
            onClick={() => toggleSidebar(!sidebarOpen)}
            // border="solid 8px #000"
            display={window.innerWidth < 960 ? 'flex' : 'none'}
            color={kind ? "#fff": '#000'}
                        // display={["flex", "flex", "none", "flex", "flex"]}
                        as={FiMenu}
                        fontSize="2em"
                        className="dropdown_dashbord"
                      />

        {sidebarOpen & width < 960 ? 
         <div style={{background:kind === true ? '#333333': '#fff'}} className="dropdown_navber_dashbord">
                 <Seaction_navber_center />

          </div>
         :null}
          </div>

             {/* <Avatar src={Logopng} w={120} /> */}
             <img src={Logopng} width={120} />
        </Flex>
        
  
 
  {/* <Flex className="dropdown_navber"> */}
              
{width > 960 ?
  <Seaction_navber_center />
  : 
  null
}

          
          {/* <Flex className="pointer" >
          {/* <Flex className="dropdown_navber"> */}
                 <Seaction_navber />

          {/* </Flex> */}
          {/* </Flex> */} 

     
 
        </NavInner>
      </Wrapper>
    </>
  );
}


const NavInner = styled.div`
  position: relative;
  // height: 100%;

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


