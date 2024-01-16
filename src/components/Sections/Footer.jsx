import React from "react";
// import { Link } from "react-scroll";
import styled from "styled-components";
import appstore from "../../assets/img/foote_appstore.png";
import googleplay from "../../assets/img/footer_google_play.png";

import instagram from "../../assets/img/instagramIcon.png";
import RollerIcon from "../../assets/img/logo.png";


// Assets

export default function Contact() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
  <Wrapper className="text-center text-lg-start  text-muted">
   
 
   <section >
    <div className="container text-center text-md-start mt-5">
       <div className="row mt-3">
         <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 mt-10">
           <ListHeader className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>Company name
          </ListHeader>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
 
         <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-10">
           <ListHeader className="text-uppercase fw-bold mb-4">
             حول كارترست
          </ListHeader>
          <ListElement>
            <a href="#!" className="text-reset">حول مار ترست</a>
          </ListElement>
          <ListElement>
            <a href="#!" className="text-reset">React</a>
          </ListElement>
          <ListElement>
            <a href="#!" className="text-reset">Vue</a>
          </ListElement>
          <ListElement>
            <a href="#!" className="text-reset">Laravel</a>
          </ListElement>
        </div>
 
         <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mt-10">
           <ListHeader className="text-uppercase fw-bold mb-4">
           لمحة عامة
            </ListHeader>
          <ListElement>
            <a href="#!" className="text-reset">لمحة عامة</a>
          </ListElement>
          <ListElement>
            <a href="#!" className="text-reset"><img src={appstore} alt="" /></a>
          </ListElement>
           <ListElement >
            <a href="#!" className="text-reset mt-10"><img src={googleplay} alt="" /></a>
          </ListElement>
          <ListElement>
            <a href="#!" className="text-reset">Help</a>
          </ListElement>
        </div>
 
         <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 mt-10">
           <ListHeader className="text-uppercase fw-bold mb-4">Contact</ListHeader>
          <ListElement>
            <i className="fas fa-home me-3"></i> New York, NY 10012, US</ListElement>
          <ListElement>
            <i className="fas fa-envelope me-3"></i>
            info@example.com
          </ListElement>
          <ListElement><i className="fas fa-phone me-3"></i> + 01 234 567 88</ListElement>
          <ListElement><i className="fas fa-print me-3"></i> + 01 234 567 89</ListElement>
        </div>
       </div>
     </div>
  </section>
  <hr />
 
    {/* <div className="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);"> */}
    <div class="d-flex justify-content-between">
      <div className="col-6" style={{width:"50%" , margin:"auto"}}>
        <p   style={{marginLeft:"20%"}}><span><img src={instagram} alt="" /></span> <span><img src={instagram} alt="" /></span> <span><img src={instagram} alt="" /></span> <span><img src={instagram} alt="" /></span> حسابات التواصل الاجتماعي</p>
      </div>
      <div className="col-6" style={{width:"50%"}}>

      <a  style={{marginLeft:"60%"}}> <img src={RollerIcon} alt="" /> </a>
      </div>
 </div>
  </Wrapper>
   );
}

const Wrapper = styled.div`
  background-color:#F6f6F6
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

const ListHeader = styled.div`
 text-align:right;
  // @media (max-width: 550px) {
  //   margin: 20px 0;
  // }
`;

const ListElement = styled.div`
margin:10px;
text-align:right;
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;

