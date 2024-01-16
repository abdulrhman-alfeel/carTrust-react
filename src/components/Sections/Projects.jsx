import React from "react";
import styled from "styled-components";
// Components
import appstore from "../../assets/img/appstore.png";
import googleplay from "../../assets/img/googleplay.png";
import phone1 from "../../assets/img/phone1.png";
import service_graphic_element from "../../assets/img/service_graphic_element.png";
import service_icon_1 from "../../assets/img/service_icon_1.png";
import service_icon_2 from "../../assets/img/service_icon_2.png";
import service_icon_3 from "../../assets/img/service_icon_3.png";
import service_icon_4 from "../../assets/img/service_icon_4.png";

import ClientReviews from "../Elements/ClientReviews";

const h ="conic-gradient(from 164deg at 50% 50%, rgba(242, 243, 246, 0.85) 107.74920701980591deg, #E8E8E8 291.2724280357361deg)";
const b = "-0.186px 0.504px 5.037px 0px rgba(0, 0, 0, 0.01), -0.82px 2.216px 10.43px 0px rgba(0, 0, 0, 0.02), -2.014px 5.439px 20.8px 0px rgba(0, 0, 0, 0.03), -3.878px 10.475px 40.77px 0px rgba(0, 0, 0, 0.03), -6.526px 17.627px 74.963px 0px rgba(0, 0, 0, 0.04), -10.069px 27.196px 128px 0px rgba(0, 0, 0, 0.05)";

 const background =  "#2D3291";
const boxShadow ="-0.186px 0.504px 5.037px 0px rgba(0, 0, 0, 0.01), -0.82px 2.216px 10.43px 0px rgba(0, 0, 0, 0.02), -2.014px 5.439px 20.8px 0px rgba(0, 0, 0, 0.03), -3.878px 10.475px 40.77px 0px rgba(0, 0, 0, 0.03), -6.526px 17.627px 74.963px 0px rgba(0, 0, 0, 0.04), -10.069px 27.196px 128px 0px rgba(0, 0, 0, 0.05)";





// Assets

export default function Projects() {
  return (
    <Wrapper>
       <GetService className="row">
        <GetServiceTitle className="col-12">
          كيف تحصل على خدمتك؟
        </GetServiceTitle>
        <GetServiceDescription className="col-12">
          <GetServiceDescriptionText >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem nemo, amet beatae voluptates incidunt possimus expedita facere quod alias animi natus labore blanditiis qui facilis ex eos est obcaecati reprehenderit?</GetServiceDescriptionText>
        </GetServiceDescription>
        
             <GetServiceColumn className="col-sm-12 col-md-12 col-lg-3">

<GetServiceIcon style={{background: h , boxShadow:b}}>                
   <img  style={{marginTop:"25px"}}src={service_icon_1} alt="" />
</GetServiceIcon>
                <h2>title</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </GetServiceColumn>
             <GetServiceColumn  className="col-sm-12 col-md-12 col-lg-3">
              <GetServiceIcon style={{background: background , boxShadow:boxShadow}}>
              <img style={{marginTop:"25px"}} src={service_icon_2} alt="" />

                </GetServiceIcon>
                <h2>title</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </GetServiceColumn>
             <GetServiceColumn className="col-sm-12 col-md-12 col-lg-3">
             <GetServiceIcon style={{background: h , boxShadow:b}}>
             <img  style={{marginTop:"25px"}} src={service_icon_3} alt="" />
             </GetServiceIcon>

                <h2>title</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </GetServiceColumn>
             <GetServiceColumn className="col-sm-12 col-md-12 col-lg-3">
             <GetServiceIcon style={{background: h , boxShadow:b}}>
             <img style={{marginTop:"25px"}} src={service_icon_4} alt="" />

             </GetServiceIcon>

                <h2>title</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </GetServiceColumn>
       </GetService>


       <PhoneApplication className="row">
      
             <AddLeft className="col-sm-12 col-md-6">
                 <ImgWrapper className="phone-images">
                  <img  className="phone-image-1"  src={phone1} alt="add" />
                  <img className="phone-image-2"  src={service_graphic_element} alt="add" />
                  {/* <img className="phone-image-2" src={phone2} alt="add" /> */}
                </ImgWrapper>
             </AddLeft>

            <AddRight className="col-sm-12 col-md-6">
              <DownloadAppWrapper>
              <DownloadAppTitle className="extraBold font40">حمل التطبيق الان  <br/>واستمتع بالعروض</DownloadAppTitle>
              <p style={{color:"white",}}>Lorem ipsum dolor sit ametfdfdkfjdfkjd  </p>
               <br/>
               <div style={{width:"400px"}} className="row">
                <div className="col-6">
                <img src={googleplay} alt="add" />

                </div>
                <div className="col-6">
                <img  src={appstore} alt="add" />

                  </div>
               </div>

              </DownloadAppWrapper>
             
            </AddRight>
            </PhoneApplication>

<br />
            <ClientReviews/>


           
       </Wrapper>
  );
}


const Wrapper = styled.section`
     
margin-top:30px;
`;

const PhoneApplication = styled.section`
   
width: 90%;
height: 450px;
border-radius: 32px;
background: #3339AE;
margin: 0 auto;
align-items:center;

@media (max-width: 860px) {
  width:90%;
  height: 100%;

 }
    
`;

const GetService = styled.div`
  margin: 0 auto;
  text-align:center

  `;


  const DownloadAppTitle = styled.h1`
  color: white;
 
  `;

  

const GetServiceColumn = styled.div `
  //  width:25%;
   margin-bottom: 40px;
   margin-top: 20px;
   align-items:center;
   text-align:center;

 
   @media (max-width: 860px) {
    // width:100%;
   }
`;



const GetServiceIcon = styled.div `
margin: 0 auto;
width: 80px;
height: 80px;
 align-items: center;
 border-radius: 24px;
box-shadow: 


   @media (max-width: 860px) {
    width:100%;
   }
`;


const ClientReviewColumn = styled.div `
   width:33.33%;
   margin-bottom: 40px;
   margin-top: 20px;
   align-items:center;
   text-align:center;

   box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
   transition: 0.3s;
 `;


const GetServiceTitle = styled.h1 `
margin-top:20px;
      text-align:center;
      // width:100%
`;


const GetServiceDescription= styled.div`
      //  width:100%
`;

const GetServiceDescriptionText= styled.p`
       width:70%;
       margin:0 auto;
`;


 
const ButtonsRow = styled.div`
  // @media (max-width: 860px) {
  //   justify-content: space-between;
  // }
`;
const AddLeft = styled.div`
width:50%;

@media (max-width: 860px) {
  width:100%;

  }
   
`;
const AddRight = styled.div`
width:50%;

@media (max-width: 860px) {
  width:100%;
  margin-top:50px;

  }

 
  
`;
 
const ImgWrapper = styled.div`
left: 100px;

@media (max-width: 860px) {
  left: 0px;

  }

   
`;

const DownloadAppWrapper = styled.div`
position:relative;
left:150px;
@media (max-width: 860px) {
  left: 50px;

  }

    
`;
 