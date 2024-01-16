import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";
import loginImage from "../assets/img/loginImage.png";
import { Loading } from "../components/Elements/Loading";
import { requestOTP } from "../redux/features/dataSlice";



export default function Login() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [phone, setPhone] = useState("");
  const [updated, setUpdated] = useState(false);
  const status = useSelector(state => state.status)
  const error = useSelector(state => state.error)

  const submitOTP = async () => {
    await dispatch(requestOTP({ phone }));
    setUpdated(true);
    if (status === "succeeded") {
      toast.success("OTP sent successfully");
      history(`/verify-number?phone=${phone}`);
    } else if (status === "failed") {
      toast.error(error.message)
    }


  }

  useEffect(() => {
    // if (status === "succeeded") {
    //   toast.success("OTP sent successfully")
    //   history(`/verify-number?phone=${phone}`);
    // }
    // else if (status === "failed") {
    //   toast.error(error.message)
    // }

    return () => {

    }
  }, [updated])



  return (
    <>
      <ToastContainer />
      <Wrapper className="row">

        <div className="col-8">
          <img src={loginImage} alt="" />

        </div>

        <div className="col-4" style={{ margin: "auto" }}>
          <p style={{ fontSize: "16px", fontWeight: "400", color: "#2D3291" }}>Let’s explore beyond the world with Car Trust services,</p>
          <p style={{ fontSize: "40px", fontWeight: "600", color: "#000000" }}>Hello, Welcome Back!</p>
          <br />
          <p style={{ fontSize: "16px", fontWeight: "400", color: "#2D3291" }}>Phone number</p>

          <input onChange={(e) => setPhone(e.target.value)} style={{ borderRadius: "5px", width: "391px", height: "43px", background: "rgba(217, 217, 217, 0.00)", border: "1px solid #EEE", }} type="text" />

          {
            status === "loading" ?
              <Loading />
              :
              <EavaluateButton href="" onClick={submitOTP}>Login</EavaluateButton>
          }
          <p style={{ fontSize: "16px", fontWeight: "400", color: "#2D3291" }}>Dont have an account yet? Creat an account </p>
        </div>
      </Wrapper>
    </>
  );
}


const Wrapper = styled.section`
  width: 100%;
`;


const EavaluateButton = styled.button`
 color:#FFF;
 width: 400px;
 padding: 20px 188px; border-radius: 8px;
 border-radius: 8px;
 background: #2D3291;
 color: #FFF;
 margin-top:20px;


    
`;
