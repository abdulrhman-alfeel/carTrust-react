import React from "react";
import styled from "styled-components";
import line from "../../assets/img/line.png";

// Assets
// import BrowserIcon from "../../assets/svg/Services/BrowserIcon";
// import MonitorIcon from "../../assets/svg/Services/MonitorIcon";
// import PrinterIcon from "../../assets/svg/Services/PrinterIcon";
// import RollerIcon from "../../assets/svg/Services/RollerIcon";
 


export default function ServiceTitle({title, subtitle, subtitle2}) {
   

  return (
    <Wrapper >

<div className="container titles">
      <div className="row">
      
        <div className="col-md-12" dir="rtl">
        <TitleStyle >{title}</TitleStyle>
        <SubtitleStyle >{subtitle}</SubtitleStyle>
        <SubtitleStyle >ومذهلة مع <span style={{color:"#2D3291"}}>خدمات</span> <span style={{color:"#21ADD9"}}>كار ترست</span></SubtitleStyle>
        </div>
      </div>
      <img src={line} alt="" />        

    </div>
      {/* <IconStyle>{getIcon}</IconStyle>
         <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle> */}

       
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin:40px;
  left:10px
  @media (max-width: 860px) {
    margin: 0 auto;
    left:0;
    width: 10%;
  }
  `;

const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
 
  }
`;
const SubtitleStyle = styled.h1`
color : #1E1E1E;
font-family: Tajawal;
font-size: 48px;
font-style: normal;
font-weight: 800;
line-height: 61px;
@media(max-width:860px){
line-height: 3rem;}
  
`;