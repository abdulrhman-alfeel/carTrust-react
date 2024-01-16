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

<div className="container" style={{width:"500px"}}>
      <div className="row no-gutters">
      <IconStyle className="col-md-6 m-0">
        <img src={getIcon} />
        </IconStyle>

        <div className="col-md-6 m-0" dir="rtl">
        <TitleStyle className="font20 extraBold">{title}</TitleStyle>
        <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
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
max-width: 137px;
max-height:137px;
background-color:white;
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;

const TitleStyle = styled.h2`
color:#1E1E1E;

 
@media (max-width: 860px) {
  margin: 10px;
}
`;
const SubtitleStyle = styled.p`
word-wrap: break-word;
width:500px;
color:#858585;
@media (max-width: 860px) {
  margin: 10px;
  width :300px;
  word-wrap: break-word;  `;

  const Divider = styled.div`
  stroke-width: 12px;
  stroke: #21ADD9;`;
  