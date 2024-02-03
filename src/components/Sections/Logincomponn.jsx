import React,{useState} from "react";
import { ToastContainer, toast } from "react-toastify";
import { Loading } from "../Elements/Loading";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import loginImage from "../../assets/img/loginImage.png";
import { requestOTP,verifyOTP } from "../../redux/features/dataSlice";

import OtpInput from 'react-otp-input';

export default function Logincomponn({setCansl}) {
  const status = useSelector(state => state.status)

  const dispatch = useDispatch();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState('');

  const [updated, setUpdated] = useState(false);
  const data = useSelector(state => state.user);
  const error = useSelector(state => state.error)
  const submitOTP = async () => {
    await dispatch(requestOTP({ phone }));
    if (status === "succeeded") {
      toast.success("OTP sent successfully");
      setUpdated(true);

      // history(`/verify-number?phone=${phone}`);
      if (status === "succeeded" && data?.first_name) {
        localStorage.setItem("user", JSON.stringify(data));
        toast.success("Logged in successfully")
        document.location.reload();
        setUpdated(true);

      }
      else if (status === "failed") {
        toast.error(error.message)
        setUpdated(false);

      }
    } else if (status === "failed") {
      toast.error(error.message)
    }
  }


  const submitOTPVerfy = async () => {
    await dispatch(verifyOTP({ otp, phone }));
    if (status === "succeeded" && data?.first_name) {
      localStorage.setItem("user", JSON.stringify(data));
      toast.success("Logged in successfully")
      setCansl(false);
      document.location.reload();
    }
    else if (status === "failed") {
      toast.error(error.message)
    }

  }

  return (
    <>
    <section
    // onClick={()=>setCansl(false)}
      className="topics-section "
      style={{
        // display: "none",
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "transparent",
        backgroundColor: "#00000099",
        zIndex: 9999,
      }}
      id="exampleModalsfg"
    >
      <div
        // className="modal-dialog"
        style={{
          // border:'solid 2px #000',
          // width:window.innerWidth > 960? "150vh" : '50vh',
          width: "90%",
          height: "50%",
          // padding: "5%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10px",
          // backgroundColor: "#fff",
          // alignItems:'center',

          alignSelf: "center",
        }}
      >

      {updated ?  
     <div 
     onClick={()=>setCansl(true)}

     className="col-4 login-continer" style={{ margin: "auto" }}>
     <p style={{ fontSize: "16px", fontWeight: "400", color: "#2D3291" }}>دعنا نستكشف ما وراء العالم من خلال خدمات Car Trust،</p>
     <p style={{ fontSize: "30px", fontWeight: "600", color: "#000000" }}>مرحبًا بعودتك!</p>
     <br />
     <p className="title-sub-login" >ادخل رمز التحقق </p>

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
     <div className="d-flex justify-content-center align-items-center " >
       <button 
           style={{
             margin:'10px',
             width:'30%',
             borderRadius:'10px',
             backgroundColor:'#2D3291',
             color:'#fff'
           }}
           onClick={()=>{
            setCansl(false);
            // alert('hllow')
          }}
           >الغاء</button>
       {
         status === "loading" ?
           <Loading />
           :

           <button href="" 
           style={{
             margin:'10px',
             width:'30%',
             borderRadius:'10px',
             backgroundColor:'#2D3291',
             color:'#fff'
           }}
           onClick={submitOTPVerfy}
           >Verify</button>
       }
     </div>
     <p style={{ fontSize: "16px", fontWeight: "400", color: "#2D3291" }}>Dont have an account yet? Creat an account </p>
   </div>
      :
          <div
          // onClick={() => {
          //   setCansl(false);
          // }}
              style={{
                // border:'solid 2px',
                width:'100%',
                textAlign: "center",
                height: "100%",
              }}
              className="modal-content"
            >
            <div 
            className="col-4 login-continer" style={{ margin: "auto" }}>
            <button
              onClick={()=>{
                setCansl(false);
                // alert('hllow')
              }}
              style={{
                position:'relative',
                left:'50%',
                // border: "solid 2px #000",
                // alignSelf: "flex-end",
                width: "5vh",
                height: "4vh",
                zIndex:999
              }}
              // type="a"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
              <div>
              <p style={{ fontSize: "16px", fontWeight: "400", color: "#2D3291" }}>دعنا نستكشف ما وراء العالم من خلال خدمات Car Trust،</p>
              <p style={{ fontSize: "30px", fontWeight: "600", color: "#000000" }}>مرحبًا بعودتك!</p>
              <br />
              <p className="title-sub-login" >رقم الجوال</p>
              <input 
                  onClick={()=>setCansl(true)}
              style={{width:'70%'}} onChange={(e) => setPhone(e.target.value)}  type="text" />
              {
                status === "loading" ?
                  <Loading />
                  :
                  <button href="" 
                  style={{
                    margin:'10px',
                    width:'30%',
                    borderRadius:'10px',
                    backgroundColor:'#2D3291',
                    color:'#fff'
                  }}
                  onClick={submitOTP}
                  >Login</button>
              }
              <p className="title-sub-login">لا تملك حسابا حتى الآن؟ إنشاء حساب </p>
              </div>
              </div>
            </div>
      }



      </div>


    </section>
    </>
  );
};
