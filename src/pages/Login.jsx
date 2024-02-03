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
    // style={{overflow:'hidden'}}
    <div className="continer-login-home">
      <ToastContainer />
      <Wrapper className="row">
        <div className="col-8 img-login" >
          <img src={loginImage} alt="" />
        </div>
        <div className="col-4 login-continer" style={{ margin: "auto" }}>
          <p className="title-sub-login" >Let’s explore beyond the world with Car Trust services,</p>
          <p className="title-login" >Hello, Welcome Back!</p>
          <br />
          <p className="title-sub-login" >Phone number</p>

          <input className="input-login" onChange={(e) => setPhone(e.target.value)}  type="text" />

          {
            status === "loading" ?
              <Loading />
              :
              <EavaluateButton href="" onClick={submitOTP}>Login</EavaluateButton>
          }
          <p className="title-sub-login">Dont have an account yet? Creat an account </p>
        </div>
      </Wrapper>
    </div>
  );
}


const Wrapper = styled.section`
  width: 100%;
  overflow:hadden;
  // @media(max-width:950px){
    
  //   border: solid 16px #000;
  // }
`;


const EavaluateButton = styled.button`
 color:#FFF;
 width: 400px;
 padding: 20px 188px; 
 border-radius: 8px;
 background: #2D3291;
 color: #FFF;
 margin-top:20px;

@media(max-width:960px){
 width:100%;
 text-align:center;
 padding: 0 ; 
 border-radius: 5px;

}
    
`;
