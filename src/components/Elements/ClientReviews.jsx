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
      setWidth_slid(window.innerWidth < 960 ? 1 :4)

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
nameUser="Dawn Marie Williams "
evaluation="5.0"
title="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eveniet, 
veniam, repellat blanditiis, quam neque suscipit beatae possimus vero voluptatibus ipsa.
"
/>
      
<PostsClint 
nameUser="Dawn Marie Williams "
evaluation="5.0"
title="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eveniet, 
veniam, repellat blanditiis, quam neque suscipit beatae possimus vero voluptatibus ipsa.
"
/>
      
<PostsClint 
nameUser="Dawn Marie Williams "
evaluation="5.0"
title="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eveniet, 
veniam, repellat blanditiis, quam neque suscipit beatae possimus vero voluptatibus ipsa.
"
/>
      
<PostsClint 
nameUser="Dawn Marie Williams "
evaluation="5.0"
title="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eveniet, 
veniam, repellat blanditiis, quam neque suscipit beatae possimus vero voluptatibus ipsa.
"
/>
<PostsClint 
nameUser="Dawn Marie Williams "
evaluation="5.0"
title="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eveniet, 
veniam, repellat blanditiis, quam neque suscipit beatae possimus vero voluptatibus ipsa.
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
