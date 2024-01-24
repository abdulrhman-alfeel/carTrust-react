import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
// Components
import Backdrop from "../Elements/Backdrop";
// Assets
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import united from '../../assets/img/united-kingdom.png';
import BurgerIcon from "../../assets/svg/BurgerIcon";
import LogoIcon from "../../assets/svg/Logo";
import { logout } from "../../redux/features/dataSlice";
import {useSaction_navbar} from './seaction_center_nav.js'
export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const Seaction_navber = useSaction_navbar(false)
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


  return (
    <>
      {/* <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} /> */}
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
     
      <Wrapper className="flexCenter animate whiteBg" style={y > 100 ? { height: "60px" } : { height: "80px" }}>
       
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter " to="home" smooth={true}>

            {
              user ?
                <>
                  <li className="semiBold font15 pointer" style={{ backgroundColor: "#21207F", width: "150px", height: "40px", borderRadius: "10px", textAlign: "center" }}>
                    <a href="/" onClick={logoutHandler} style={{ padding: "10px 30px 10px 0", color: "white", margin: "0 auto", display: "block" }}>
                      logout
                    </a>
                  </li>
                  <li className="semiBold font15 pointer" style={{ width: "150px", height: "20px", borderRadius: "10px", textAlign: "center" }}>
                    <a href="/" style={{ margin: "0 auto", display: "block", color: "black" }}>
                      {user.first_name} {user.last_name}
                    </a>
                  </li>
                </>
                :
                <li className="semiBold font15 pointer" style={{  width: "150px", height: "55px", borderRadius: "10px", textAlign: "center",padding:"5px" }}>
                  <NavLink
                   className='buttonamait_login'
                   to="/login" style={{
                     width:"10em",
                     height:"3em"
                    , padding:"8px", color: "white", margin: "0 auto", display: "block" }}>
                    دخول/تسجيل
                  </NavLink>
                </li>
            }
          
            <li className="semiBold font15 pointer flexCenter switch-lung">
              <a href="/" className="radius8 lightBg" style={{ padding: "10px 15px" }}>
                English
              </a>
              <a href="#whatwedo" class="text-center tm-down-arrow-link">
                <img src={united} alt="flags" 
                style={{
                  width:"25px",
                  borderRadius: "5px"}}/>
            </a>
            </li>
            {/* <LogoIcon /> */}
            {/* <h1 style={{ marginLeft: "15px" }} className="font20 extraBold">
              fanatic
            </h1> */}
          </Link>


         
          {sidebarOpen?
           <div className="pointer" >
          <div className="dropdown_navber">
                 <Seaction_navber />

          </div>
          </div>
          :
          null
          }
  
 

          <UlWrapper className="flexNullCenter ">
          <Seaction_navber  />
          </UlWrapper>

          <LogoIcon />
          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon  className="burgerIcon"/>
 
          </BurderWrapper>
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

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 44px;
  z-index: 999;
`;
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


