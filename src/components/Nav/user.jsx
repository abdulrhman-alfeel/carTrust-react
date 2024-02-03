import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/features/dataSlice";
import { Link } from "react-scroll";
import {
    Text,
  } from "@chakra-ui/react";
  import { NavLink } from "react-router-dom";
  import userimg from '../../assets/img/ICONIMGUSER.png'
  import united from '../../assets/img/united-kingdom.png';

export default function UsePage_user({setLoginIt}) {
    const dispatch = useDispatch();
    const history = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));
    const logoutHandler = () => {
        dispatch(logout());
        localStorage.removeItem("user");
        document.location.reload();
      }
    

    return (
        <Link className="pointer flexNullCenter " to="home" smooth={true}>
          {user ? (
            <>
              <li className="semiBold font15 pointer">
                <div style={{ textAlign: "center" }} className="dropdown-dashboard">
                  <Link
                    _hover={{
                      color: "#fff",
                    }}
                    className="nav-link tm-nav-link-dashboard active-icon-user"
                    href="#testimonials"
                  >
                    <img
                      width="200%"
                      style={{
                        position: "relative",
                        right: "9px",
                      }}
                      src={userimg}
                    />
                  </Link>
                  <div className="dropdown-content-dashboard_user">
                    <Text className="text_user" fontSize="1em" textAlign="center">
                      {" "}
                      {user.first_name} {user.last_name}
                    </Text>
                    <a href="#" onClick={() => history(`/dashboard`)}>
                      لوحة التحكم
                    </a>
                    <a href="#" onClick={logoutHandler}>
                      خروج المستخدم
                    </a>
                  </div>
                </div>
              </li>
            </>
          ) : (
            <li
              className="semiBold font15 pointer"
              style={{
                width: "150px",
                height: "55px",
                borderRadius: "10px",
                textAlign: "center",
                padding: "5px",
              }}
            >
              <NavLink
                className="buttonamait_login"
                style={{
                  width: "10em",
                  height: "3em",
                  padding: "8px",
                  color: "white",
                  margin: "0 auto",
                  display: "block",
                }}
                onClick={() => setLoginIt(true)}
              >
                دخول/تسجيل
              </NavLink>
            </li>
          )}
    
          <li className="semiBold font15 pointer flexCenter switch-lung">
            <a
              href="/"
              className="radius8 lightBg"
              style={{ padding: "10px 15px" }}
            >
              English
            </a>
            <a href="#whatwedo" class="text-center tm-down-arrow-link">
              <img
                src={united}
                alt="flags"
                style={{
                  width: "25px",
                  borderRadius: "5px",
                }}
              />
            </a>
          </li>
        </Link>
      );


}
