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
                    icon="monitor"
                    title="مقال 1"
                    subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."/>
                      <BlogItem
                    icon="monitor"
                    title="مقال 2"
                    subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."/>


<BlogItem
                    icon="monitor"
                    title="مقال 3"
                    subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."/>
   
   
   
   


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
            
            <div  dir="rtl"  style={{margin:"0 auto" , width:"400px"}}>
                <Madona >
                  مدونة
                 </Madona>

              <div style={{ marginTop:"10px", marginBottom:"70px"}}>
              <h4 >احدث المقالات</h4>
              <h4 >والاخبار</h4>
                </div>  

                <Madona style={{background:"#2D3291" ,color:"#FFF"}}>
                &lt;المزيد 
                 </Madona>
              
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
     
`;

const PhoneApplication = styled.section`
   
width: 90%;
 border-radius: 32px;
 align-items:center;
 margin: 20px auto;
    
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

@media (max-width: 860px) {
  // width:100%;

  }
  
`;
const AddRight = styled.div`
// width:50%;
// margin:0 auto;
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


