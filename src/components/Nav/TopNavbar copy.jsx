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
import { useNavigate } from "react-router-dom";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const history = useNavigate();
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
      <>
      
      <li className="semiBold font15 pointer">
            <div className="dropdown">
              <a className="nav-link tm-nav-link" href="#testimonials">سعر السيارات المستخدمة</a>
              <div className="dropdown-content">
                  <a href="#">سعر سيارتي </a>
                  <a href="#">سعر السيارات الجديدة</a>
                  <a href="#">السعر المستقبلي</a>
              </div>
              </div>
            </li>
            <li className="semiBold font15 pointer">
            <div className="dropdown">
              <a className="nav-link tm-nav-link" href="#testimonials">فحص السيارات</a>
              <div className="dropdown-content">
                  <a href="#">فحص السيارات </a>
                  <a href="#">انواع فحص السيارات</a>
                  
              </div>
              </div>
            </li>
            <li className="semiBold font15 pointer">
              <div className="dropdown">
              <a className="nav-link tm-nav-link" href="#testimonials">ضمان السيارات</a>
              <div className="dropdown-content">
                  <a href="#">اضمن لي سيارتي</a>
                  <a href="#">برنامج كارترستد</a>
                  <a href="#">تسوق مع كارترستد</a>
              </div>
              </div>
            </li>
            <li className="semiBold font15 pointer">
            <div className="dropdown">
              <a className="nav-link tm-nav-link" href="#testimonials">البيانات والأفكار</a>
              <div className="dropdown-content">
                  <a href="#">ساعدني اختار سيارة </a>
                  <a href="#">افضل السيارات</a>
                  <a href="#">مراجعة الخبراء</a>
                  <a href="#">السيارات الكهربائية</a>
                  <a href="#">برنامج جوائز كارترست</a>
                  <a href="#">آخر الاخبار</a>
              </div>
              </div>
            </li>
            <li className="semiBold font15 pointer">
            <div className="dropdown">
              <a className="nav-link tm-nav-link" href="#testimonials">الحلول التقنية</a>
              <div className="dropdown-content">
                  <a href="#">منصة الشركاء </a>
                  <a href="#">منصة العناية بالسيارة </a>
                  <a href="#">منصة المزاد</a>
                  <a href="#">فحص اضرار المركبات بالذكاء الاصطناعي</a>
                  <a href="#">منصة تقييم تكلفة تصليح المركبات الذكية</a>
                  <a href="#">الفحص الحراري لجسم المركبة</a>
              </div>
              </div>
            </li>
            <li className="semiBold font15 pointer">
            <div className="dropdown">
              <a className="nav-link tm-nav-link" href="#testimonials" onClick={()=> history(`/Dashboard`)}>لوحة التحكم</a>
              </div>
            </li>

            {/* <li className="semiBold font15 pointer">

              <NavLink to="checkout" style={{ padding: "10px 15px" }} spy={true} smooth={true} offset={-80}>
                checkouts
              </NavLink>
            </li> */}


            <li className="semiBold font15 pointer">
            <div className="dropdown">
              <a className="nav-link tm-nav-link" href="#testimonials">كارترست</a>
              <div className="dropdown-content">
                  <a href="#">ساعدني اختار سيارة </a>
                  <a href="#">قيمنا </a>
                  <a href="#">الاعتمادات</a>
                  <a href="#">سياسة الحيادية</a>
                  <a href="#">مواقعنا</a>
                  <a href="#">الخدمة المتنقلة</a>
                  <a href="#">الوظائف</a>
                  <a href="#">تواصل معنا</a>
              </div>
              </div>
            </li>

            <li className=" pointer tm-nav-link">
              <Link activeClass="active" href="/"  to="/" spy={true} smooth={true} offset={-80}>
                الصفحة الرئيسية
              </Link>
            </li>
      </>
    )
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
                <li className="semiBold font15 pointer" style={{ backgroundColor: "#21207F", width: "150px", height: "55px", borderRadius: "10px", textAlign: "center",padding:"5px" }}>
                  <NavLink to="/login" style={{ padding:"8px", color: "white", margin: "0 auto", display: "block" }}>
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
          <Seaction_navber />
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


