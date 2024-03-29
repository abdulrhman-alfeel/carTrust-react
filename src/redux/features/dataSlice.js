// src/features/data/dataSlice.js
import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { billingInfoApi, checkoutApi, deleteData, fetchManufacturersApi, fetchModelsApi, fetchOptionsApi, fetchTrimsApi, fetchYearsApi, logoutApi, paymentLink, requestOTPApi, verifyOTPApi } from '../api';

export const fetchYears = createAsyncThunk('data/fetchYearsApi', async (modle,manufacturer) => {
    console.log(manufacturer,'deituls')
    const data = await fetchYearsApi(modle,manufacturer);
    return data;
});


// export const paymentUrl = createAsyncThunk('data/payment', async (cart,return_url,amount,string) => {
//     console.log("cartttttttttttttttt");
//     console.log(cart);
//     console.log(amount);
//     const data = await paymentLink(amount,"https://freemarkate.com/Seccessing_py",cart );
//     return data;
// });

export const paymentUrl = createAsyncThunk('data/payment', async ({ cart, return_url, amount, string }) => {
    console.log("cartttttttttttttttt");
    console.log(cart);
    console.log(amount);
    const data = await paymentLink(amount, return_url, cart);
    return data;
});


export const clearYears = createAction('data/clearYears');


export const billingInfo = createAsyncThunk('data/billingInfo', async () => {
    try {
        const data = await billingInfoApi();
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
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
    console.log(data , 'hhhhhhhhh')
    return data;
});

export const checkout = createAsyncThunk('data/checkoutApi', async (newData) => {
    try {
        const data = await checkoutApi(newData);
        console.log(data);
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
export const changestat = createAsyncThunk('data/changestat',  (statusing) => {
    return statusing;
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
        billing: null,
        payment_link: null,
        statusing:false,
        statusing_Items:[],
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
            .addCase(clearYears, (state) => {
                state.years = [];
              })

            .addCase(billingInfo.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(billingInfo.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.billing = action.payload;
            })
            .addCase(billingInfo.rejected, (state) => {
                state.status = 'failed';
            })


            .addCase(paymentUrl.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(paymentUrl.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.payment_link = action.payload;
            })
            .addCase(paymentUrl.rejected, (state) => {
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
            .addCase(changestat.fulfilled, (state,action) => {
                state.statusing === false?
                state.statusing = true
                :
                state.statusing = false;
                state.statusing= action.payload
                // state.statusing_Items.push(action.payload)

            })
    },
});

export default dataSlice.reducer;
