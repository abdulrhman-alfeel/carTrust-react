import { useNavigate } from "react-router-dom";


export  function useSaction_navbar(Dark){
const history = useNavigate();
const Seaction_navber =()=>{
  console.log(Dark,'hhhhhhhhhhhhllllllllow')
    return(
      <>
      
      <li className="semiBold font15 pointer">
            <div sytle={{color:'#fff'}} className="dropdown">
              <a style={{color:Dark === true ? "#fff": null , }} className="nav-link tm-nav-link" href="#testimonials">سعر السيارات المستخدمة</a>
              <div style={{position:window.innerWidth < 960?"relative":"none",right:'5%' ,background: Dark === true ? "#000": null}}   className="dropdown-content">
                  <a style={{color:Dark === true ? "#fff": null }} href="#">سعر سيارتي </a>
                  <a style={{color:Dark === true ? "#fff": null }} href="#">سعر السيارات الجديدة</a>
                  <a style={{color:Dark === true ? "#fff": null }} href="#">السعر المستقبلي</a>
              </div>
              </div>
            </li>
            <li  className="semiBold font15 pointer">
            <div   className="dropdown">
            <a style={{color:Dark === true ? "#fff": null }}   className="nav-link tm-nav-link" href="#testimonials">ضمان السيارات</a>
              <div  style={{position:window.innerWidth < 960?"relative":"none",right:'5%',background: Dark === true ? "#000": null}} className="dropdown-content">
                  <a style={{color:Dark === true ? "#fff": null }} href="#">فحص السيارات </a>
                  <a style={{color:Dark === true ? "#fff": null }} href="#">انواع فحص السيارات</a>
                  
              </div>
              </div>
            </li>
            <li className="semiBold font15 pointer">
              <div  className="dropdown">
              <a style={{color:Dark === true ? "#fff": null }}   className="nav-link tm-nav-link" href="#testimonials">ضمان السيارات</a>
              <div style={{position:window.innerWidth < 960?"relative":"none",right:'5%',background: Dark === true ? "#000": null}}  className="dropdown-content">
                  <a style={{color:Dark === true ? "#fff": null }} href="#">اضمن لي سيارتي</a>
                  <a style={{color:Dark === true ? "#fff": null }} href="#">برنامج كارترستد</a>
                  <a style={{color:Dark === true ? "#fff": null }} href="#">تسوق مع كارترستد</a>
              </div>
              </div>
            </li>
            <li  className="semiBold font15 pointer">
            <div   className="dropdown">
              <a style={{color:Dark === true ? "#fff": null }} className="nav-link tm-nav-link" href="#testimonials">البيانات والأفكار</a>
              <div style={{position:window.innerWidth < 960?"relative":"none",right:'5%',background: Dark === true ? "#000": null}}  className="dropdown-content">
                  <a style={{color:Dark === true ? "#fff": null }} href="#">ساعدني اختار سيارة </a>
                  <a style={{color:Dark === true ? "#fff": null }} href="#">افضل السيارات</a>
                  <a style={{color:Dark === true ? "#fff": null }} href="#">مراجعة الخبراء</a>
                  <a style={{color:Dark === true ? "#fff": null }} href="#">السيارات الكهربائية</a>
                  <a style={{color:Dark === true ? "#fff": null }} href="#">برنامج جوائز كارترست</a>
                  <a style={{color:Dark === true ? "#fff": null }} href="#">آخر الاخبار</a>
              </div>
              </div>
            </li>
            <li  className="semiBold font15 pointer">
            <div   className="dropdown">
              <a style={{color:Dark === true ? "#fff": null }} className="nav-link tm-nav-link" href="#testimonials">الحلول التقنية</a>
              <div  style={{position:window.innerWidth < 960?"relative":"none",right:'5%',background: Dark === true ? "#000": null}}  className="dropdown-content">
                  <a style={{color:Dark === true ? "#fff": null }} href="#">منصة الشركاء </a>
                  <a style={{color:Dark === true ? "#fff": null }} href="#">منصة العناية بالسيارة </a>
                  <a style={{color:Dark === true ? "#fff": null }} href="#">منصة المزاد</a>
                  <a style={{color:Dark === true ? "#fff": null }} href="#">فحص اضرار المركبات بالذكاء الاصطناعي</a>
                  <a style={{color:Dark === true ? "#fff": null }} href="#">منصة تقييم تكلفة تصليح المركبات الذكية</a>
                  <a style={{color:Dark === true ? "#fff": null }} href="#">الفحص الحراري لجسم المركبة</a>
              </div>
              </div>
            </li>
            <li  className="semiBold font15 pointer">
            <div className="dropdown">
              <a style={{color:Dark === true ? "#fff": null }} className="nav-link tm-nav-link" href="#testimonials" onClick={()=> history(`/Dashboard`)}>لوحة التحكم</a>
              </div>
            </li>

            {/* <li className="semiBold font15 pointer">

              <NavLink to="checkout" style={{ padding: "10px 15px" }} spy={true} smooth={true} offset={-80}>
                checkouts
              </NavLink>
            </li> */}


            <li className="semiBold font15 pointer">
            <div  className="dropdown">
              <a style={{color:Dark === true ? "#fff": null }} className="nav-link tm-nav-link" href="#testimonials">كارترست</a>
              <div style={{position:window.innerWidth < 960?"relative":"none",right:'5%',background: Dark === true ? "#000": null}}  className="dropdown-content">
                  <a style={{color:Dark === true ? "#fff": null }} href="#">ساعدني اختار سيارة </a>
                  <a style={{color:Dark === true ? "#fff": null }} href="#">قيمنا </a>
                  <a style={{color:Dark === true ? "#fff": null }} href="#">الاعتمادات</a>
                  <a style={{color:Dark === true ? "#fff": null }} href="#">سياسة الحيادية</a>
                  <a style={{color:Dark === true ? "#fff": null }} href="#">مواقعنا</a>
                  <a style={{color:Dark === true ? "#fff": null }} href="#">الخدمة المتنقلة</a>
                  <a style={{color:Dark === true ? "#fff": null }} href="#">الوظائف</a>
                  <a style={{color:Dark === true ? "#fff": null }} href="#">تواصل معنا</a>
              </div>
              </div>
            </li>

            <li className=" pointer">
              <a style={{color:Dark === true ? "#fff": null }} className="nav-link tm-nav-link" href="/carTrust"  >
                الصفحة الرئيسية
              </a>
            </li>
      </>
    )
  } 

return Seaction_navber
}