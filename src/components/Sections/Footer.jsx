import React from "react";
// import { Link } from "react-scroll";
import styled from "styled-components";
import appstore from "../../assets/img/foote_appstore.png";
import googleplay from "../../assets/img/footer_google_play.png";

import instagram from "../../assets/img/instgram.png";
import fecabook from "../../assets/img/f.png";
import tiktok from "../../assets/img/tiktok.png";
import youtub from "../../assets/img/youtub.png";
import RollerIcon from "../../assets/img/logo.png";
import evaluation from "../../assets/img/evaluation.png";
import cost from "../../assets/img/cost.png";


// Assets

export default function Contact() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
  <Wrapper className="text-center text-lg-start  text-muted ">
   
   <section >
    <div className=" text-center text-md-start mt-5">
       <div className="row-footer ">
         <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-10">
         <div className="contact-item inupt-footer">

                  
              <a rel="nofollow" href="https://www.tooplate.com/contact" 
                  className="item-link"
                  style={{justifyContent:'flex-end',width:'100%'}}
                  >
                    <span className="mb-2 text-right" >اشترك في النشرة الإخبارية</span>
              </a> 
                  <div className="input-group mb-0">
                    <span className="input-group-text" id="basic-addon1" style={{backgroundColor: "#2d3291"}}>
                      <i className="fi fi-rr-angle-small-left" 
                      style={{
                        color:"#ffffff"
                        }}></i>

                    </span>
                    <input type="text" 
                    className="form-control text-right input-footer" 
                    placeholder="البريد الألكتروني" aria-label="Username" a
                    ria-describedby="basic-addon1"
                    style={{textAlign:'right'}}
                    />
                  </div>ٍ
                  
                  <a rel="nofollow" href="#section_3" className="item-link"
                   style={{
                   position: "relative",
                   right:"20px"
                   }}>
                      <img src={evaluation} style={{width: "22rem"}}/>
                  </a>              
          </div>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mt-10 download_footer">
          <div>
           <ListHeader className="text-uppercase fw-bold mb-4">
          حمل التطبيق
            </ListHeader>
         
          <ListElement>
            <a href="#!" className="text-reset transition duration-300 "><img src={appstore} alt=""   width="60%" style={{borderRadius:'10px'}}/></a>
          </ListElement>
           <ListElement >
            <a href="#!" className="text-reset mt-10"><img src={googleplay} alt="" width="60%"  style={{borderRadius:'10px'}}/></a>
          </ListElement>
          </div>
          <ListElement>
          <a rel="nofollow" className="  text-reset grid-cols-2">
                    <div className="row"
                    // style={{margin:"2px"}}
                    >
                      <span className="mb-0 ">: الرقم الضريبي</span>
                      <span className="mb-0 ml-3">255-662-5566</span>
             
                    </div>
                    <img src={cost} className="cost-footer"/>
                  </a>              
          </ListElement>
       
        </div>
         <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-10">
           <ListHeader className="text-uppercase fw-bold mb-4">
                   مصادر
          </ListHeader>
          <ListElement>
            <a href="#!" className="text-reset transition duration-300 ">ملف الشركة</a>
          </ListElement>
          <ListElement>
            <a href="#!" className="text-reset transition duration-300 ">تواصل معنا</a>
          </ListElement>
          <ListElement>
            <a href="#!" className="text-reset transition duration-300 ">الوظائف</a>
          </ListElement>
          <ListElement>
            <a href="#!" className="text-reset transition duration-300 ">خدمة العملا</a>
          </ListElement>
        </div>
         <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-10">
           <ListHeader className="text-uppercase fw-bold mb-4">
                   لمحة عامة
          </ListHeader>
          <ListElement>
            <a href="#!" className="text-reset transition duration-300 ">من نحن </a>
          </ListElement>
          <ListElement>
            <a href="#!" className="text-reset transition duration-300 ">الاسئلة المتكررة</a>
          </ListElement>
          <ListElement>
            <a href="#!" className="text-reset transition duration-300 ">سياسة الخصوصية</a>
          </ListElement>
          <ListElement>
            <a href="#!" className="text-reset transition duration-300 ">الشروط والاحكام</a>
          </ListElement>
        </div>
         <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-10">
           <ListHeader className="text-uppercase fw-bold mb-4">
               حول كارترست
          </ListHeader>
          <ListElement>
            <a href="#!" className="text-reset transition duration-300 ">لماذا كار ترست</a>
          </ListElement>
          <ListElement>
            <a href="#!" className="text-reset transition duration-300 ">قصتنا</a>
          </ListElement>
          <ListElement>
            <a href="#!" className="text-reset transition duration-300 ">شركائنا</a>
          </ListElement>
          <ListElement>
            <a href="#!" className="text-reset transition duration-300 ">عملائنا</a>
          </ListElement>
        </div>
 
       </div>
     </div>
  </section>
  <hr />
 
    {/* <div className="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);"> */}
    <div   className="row-footer-logo">
      <div className=" footer-down" >
        <p className="media_footer"  >
          <span>
          <a> 
            <img src={instagram} className="social" alt="" />
          </a> 
          <a>
            <img src={fecabook} className="social" alt="" />
          </a> 
          <a><img src={tiktok} className="social" alt="" />
          </a> 
          <a><img src={youtub} className="social" alt="" />
          </a>
          </span>
          <span> حسابات التواصل الاجتماعي
            </span>

          </p>
      </div>  
   
      <div  className="logo_footer">
      <a > <img src={RollerIcon} alt=""  className="cartrust-footer"/> </a>
      </div>
 </div>
  </Wrapper>
   );
}

const Wrapper = styled.div`
  background-color:#F6f6F6;
  // border:solid 2px #000;
  padding-top:10px
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

