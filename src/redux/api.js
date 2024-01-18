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

export const fetchYearsApi = async (newData,manufacturer_id) => {
    // try {
    //     const response = await axios.get(`${API_BASE_URL}/years`);
    //     return response.data.years;
    // } catch (error) {
    //     return error;
    // }

    try {
        const response = await axios.get(`${API_BASE_URL}/years?service_name=evaluation&manufacturer_id=12&model_id=756`);
        console.log(response.data.years);
        return response.data.years;
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
    const response = await axios.post(`${API_BASE_URL}/pg/evaluate`, newData, {
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
