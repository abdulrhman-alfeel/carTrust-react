import React from "react";
import styled from "styled-components";
// Components
import carImage2 from "../../assets/img/carss.png";
// import carImage1 from "../../assets/img/porsche-normal 1.png";
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import ServiceTitle from "../Elements/ServiceTitle";


// Assets

export default function Services() {
  return (
    <>
      
    <Wrapper id="services" dir="rtl">

    <div>
    <ClientSlider />
    </div>
    
      <div className="whiteBg" style={{
        padding: "60px 0", backgroundColor: "rgba(38, 170, 225, 0.05)"
      }}>
        <div >

          <div className="row">

          <div className="col-md-6">
              <ServiceBoxRow >
                {/* <ServiceBoxRow > */}

                <ServiceTitle
                    title="افضل الخدمات"
                    subtitle="احصل على تجربة فريدة"
                    subtitle2="ومذهلة مع خدمات كار ترست"
                  />
              </ServiceBoxRow>
            </div>

            <div className="col-md-6"></div>

            <ServicesWrapper className="col-sm-12 col-md-12 col-lg-6 evl_continer">
              <ServiceBoxRow >
                {/* <ServiceBoxRow > */}
                <ServiceBoxWrapper>
                  <ServiceBox
                    icon="roller"
                    title="تقييم السيارات"
                    subtitle="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص."
                  />
                </ServiceBoxWrapper>
                <ServiceBoxWrapper>
                  <ServiceBox
                    icon="monitor"
                    title="فحص المركبات"
                    subtitle="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص.."
                  />
                </ServiceBoxWrapper>
                <ServiceBoxWrapper>
                  <ServiceBox
                    icon="browser"
                    title="الضمان الذهبي"
                    subtitle="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص."
                  />
                </ServiceBoxWrapper>
              </ServiceBoxRow>
            </ServicesWrapper>


            <CarImagesWrapper className="service-car-images col-sm-12 col-md-12 col-lg-6">
            <img src={carImage2}
          className="service-car-image-1"
            />
           </CarImagesWrapper>

        

          </div>

        </div>

      </div>
    </Wrapper>
    </>

  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  
left:30px
   
`;


const CarImagesWrapper = styled.div`
`;


const ServicesWrapper = styled.div`
   
@media (max-width: 860px) {
   width: 80%;
  }
`;



const ServiceBoxHeader = styled.div`
   @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const ServiceBoxWrapper = styled.div`
  // margin:35px;
  width:100%;
  @media (max-width: 860px) {
    width: 100%;
    display:flex;
    alien-items:center
    text-align: center;
    padding: 40px 0;
    margin:auto;
    // border:solid 2px #000;
  
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;