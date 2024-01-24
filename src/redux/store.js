// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './features/dataSlice';
// import userReducer from "./redux/reducers";

const store = configureStore({
    reducer: dataSlice,
    // reducer:userReducer
    // Additional configuration if needed
});

export default store;
