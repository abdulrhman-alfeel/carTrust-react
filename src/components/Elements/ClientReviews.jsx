import React,{useState,useEffect} from "react";
import Slider from "react-slick";
import styled from "styled-components";
import PostsClint from './PostsClint'
// Assets


export default function ClientReviews() {

  const [width, setWidth] = useState(window.innerWidth);
  const [width_slid, setWidth_slid] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      if(window.innerWidth === 820 && window.innerHeight === 1180  ){
        setWidth_slid(1.5)
      }if (window.innerWidth === 768 && window.innerHeight === 1024){
        setWidth_slid(1.5)
      }else{
        setWidth_slid(window.innerWidth < 960 ? 1 :4)
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: width_slid,
    slidesToScroll: 1,
    autoplay:true,
    arrows: false,
    // centerPadding: 100,
    // autoplaySpeed: 1000,
  };
  return (
<Wrapper>
<h1
style={{
  color: "#2D3291",
  textAlign: "center",
  fontFamily: "Tajawal",
  fontSize: "40px",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "130%" /* 52px */
}}
>ما يقوله الناس عنا</h1>
<br />
<div
>
      <Slider  dots={true} {...settings} >
    {/* <div>
      <p>Current width: {width}px</p>
    </div> */}

<PostsClint 
nameUser="يوسف مصطفى الحسيني "
evaluation="5.0"
title="  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى
"
/>
      
<PostsClint 
nameUser="ناصر فهد الشهري "
evaluation="5.0"
title=" هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى
"
/>
      
<PostsClint 
nameUser="عبدالعزيز محمد السديس "
evaluation="5.0"
title="  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى
"
/>
      
<PostsClint 
nameUser="ناصر فهد الشهري "
evaluation="5.0"
title=" هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى
"
/>

      
    </Slider>
    </div>

    </Wrapper>

  );

}


const Wrapper = styled.div`
   margin-top:"60px";
   text-align:center;
   height:50vh;
  //  border: 2px solid #000;
  //  overflow:hidden;
`;
