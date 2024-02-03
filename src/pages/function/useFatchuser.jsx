import React from 'react'
import axios from 'axios';

export default function useFatchuser() {
const API_BASE_URL = 'https://partner-api.cartrust.sa/api/v2'; // Replace with your API endpoint
let user = localStorage.getItem("user");
let token;

if (user) {
    token = JSON.parse(user)?.access_token;
}
const fetchEvaluationApi = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/pg/evaluations`,       
        {headers: {
            "Authorization": "Bearer " + token
        }});
        console.log(response.data)
        return response.data;
    } catch (error) {
        return error;
    }
};
  return fetchEvaluationApi;
}
