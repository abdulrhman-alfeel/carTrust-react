import React from "react";
import styled from "styled-components";
// Assets
// import BrowserIcon from "../../assets/svg/Services/BrowserIcon";
// import MonitorIcon from "../../assets/svg/Services/MonitorIcon";
// import PrinterIcon from "../../assets/svg/Services/PrinterIcon";
// import RollerIcon from "../../assets/svg/Services/RollerIcon";
import MonitorIcon from "../../assets/img/blogcar1.png";
 


export default function BlogItem({icon, title, subtitle,times,link="#"}) {
  let getIcon;

   
      getIcon = MonitorIcon;
     
  return (
    // <Wrapper >

   
      <div className="row-resevers ">
    
        <div className="container_responss" 
        
        dir="rtl">
        <p 
        style={{
          textAlign: 'right',
          fontFamily: 'Tajawal',
          fontSize: 'x-small',
          color:"#737373"  
            }} > {times}</p>
        <TitleStyle 
        style={{
        color: "#000",
        textAlign: "right",
        fontFamily: "Tajawal",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
        }}
        >{title}</TitleStyle>
           {/* <a href="#" > */}
        <LinkStyle_b href={`${link}`}>
        <i class="fi fi-rr-angle-small-left" style={{color:"#2563eb",marginTop: "10px"}}></i>
        <SubtitleStyle>مشاهدة المزيد</SubtitleStyle>
        </LinkStyle_b>
        {/* <SubtitleStyle className="font13">{subtitle}</SubtitleStyle> */}
        </div>
        <IconStyle className="col-md-6 m-0">
        <img src={getIcon} />
        {/* <SubtitleStyle_respons>مشاهدة المزيد</SubtitleStyle_respons> */}
        </IconStyle>
      </div>

    // </Wrapper>
    // <Wrapper >

    //   <div className="row-resevers no-gutters">
    
    //     <div className="col-md-6 m-0 container_responss" 
    //     style={{overflow:"hidden"}}
    //     dir="rtl">
    //     <p style={{textAlign: 'right', fontFamily: 'Tajawal', fontSize: 'small',}} > {times}</p>
    //     <TitleStyle className="font20 extraBold"
    //     style={{
    //     color: "#000",
    //     textAlign: "right",
    //     fontFamily: "Tajawal",
    //     fontSize: "16px",
    //     fontStyle: "normal",
    //     fontWeight: "400",
    //     lineHeight: "normal",
       
    //     }}
    //     >{title}</TitleStyle>
    //        {/* <a href="#" > */}
    //        <LinkStyle_b href={`${link}`}>
    //     <i class="fi fi-rr-angle-small-left" style={{color:"#2563eb",margin: "5px"}}></i>
    //     <SubtitleStyle>مشاهدة المزيد</SubtitleStyle>
    //     </LinkStyle_b>
    //     {/* <SubtitleStyle className="font13">{subtitle}</SubtitleStyle> */}
    //     </div>

    //     <IconStyle className="col-md-6 m-0">
    //     <img src={getIcon} />
    //     <SubtitleStyle_respons>مشاهدة المزيد</SubtitleStyle_respons>
    //     </IconStyle>

       
    //   </div>
   
      
       
    // </Wrapper>
  );
}

const LinkStyle_b = styled.a`
display: flex;
flex-direction: row-reverse; 
// border:solid 2px #000;
justify-content: flex-end;
align-self: center;
text-align: right;
// margin-left:25px;

`;
const Wrapper = styled.div`
//  margin:15px;
  margin-top:55px;
  display:flex;

  flex-direction: column-reverse;
  // width: 100%;
  
`;
const IconStyle = styled.div`
max-width: 137px;
max-height:137px;
// margin-bottom: 10px;
border-radius: 10px;
background-color:white;
  @media (max-width: 860px) {
    margin: 0 auto;
    // border:solid 2px #000;
    position:relative;
    left:5%;
  }
`;

const TitleStyle = styled.h2`
 width:14rem;
@media (max-width: 860px) {
  // padding:10px;
  // font-size:10px;
  text-align: "right";
  width:90%;
  // border:solid 1px #000 ;
  text-wrap: balance;
  
  // width:40%;
  // height:70%
}
`;
const SubtitleStyle = styled.p`
font-family: 'Tajawal';font-size: 12px;margin-top: 8px; color: #2563eb;
word-wrap: break-word;
@media (max-width: 860px) {
  // display:none;
  margin: 10px;
  // width :300px;
  word-wrap: break-word;  `;
const SubtitleStyle_respons = styled.p`
font-family: 'Tajawal';font-size: 13px;margin: 5px; color: #2563eb;
word-wrap: break-word;
@media (min-width: 960px) {
  margin: 10px;
  width :300px;
  display:none;
  word-wrap: break-word;  `;
