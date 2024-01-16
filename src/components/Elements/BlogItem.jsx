import React from "react";
import styled from "styled-components";
// Assets
// import BrowserIcon from "../../assets/svg/Services/BrowserIcon";
// import MonitorIcon from "../../assets/svg/Services/MonitorIcon";
// import PrinterIcon from "../../assets/svg/Services/PrinterIcon";
// import RollerIcon from "../../assets/svg/Services/RollerIcon";
import MonitorIcon from "../../assets/img/blogcar1.png";
 


export default function BlogItem({icon, title, subtitle}) {
  let getIcon;

   
      getIcon = MonitorIcon;
     
  return (
    <Wrapper >

<div className="container" style={{width:"500px"}}>
      <div className="row no-gutters">
    
        <div className="col-md-6 m-0" dir="rtl">
        <TitleStyle className="font20 extraBold">{title}</TitleStyle>
        <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
        </div>

        <IconStyle className="col-md-6 m-0">
        <img src={getIcon} />
        </IconStyle>

       
      </div>
    </div>
      
       
    </Wrapper>
  );
}

const Wrapper = styled.div`
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
  }
`;

const TitleStyle = styled.h2`
 
@media (max-width: 860px) {
  margin: 10px;
}
`;
const SubtitleStyle = styled.p`
word-wrap: break-word;
@media (max-width: 860px) {
  margin: 10px;
  width :300px;
  word-wrap: break-word;  `;
  