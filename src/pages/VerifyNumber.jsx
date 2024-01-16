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

          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
            inputStyle={{
              width: "50px",
              height: "50px"
            }}
          />

          {/* <input style={{borderRadius:"5px", width:"391px" ,  height:"43px" , background: "rgba(217, 217, 217, 0.00)",border: "1px solid #EEE", }} type="text" /> */}

          <div className="d-flex justify-content-center align-items-center">
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
    </>
  );
}


const Wrapper = styled.section`
  width: 100%;
`;


const EavaluateButton = styled.button`
 color:#FFF;
 width:200px;
//  padding: 20px 188px; border-radius: 8px;
 border-radius: 8px;
 background: #2D3291;
 color: #FFF;
 margin-top:20px;


    
`;
