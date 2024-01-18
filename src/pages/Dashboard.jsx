import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";
import { checkout, fetchOptions, fetchTrims } from "../redux/features/dataSlice";






// Sections

export default function Dashboard() {
return(
<div>
    {/* navbare */}
    <section>
        {/* logo */}
        <div>
        <img src={Logopng} className="logo_home"/>
        </div>

        {/* search */}
        <div>
            <a></a>
            <input className="input-login" 
            // onChange={(e) => setPhone(e.target.value)} 
             type="text" />

            <a></a>
        </div>


        {/* noticestion */}
        <div>
        <a></a>
        <a></a>
        <a></a>
        <a></a>
        </div>


    </section>
    
    



    {/* bady */}
    <section>
        {/* fixtleft */}
        <div></div>


        {/* body-section */}
        <div>

            {/* head-slider */}
            <div></div>


            {/* slider-post */}
            <div></div>
        </div>
    </section>

</div>
)

}