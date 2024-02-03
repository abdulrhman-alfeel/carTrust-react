import React,{useEffect,useState} from 'react'
import axios from 'axios';
const API_BASE_URL = 'https://partner-api.cartrust.sa/api/v2'; // Replace with your API endpoint


export const fetchYearsApi = async (model,manufacturer) => {
        try {
            console.log(manufacturer,'manugactur')
            const response = await axios.get(`${API_BASE_URL}/years?service_name=evaluation&manufacturer_id=${manufacturer}&model_id=${model}`);
            const databis = response.data.years;
            return databis;
        } catch (error) {
            return error;
        }  }
