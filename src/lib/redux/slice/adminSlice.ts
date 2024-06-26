import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import agent from "@/utilities/agent";
import { AccountInput, ShopInput, shopCreateResponseSuccess } from "@/models/adminModel";

const initialState = {
    allShopsPagination: null,
    allShopsFetchingStatus: 'idle',
    allShopsFetchingError: false,
    allShopsFetchingLoading: false,
    returnedData: null,
    returnedDataStatus: 'idle',
    returnedDataError: false,
    returnedDataLoading: false,
};


export const createShop = createAsyncThunk(
    'admin/createShop',
    async ({ shopData }: { shopData: ShopInput }) => {
        try {
            const response = (await agent.ShopOnwer.createShopInfor(
                shopData,
            )) as shopCreateResponseSuccess;
            return response.message;


        } catch (error) {
            if (error instanceof AxiosError) {
                return {
                    message: error.response?.data.error.message,
                    status: error.response?.status,
                };
            }
        }
    }
);

export const fetchAllShopPagination = createAsyncThunk(
    'admin/fetchAllShopPagination',
    async () => {
        try {
            const response = await agent.Admin.getAllShops();
            return response;

        } catch (error) {
            if (error instanceof AxiosError) {
                return {
                    message: error.response?.data.error.message,
                    status: error.response?.status,
                };
            }
        }
    },
);
export const fetchAllCusPagination = createAsyncThunk(
    'admin/fetchAllCusPagination',
    async () => {
        try {
            const response = await agent.Admin.getAllCus();
            return response;

        } catch (error) {
            if (error instanceof AxiosError) {
                return {
                    message: error.response?.data.error.message,
                    status: error.response?.status,
                };
            }
        }
    },
);
export const fetchShopInfor = createAsyncThunk(
    'admin/fetchShopInfor',
    async ({ slug }: { slug: string }) => {
        try {
            const response = await agent.Admin.getShopInfor(slug);
            return response;
        } catch (error) {
            if (error instanceof AxiosError) {
                return {
                    message: error.response?.data.error.message,
                    status: error.response?.status,
                };
            }
        }
    },
);
export const deleteShop = createAsyncThunk(
    'customer/fetchDeletePet',
    async ({ slug }: { slug: string }) => {
        try {
            const response = await agent.Admin.deleteShop(slug);
            return response;
        } catch (error) {
            if (error instanceof AxiosError) {
                return {
                    message: error.response?.data.error.message,
                    status: error.response?.status,
                };
            }
        }
    },
);
export const deleteCus = createAsyncThunk(
    'customer/fetchDeletePet',
    async ({ slug }: { slug: string }) => {
        try {
            const response = await agent.Admin.deleteAcount(slug);
            return response;
        } catch (error) {
            if (error instanceof AxiosError) {
                return {
                    message: error.response?.data.error.message,
                    status: error.response?.status,
                };
            }
        }
    },
);
const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createShop.pending, (state) => {
                state.returnedDataLoading = true;
                state.returnedDataStatus = 'loading';
            })
            .addCase(createShop.fulfilled, (state, action) => {
                // state.returnedData = action.payload;
                state.returnedDataLoading = false;
                state.returnedDataStatus = 'succeeded';
            })
            .addCase(createShop.rejected, (state) => {
                state.returnedDataStatus = 'failed';
                state.returnedDataError = true;
                state.returnedDataLoading = false;
            });
    },
});

export const adminActions = adminSlice.actions;
export default adminSlice.reducer;
