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


export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    localStorage.removeItem("user");
    document.location.reload();
  }


  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper className="flexCenter animate whiteBg" style={y > 100 ? { height: "60px" } : { height: "80px" }}>
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="home" smooth={true}>

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
                <li className="semiBold font15 pointer" style={{ backgroundColor: "#21207F", width: "150px", height: "40px", borderRadius: "10px", textAlign: "center" }}>
                  <NavLink to="/login" style={{ padding: "10px 30px 10px 0", color: "white", margin: "0 auto", display: "block" }}>
                    دخول/تسجيل
                  </NavLink>
                </li>
            }
            {/* <a href="/" style={{ padding: "10px 30px 10px 0" , color:"white" ,margin: "0 auto", display:"block"}}>
                دخول /تسجيل
              </a> */}
            <li className="semiBold font15 pointer flexCenter">
              <a href="/" className="radius8 lightBg" style={{ padding: "10px 15px" }}>
                English
              </a>
            </li>
            {/* <LogoIcon /> */}
            {/* <h1 style={{ marginLeft: "15px" }} className="font20 extraBold">
              fanatic
            </h1> */}
          </Link>
          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">

            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="services" spy={true} smooth={true} offset={-80}>
                خدماتنا
              </Link>
            </li>
            {/* <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="projects" spy={true} smooth={true} offset={-80}>
                Projects
              </Link>
            </li> */}
            {/* <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="blog" spy={true} smooth={true} offset={-80}>
                Blog
              </Link>
            </li> */}
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="pricing" spy={true} smooth={true} offset={-80}>
                من نحن
              </Link>
            </li>

             


            {/* <li className="semiBold font15 pointer">

              <NavLink to="checkout" style={{ padding: "10px 15px" }} spy={true} smooth={true} offset={-80}>
                checkouts
              </NavLink>
            </li> */}


            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="contact" spy={true} smooth={true} offset={-80}>
                اتصل بنا
              </Link>
            </li>

            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="/" spy={true} smooth={true} offset={-80}>
                الصفحة الرئيسية
              </Link>
            </li>
          </UlWrapper>
          <UlWrapperRight className="flexNullCenter">
            <LogoIcon />
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
          </UlWrapperRight>
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
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;


