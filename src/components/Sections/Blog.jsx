import React from "react";
import styled from "styled-components";
// import blogImage from "../../assets/img/blogImage.png";
import blogFrame from "../../assets/img/blogFrame.png";
import blogImage from "../../assets/img/blogImage.png";

import BlogItem from "../Elements/BlogItem";


// Components


// Assets

export default function Projects() {
  return (
    <Wrapper>
     

       <PhoneApplication className="row">
      
             <AddLeft className="col-6">
                

<div className="col-sm-12 col-md-12 col-lg-6">
           {/* <ServiceBoxRow > */}
            <ServiceBoxWrapper>
            <BlogItem
                    times="May 15,2023  * قبل 14 ساعة   "
                    icon="monitor"
                    title="ماكلارين تدشن السوبركار الجديدة كلياً 
                    بقوة 635 حصان وتصميم جذاب"
                    // subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
                    
                    />
                      <BlogItem
                    times="May 15,2023  * قبل 14 ساعة   "
                    icon="monitor"
                    title=" صندوق الثروة السيادية سيستحوذ على ماكلارين خلال الايام القادمة "
                    // subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
                    />


                  <BlogItem
                    times="May 15,2023  * قبل 14 ساعة   "

                    icon="monitor"
                    title="  لكزس تتصدر قائمة أكثر 10 علامات تجارية للسيارات اعتمادية في العالم دراسة  "
                    // subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
                    />


            </ServiceBoxWrapper>

            {/* <ServiceBoxWrapper>
              <ServiceBox
                icon="monitor"
                title="فحص المركبات"
                subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
              />
            </ServiceBoxWrapper> */}
           
             </div>

             </AddLeft>
            <AddRight className="col-sm-12 col-md-12 col-lg-6">
            
            <div 
            dir="rtl"  
            className="titl_blog_note">
                <Madona >
                  مدونة
                 </Madona>
              <div style={{ 
                marginBottom:"70px"}}>  
              <h4>احدث المقالات <br/> والاخبار</h4>
              <h4 ></h4>
                <Madonaplus 
                href="#"
                style={{background:"#2D3291" ,color:"#FFF" ,marginTop:"30px"}}>
               المزيد  <i class="fi fi-rr-angle-small-left" ></i>
                 </Madonaplus>
                 </div>  
              </div>
              <BlogImageWrapper className="blog-car-image-container col-md-6">
             
              {/* <BlogImageDiv className="blog-car-div" >
              </BlogImageDiv> */}

              <img className="blog-car-div" src={blogFrame} alt="" />
              <img className="blog-car-image" src={blogImage} alt="" />
              </BlogImageWrapper>
              
            </AddRight>
            </PhoneApplication>


 
       </Wrapper>
  );
}


const Wrapper = styled.section`
 padding: 10px;
 margin-top: 40px;
 @media(max-width:960px){
  // display:none
  // border:solid 1px #000 
  overflow:"hidden";

}
     
`;

const PhoneApplication = styled.section`
   
width: 90%;
 border-radius: 32px;
 align-items:center;
 margin: 20px auto;
@media(max-width:950px){
   display:flex;

  flex-direction: column-reverse;}
    
`;

 

  const ClientReviews = styled.div`
  margin: 0 auto;
  text-align:center

  `;

 


const BlogImageWrapper = styled.div `
margin: 20px auto;
// position: relative;
// top: 0;
// left: 0;
@media(max-width:960px){
  display: none;
}
  
 `;

 const BlogImageDiv = styled.div `  
//  position: absolute;
//  top: 0;
//  left: 0;
//  width: 150px;
//  height:150px;
//  background-color:blue;
  
 `;


const GetSrrviceTitle = styled.h1 `
margin-top:20px;
      text-align:center;
      width:100%
`;


const GetSrrviceDescription= styled.div`
      text-align:center;
      width:100%
`;


 
const ButtonsRow = styled.div`
  // @media (max-width: 860px) {
  //   justify-content: space-between;
  // }
`;
const AddLeft = styled.div`
// width:50%;
// padding: 10px;
// margin:auto;
position: relative;
left:10%;
@media (max-width: 860px) {
  width:100%;

  overflow:hidden;

  }
  
`;
const AddRight = styled.div`

margin:0 auto;
// border: solid 2px #0B093B;
@media (max-width: 860px) {
  // width:100%;

  }

  
`;
 
const ImgWrapper = styled.div`
   
`;


const ServiceBoxRow = styled.div`
  
   
`;

const ServiceBoxWrapper = styled.div`
 
  @media (max-width: 860px) {
    width: 100%;
    alien-items:center
    text-align: center;
    padding: 40px 0;
  }
`;

const Madona = styled.p`
  
padding: 8px 16px;
 width:80px;
 border-radius: 32px;
background: var(--blue-50, #EFF6FF);
color: var(--blue-600, #2563EB);

`;
const Madonaplus = styled.a`

display: flex;
padding: 12px 24px;
justify-content: center;
align-items: center;
gap: 12px;
width:25%;
border-radius: 32px;
background: #2D3291;
@media(max-width:960px){
  width:45%;
}
`;


