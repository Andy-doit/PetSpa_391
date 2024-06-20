import { createServiceInput, serviceCreateResponseSuccess } from "@/models/shopModel";
import agent from "@/utilities/agent";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

export interface ShopState {
    returnedData: any;
    returnedDataStatus: string;
    returnedDataError: boolean;
    returnedDataLoading: boolean;


}

const initialState: ShopState = {
    returnedData: null,
    returnedDataStatus: 'idle',
    returnedDataError: false,
    returnedDataLoading: false,
};
export const createService = createAsyncThunk(
    'shopOwner/createService',
    async ({ serviceData }: { serviceData: createServiceInput }) => {
        try {
            const response = (await agent.ShopOnwer.postCreateService(
                serviceData,
            )) as serviceCreateResponseSuccess;
            return response.message;
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
const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {},
    extraReducers: (builder) => {


    },
});


export const userReducer = shopSlice.actions;

export default shopSlice.reducer;
