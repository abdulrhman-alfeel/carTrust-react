import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-scroll";
import styled from "styled-components";
// Assets
import CloseIcon from "../../assets/svg/CloseIcon";
import LogoIcon from "../../assets/svg/Logo";
import { logout } from "../../redux/features/dataSlice";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  const user = JSON.parse(localStorage.getItem("user"));

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    localStorage.removeItem("user");
    document.location.reload();
  }

  return (
    <Wrapper className="animate darkBg" sidebarOpen={sidebarOpen}>
      <SidebarHeader className="flexSpaceCenter">
        <div className="flexNullCenter">
          <LogoIcon />

        </div>
        <CloseBtn onClick={() => toggleSidebar(!sidebarOpen)} className="animate pointer">
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

      <UlStyle className="flexNullCenter flexColumn">
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className=""
            style={{ padding: "10px 15px" }}
            to="home"
            spy={true}
            smooth={true}
            offset={-60}
          >
            الرئيسية
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className=""
            style={{ padding: "10px 15px" }}
            to="services"
            spy={true}
            smooth={true}
            offset={-60}
          >
            خدمات
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className=""
            style={{ padding: "10px 15px" }}
            to="contact"
            spy={true}
            smooth={true}
            offset={-60}
          >
            اتصل بنا
          </Link>
        </li>
      </UlStyle>
      <UlStyle className="flexSpaceCenter">
        <li className="semiBold font15 pointer">
          {
            user ?
              <>
                <a href="/" style={{ padding: "10px 30px 10px 0" }} className="">
                  {user.first_name} {user.last_name}
                </a>
                <a onClick={logoutHandler} href="/" style={{ padding: "10px 30px 10px 0" }} className="">
                  logout
                </a>
              </>
              :
              <a href="/" style={{ padding: "10px 30px 10px 0" }} className="">
                دخول/تسجيل
              </a>
          }
        </li>
        <li className="semiBold font15 pointer flexCenter">
          <a href="/" className="radius8 lightBg" style={{ padding: "10px 15px" }}>
            English
          </a>
        </li>
      </UlStyle>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${(props) => (props.sidebarOpen ? "0px" : "-400px")};
  z-index: 9999;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const SidebarHeader = styled.div`
  padding: 20px 0;
`;
const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`;
const UlStyle = styled.ul`
  padding: 40px;
  li {
    margin: 20px 0;
  }
`;
