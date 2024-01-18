import React from "react";
import styled from "styled-components";
// Assets
// import BrowserIcon from "../../assets/svg/Services/BrowserIcon";
// import MonitorIcon from "../../assets/svg/Services/MonitorIcon";
// import PrinterIcon from "../../assets/svg/Services/PrinterIcon";
// import RollerIcon from "../../assets/svg/Services/RollerIcon";
import RollerIcon from "../../assets/img/car1.png";
import MonitorIcon from "../../assets/img/car2.png";
import PrinterIcon from "../../assets/img/car3.png";
 


export default function ServiceBox({icon, title, subtitle}) {
  let getIcon;

  switch (icon) {
    case "roller":
      // getIcon = <RollerIcon />;
      getIcon = RollerIcon;
      break;
    case "monitor":
      getIcon = PrinterIcon;
      break;
    
    case "printer":
      getIcon = MonitorIcon;
      break;
    default:
      getIcon = MonitorIcon;
      break;
  }


  return (
    <Wrapper >

<div className="container evlution_box" >
      <div className="row no-gutters">
      <IconStyle className="col-md-6 m-3">
        <img src={getIcon}  />
        </IconStyle>

        <div className="col-md-6 m-0 evlution_box_text" dir="rtl">
        <TitleStyle className="font20 extraBold ">{title}</TitleStyle>
        <SubtitleStyle className="font13 ">{subtitle}</SubtitleStyle>
        </div>

        <br />
       
      </div>

    </div>
      
       
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const IconStyle = styled.div`
max-width: 147px;
max-height:137px;
background-color:white;
border-radius: 15px;
background: #FFF;
box-shadow: 1px 10px 35px 0px rgba(0, 0, 0, 0.10);
padding:25px;


  @media (max-width: 860px) {
    margin: 0 auto;
    
  }
`;

const TitleStyle = styled.h2`

color: #000;

text-align: right;
font-family: Tajawal;
font-size: 22px;
font-style: normal;
font-weight: 800;
line-height: normal;
@media (max-width: 860px) {
  margin: 10px;
  text-align: center;
  width:10rem
}
`;
const SubtitleStyle = styled.p`
// word-wrap: break-word;
// width:500px;
// color:#858585;
color: #858585;

text-align: right;
font-family: Tajawal;
font-size: 20px;
font-style: normal;
font-weight: 800;
line-height: normal;
@media (max-width: 860px) {
  margin: 10px;
  width :300px;
  word-wrap: break-word;
  text-align: center;
  `;

  const Divider = styled.div`
  stroke-width: 12px;
  stroke: #21ADD9;`;
  