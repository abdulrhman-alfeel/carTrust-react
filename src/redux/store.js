// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './features/dataSlice';

const store = configureStore({
    reducer: dataSlice,
    // Additional configuration if needed
});

export default store;
