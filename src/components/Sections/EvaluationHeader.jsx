import { default as React, useRef } from "react";

import styled from "styled-components";


// Components
// Assets


export default function EvaluationHeader() {
  const childRef = useRef(null);


  const handleSlideNext = (slideNext) => {
    // Now, you have a reference to the child function
    childRef.current = slideNext;

  };


  const handleSlidePrev = (slidePrev) => {
    // Now, you have a reference to the child function
    childRef.current = slidePrev;

  };

  const handleSlideNextClick = () => {
    // Call the child function when the button is clicked
    if (childRef.current) {
      childRef.current();
    }
  };


  const handleSlidePrevClick = () => {
    // Call the child function when the button is clicked
    if (childRef.current) {
      childRef.current();
    }
  };


  return (
    <Wrapper id="home" className="row">


    </Wrapper>
  );
}


const Wrapper = styled.section`
position: relative;
width: 100%;
height: 500px;
}
   
  }
`;
const HeaderElement = styled.div`
position: absolute;
width: 100%; 
height: 500px;  
background-color: blue; 
  
  
`;


const HeaderElement1 = styled.div`
position: absolute;
width: 100%; 
height: 100px;  
background-color: blue; 
  
  
`;
const RightSide = styled.div`
   
  }
`;

const BtnWrapper = styled.div`
   max-width: 190px;
   @media (max-width: 960px) {
    margin: 0 auto;
  }
`;


const Banner = styled.div`
height:500px;
width:100%;
    margin-top:20px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;


