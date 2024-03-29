// src/api.js
import axios from 'axios';

const API_BASE_URL = 'https://partner-api.cartrust.sa/api/v2'; // Replace with your API endpoint
let user = localStorage.getItem("user");
let token;

if (user) {
    token = JSON.parse(user)?.access_token;
}

export const fetchManufacturersApi = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/manufacturers`);
        return response.data?.manufacturers;
    } catch (error) {
        return error;
    }
};

export const fetchYearsApi = async (model,manufacturer) => {
    try {
        console.log(manufacturer,'manugactur')
        const response = await axios.get(`${API_BASE_URL}/years?service_name=evaluation&manufacturer_id=${manufacturer}&model_id=${model}`);
        return response.data.years;
    } catch (error) {
        return error;
    }
};


export const paymentLink = async (amount,return_url,cart_id) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/payment/link` , {
            amount,
            return_url,
            cart_id
        }, {
            headers: {
                "Authorization": "Bearer " + token
            }
        });
        return response.data.payment_link;
    } catch (error) {
        return error;
    }
};

export const fetchModelsApi = async (newData) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/models/manufacturer/${newData}`);
        return response.data?.models;
    } catch (error) {
        return error;
    }
};

export const fetchTrimsApi = async (newData) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/trims/make/${newData?.manufacturer}/model/${newData?.model}/year/${newData?.year}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

export const fetchOptionsApi = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/pg/options/list`);
        console.log(response.data?.data,'hoooooo')
        return response.data?.data;
    } catch (error) {
        return error;
    }
};

export const requestOTPApi = async (newData) => {
    const response = await axios.post(`${API_BASE_URL}/request-otp`, newData);
    return response.data;
};

export const verifyOTPApi = async (newData) => {
    const response = await axios.post(`${API_BASE_URL}/verify-otp`, newData);
    return response.data;
};

export const logoutApi = async (newData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/logout`, newData, {
            headers: {
                "Authorization": "Bearer " + token
            }
        });
        return response.data;
    } catch (error) {
        return error;
    }
};

export const checkoutApi = async (newData) => {
    // const response = await axios.post(`${API_BASE_URL}/pg/evaluate`, newData, {
 

        const response = await axios.post(`${API_BASE_URL}/cart/create`, newData, {
        headers: {
            "Authorization": "Bearer " + token
        }
    });
    return response.data;
};

export const deleteData = async (id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/data/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
};


export const billingInfoApi = async () => {
 
    const response = await axios.post(`${API_BASE_URL}/pg/billing/info`, {
        headers: {
            "Authorization": "Bearer " + token
        }
    });
    console.log(response);
    return response.data;
};
