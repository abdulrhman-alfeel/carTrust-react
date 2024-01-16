// src/features/data/dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchYearsApi, deleteData, fetchModelsApi, requestOTPApi, verifyOTPApi, fetchManufacturersApi, fetchTrimsApi, logoutApi, checkoutApi, fetchOptionsApi } from '../api';

export const fetchYears = createAsyncThunk('data/fetchYearsApi', async () => {
    const data = await fetchYearsApi();
    return data;
});

export const fetchManufacturers = createAsyncThunk('data/fetchManufacturersApi', async () => {
    const data = await fetchManufacturersApi();
    return data;
});

export const fetchModels = createAsyncThunk('data/fetchModelsApi', async (newData) => {
    const data = await fetchModelsApi(newData);
    return data;
});

export const fetchTrims = createAsyncThunk('data/fetchTrimsApi', async (newData) => {
    const data = await fetchTrimsApi(newData);
    return data;
});

export const fetchOptions = createAsyncThunk('data/fetchOptionsApi', async () => {
    const data = await fetchOptionsApi();
    return data;
});

export const checkout = createAsyncThunk('data/checkoutApi', async (newData) => {
    try {
        const data = await checkoutApi(newData);
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
});

export const requestOTP = createAsyncThunk('data/requestOTPApi', async (newData) => {
    try {
        const data = await requestOTPApi(newData);
        return data;
    } catch (error) {
        throw error;
    }

});

export const verifyOTP = createAsyncThunk('data/verifyOtpApi', async (newData) => {
    try {
        const data = await verifyOTPApi(newData);
        return data;
    } catch (error) {
        throw error;
    }
});

export const logout = createAsyncThunk('data/logoutApi', async (newData) => {
    const data = await logoutApi(newData);
    return data;
});

export const deleteDataAsync = createAsyncThunk('data/deleteData', async (id) => {
    await deleteData(id);
    return id;
});

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        manufacturers: [],
        years: [],
        models: [],
        trims: [],
        items: [],
        user: {},
        error: {},
        data: {},
        options: {},
        status: 'idle',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchManufacturers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchManufacturers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.manufacturers = action.payload;
            })
            .addCase(fetchManufacturers.rejected, (state) => {
                state.status = 'failed';
            })
            .addCase(fetchYears.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchYears.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.years = action.payload;
            })
            .addCase(fetchYears.rejected, (state) => {
                state.status = 'failed';
            })
            .addCase(fetchModels.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchModels.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.models = action.payload;
            })
            .addCase(fetchModels.rejected, (state) => {
                state.status = 'failed';
            })
            .addCase(fetchTrims.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTrims.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.trims = action.payload;
            })
            .addCase(fetchTrims.rejected, (state) => {
                state.status = 'failed';
            })
            .addCase(fetchOptions.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchOptions.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.options = action.payload;
            })
            .addCase(fetchOptions.rejected, (state) => {
                state.status = 'failed';
            })
            .addCase(checkout.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(checkout.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(checkout.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error;
            })
            .addCase(requestOTP.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(requestOTP.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items.push(action.payload);
            })
            .addCase(requestOTP.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error;
            })
            .addCase(verifyOTP.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(verifyOTP.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            .addCase(verifyOTP.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error;
            })
            .addCase(logout.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items.push(action.payload);
            })
            .addCase(logout.rejected, (state) => {
                state.status = 'failed';
            })
    },
});

export default dataSlice.reducer;
