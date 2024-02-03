import React, { useEffect, useState } from "react";
import styled from "styled-components";
// Components
import Backdrop from "../Elements/Backdrop";
// Assets
import { useDispatch } from "react-redux";
import BurgerIcon from "../../assets/svg/BurgerIcon";
import LogoIcon from "../../assets/svg/Logo";
import {useSaction_navbar} from './seaction_center_nav.js'

import {
  Flex,
  Avatar,
  Icon,
  Input,
  Text,
  InputGroup,
} from "@chakra-ui/react";


import { changestat } from "../../redux/features/dataSlice";

import Logincomponn from "../Sections/Logincomponn";
import UsePage_user from "./user.jsx";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);

  const [sidebarOpen, toggleSidebar] = useState(false);
  const [loginIt, setLoginIt] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const Seaction_navber = useSaction_navbar(false);

  
  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  useEffect(()=>{
    console.log(user,'helow user')
    const handleResize = () => {
      let count =window.innerWidth;
    if (parseInt(count) >  1312){
      toggleSidebar(false)}
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  
  },[window.innerWidth])
  const dispatch = useDispatch();















  return (
    <>
      {/* <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} /> */}
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper className="flexCenter animate whiteBg" style={y > 100 ? { height: "60px" } : { height: "80px" }}>
        <NavInner 
        style={{
          width:'100%',
          // border:'solid 2px #000',
          justifyContent:'space-between',
          alignItems:'center',
          flexDirection:'row-reverse',
          }}
        className="container flexSpaceCenter">

{/* 888888888888888 */}

          {window.innerWidth > 960?
          <UsePage_user setLoginIt={setLoginIt}/>  
          :
          null
        }
          {sidebarOpen?
          <div className="dropdown_navber">
          <Seaction_navber />
          <Flex justify='right' >
          <UsePage_user setLoginIt={setLoginIt}/>  
          </Flex>
          </div>
          :
          null
          }
          <UlWrapper className="flexNullCenter ">
          <Seaction_navber  />
          </UlWrapper>
          <div
          style={{
            // position:'relative',
            // left:window.innerWidth < 1100? window.innerHeight > 960 ? '24%': '7%':0,
            Left:window.innerWidth > 1100 ? '100px' :'50px',
            width:window.innerWidth > 1100 ? '10%' : window.innerHeight > 960 ? '75%':'25%',
            // border:'solid 2px #000'
          }}
          >
          <LogoIcon />
          </div>
          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon  className="burgerIcon"/>

          </BurderWrapper>
      
        </NavInner>
      </Wrapper>
      {loginIt === true? 
        <Logincomponn setCansl={setLoginIt} />
        :null}
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  // padding: 44px;
  padding-left:10px;
  padding-right:10px;
  z-index: 9999;
`;
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
  @media (max-width:  1312px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;

  @media (max-width: 1312px) {
    display: none;
  }
`;
// const UlWrapperRight = styled.ul`
//   @media (max-width: 760px) {
//     display: none;
//   }
// `;


