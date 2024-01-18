

import Lottie from "react-lottie";
import React from 'react';
import animationData from '../../loading.json';
import stars from "../../assets/img/star.png";
import carImage2 from "../../assets/img/prosonle.png";

import styled from "styled-components";
export default function PostsClint  ({nameUser,evaluation,title}) {

return(<LogoWrapper >
      
<div className="client-name">

  <div 
   class="image_post">
  <img 
   style={{width: "100%", objectFit:"cover"}}
  src={carImage2} alt=""/>
   </div>
   <div 
   style={{flexDirection: "column"}}>
   <h6 className="ml-2 text-right title_posts">{nameUser} </h6>
   <div className="continer_star" >
<img src={stars} className="image_post_clint"/>
<img src={stars} className="image_post_clint"/>
<img src={stars} className="image_post_clint"/>
<img src={stars} className="image_post_clint"/>
<p style={{marginLeft:'7px'}}>{evaluation}</p>
</div>

 </div>
 </div>
<p 
className="client-name-post"      
>
  {title}
   </p>

   </LogoWrapper>
   
   
   
   )
}



const LogoWrapper = styled.div`

overflow: hidden;
 background-color: #ffffff;
text-align: right;
border-radius: 1rem;
max-width: 370px;
width:505px;
// height: 321px;
box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  padding: 15px;
  :focus-visible {
    outline: none;
    border: 0px;  
  }
  @media(max-width:960px){
    // border:solid 1px #000;
    width:80%;
    margin :10px
  }
`;
