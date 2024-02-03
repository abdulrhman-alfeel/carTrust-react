import React,{useEffect,useState} from "react";
// Sections

import Blog from "../components/Sections/Blog";
import TopNavbar from "../components/Nav/TopNavbar";
import Footer from "../components/Sections/Footer";
import Header from "../components/Sections/Header";
import Projects from "../components/Sections/Projects";
import Services from "../components/Sections/Services";
// import { Storeing } from "./redux/redux/storeing";
import { Icon } from "@chakra-ui/react";
import { FcApproval } from "react-icons/fc";

import { useNavigate } from "react-router-dom";

export default function Landing() {
  const [virfay,setVirfay] = useState(false)
  const [messges,setMessges] = useState('العملية غير ناجحة')
  const [virfayflay,setVirfayflay] = useState(false)
  const history = useNavigate()

  useEffect(()=>{
    try{
      const user = JSON.parse(localStorage.getItem("user"));
      console.log(user.access_token) 
      lisner_abood() 
    }catch(err){console.log(err)}

  },[])


const lisner_abood= async () =>{
try{
const token = JSON.parse(localStorage.getItem('user'))
const cart_id =   JSON.parse(localStorage.getItem('cart_id'))

const url = `https://partner-api.cartrust.sa/api/v2/payment/${cart_id.cart}/status`
await fetch(url, {
  method: 'GET',
  headers: {
  "Authorization": "Bearer " + token.access_token
  },
})
.then(response => response.json())
.then((data)  => {
setVirfayflay(true)
console.log(data,'virfy data paytabs')
if (data.status === true){
  setVirfay(true)
  localStorage.removeItem('cart_id')
  localStorage.removeItem('checkoutData')
  localStorage.setItem('verify','puchsuccess')

 
  history('/MYEvalution')
  // alert('تم العملية بنجاح')
}else{
  setVirfay(false);
  const checklocal = JSON.parse(localStorage.getItem("checkoutData"));
  const manufacturer_id =  checklocal?.payload?.manufacturer_id;
  const model_id =  checklocal?.payload?.model_id;
  const year_id =  checklocal?.payload?.year_id;
history(`/checkout?&${manufacturer_id}&${model_id}&${year_id}`)

//  alert('العملية غير ناجحة')
}



})
.catch((error) => {
  console.error('Error:', error);
});
}catch(err){
  console.log(err)
  setVirfayflay(false)
  localStorage.removeItem('cart_id')
  localStorage.removeItem('checkoutData')
  localStorage.setItem('verify','NOpuchsuccess')
}
console.log(virfayflay,'hhhhhhhhhhhhis')
  }



  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
      <Projects />
      <Blog />
      {/* */}
      <Footer />

      
    </>
  );
}

