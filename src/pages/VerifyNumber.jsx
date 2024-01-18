import { default as React, useEffect, useState } from "react";
import OtpInput from 'react-otp-input';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import loginImage from "../assets/img/loginImage.png";
import { Loading } from "../components/Elements/Loading";
import { verifyOTP } from "../redux/features/dataSlice";



export default function Login() {
  const [otp, setOtp] = useState('');
  const history = useNavigate();
  const phone = window.location.search.split("=")[1];
  const dispatch = useDispatch();
  const [updated, setUpdated] = useState(false);
  const status = useSelector(state => state.status)
  const data = useSelector(state => state.user);
  const error = useSelector(state => state.error);

  const submitOTP = async () => {
    await dispatch(verifyOTP({ otp, phone }));
    setUpdated(true);
  }

  useEffect(() => {
    if (status === "succeeded" && data?.first_name) {
      localStorage.setItem("user", JSON.stringify(data));
      toast.success("Logged in successfully")
      history("/");
      document.location.reload();
    }
    else if (status === "failed") {
      toast.error(error.message)
    }

    return () => {

    }
  }, [updated])

  return (
    <div className="continer-login-home">
      <ToastContainer />
      <Wrapper className="row">

      <div className="col-8 img-login" >
          <img src={loginImage} alt="" />

        </div>

        <div className="col-4 login-continer" style={{ margin: "auto" }}>
          <p style={{ fontSize: "16px", fontWeight: "400", color: "#2D3291" }}>Let’s explore beyond the world with Car Trust services,</p>
          <p style={{ fontSize: "40px", fontWeight: "600", color: "#000000" }}>Hello, Welcome Back!</p>
          <br />
          <p className="title-sub-login" >Phone number</p>

          <OtpInput
       containerStyle={'otpInput'}
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
            inputStyle={{
              width: "50px",
              height: "50px",
          
              margin:'auto',

              borderRadius:'8px'
            }}
          />

          {/* <input style={{borderRadius:"5px", width:"391px" ,  height:"43px" , background: "rgba(217, 217, 217, 0.00)",border: "1px solid #EEE", }} type="text" /> */}

          <div className="d-flex justify-content-center align-items-center " >
            <EavaluateButton href="">Cancel</EavaluateButton>
            {
              status === "loading" ?
                <Loading />
                :
                <EavaluateButton href="" onClick={submitOTP}>Verify</EavaluateButton>
            }
          </div>
          <p style={{ fontSize: "16px", fontWeight: "400", color: "#2D3291" }}>Dont have an account yet? Creat an account </p>
        </div>
      </Wrapper>
    </div>
  );
}


const Wrapper = styled.section`
  width: 100%;
  display:flex;
  overflow:hadden;
  @media(max-width:950px){
    
    // border: solid 16px #000;
  }
`;


const EavaluateButton = styled.button`
 color:#FFF;
 width: 100rem;
 position:relative;
 right:60px;
 padding: 10px 18px; 
 border-radius: 8px;
 background: #2D3291;
 color: #FFF;
 margin-top:20px;
 margin-left:35px;
//  margin-right35px

@media(max-width:960px){
  // position: absolute;
  // display:none;
  right:20px;
 width:100%;
 text-align:center;
 padding: 0 ; 
 border-radius: 5px;
 margin-top:20px;
//  margin:15px ;

}
    
`;
