import { createServiceInput, serviceCreateResponseSuccess } from "@/models/shopModel";
import agent from "@/utilities/agent";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

export interface ShopState {
    returnedData: any;
    returnedDataStatus: string;
    returnedDataError: boolean;
    returnedDataLoading: boolean;
    allServicesPagination: any;
    allServicesFetchingStatus: string;
    allServicesFetchingError: boolean;
    allServicesFetchingLoading: boolean;
}

const initialState: ShopState = {
    returnedData: null,
    returnedDataStatus: 'idle',
    returnedDataError: false,
    returnedDataLoading: false,
    allServicesPagination: null,
    allServicesFetchingStatus: 'idle',
    allServicesFetchingError: false,
    allServicesFetchingLoading: false,
};

export const createService = createAsyncThunk(
    'shopOwner/createService',
    async ({ serviceData }: { serviceData: createServiceInput }) => {
        try {
            const response = (await agent.ShopOnwer.postCreateService(serviceData)) as serviceCreateResponseSuccess;
            return response.message;
        } catch (error) {
            if (error instanceof AxiosError) {
                throw error.response?.data.error.message || "An error occurred";
            }
            throw error;
        }
    },
);

export const fetchAllServicePagination = createAsyncThunk(
    'shopOwner/fetchAllServicePagination',
    async () => {
        try {
            const response = await agent.ShopOnwer.getAllService();
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

export const fetchServiceInfo = createAsyncThunk(
    'shopOwner/fetchServiceInfo',
    async ({ slug }: { slug: string }) => {
        try {
            const response = await agent.ShopOnwer.getServiceInfo(slug);
            return response;
        } catch (error) {
            if (error instanceof AxiosError) {
                throw error.response?.data.error.message || "An error occurred";
            }
            throw error;
        }
    },
);

export const deleteService = createAsyncThunk(
    'shopOwner/deleteService',
    async ({ slug }: { slug: string }) => {
        try {
            const response = await agent.ShopOnwer.deleteService(slug);
            return response;
        } catch (error) {
            if (error instanceof AxiosError) {
                throw error.response?.data.error.message || "An error occurred";
            }
            throw error;
        }
    },
);
export const updateService = createAsyncThunk(
    'shopOwner/updateService',
    async ({ serviceData }: { serviceData: createServiceInput }) => {
        try {
            const response = (await agent.ShopOnwer.updateService(
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
        builder
            // Handle createService
            .addCase(createService.pending, (state) => {
                state.returnedDataLoading = true;
                state.returnedDataStatus = 'loading';
            })
            .addCase(createService.fulfilled, (state, action) => {
                state.returnedData = action.payload;
                state.returnedDataLoading = false;
                state.returnedDataStatus = 'succeeded';
            })
            .addCase(createService.rejected, (state, action) => {
                state.returnedDataStatus = 'failed';
                state.returnedDataError = true;
                state.returnedDataLoading = false;
                state.returnedData = action.error.message;
            })
            // Handle fetchAllServicePagination
            .addCase(fetchAllServicePagination.pending, (state) => {
                state.allServicesFetchingLoading = true;
                state.allServicesFetchingStatus = 'loading';
            })
            .addCase(fetchAllServicePagination.fulfilled, (state, action) => {
                state.allServicesPagination = action.payload;
                state.allServicesFetchingLoading = false;
                state.allServicesFetchingStatus = 'succeeded';
            })
            .addCase(fetchAllServicePagination.rejected, (state, action) => {
                state.allServicesFetchingStatus = 'failed';
                state.allServicesFetchingError = true;
                state.allServicesFetchingLoading = false;
                state.allServicesPagination = action.error.message;
            })
            // Handle fetchServiceInfo
            .addCase(fetchServiceInfo.pending, (state) => {
                state.returnedDataLoading = true;
                state.returnedDataStatus = 'loading';
            })
            .addCase(fetchServiceInfo.fulfilled, (state, action) => {
                state.returnedData = action.payload;
                state.returnedDataLoading = false;
                state.returnedDataStatus = 'succeeded';
            })
            .addCase(fetchServiceInfo.rejected, (state, action) => {
                state.returnedDataStatus = 'failed';
                state.returnedDataError = true;
                state.returnedDataLoading = false;
                state.returnedData = action.error.message;
            })
            // Handle deleteService
            .addCase(deleteService.pending, (state) => {
                state.returnedDataLoading = true;
                state.returnedDataStatus = 'loading';
            })
            .addCase(deleteService.fulfilled, (state, action) => {
                state.returnedData = action.payload;
                state.returnedDataLoading = false;
                state.returnedDataStatus = 'succeeded';
            })
            .addCase(deleteService.rejected, (state, action) => {
                state.returnedDataStatus = 'failed';
                state.returnedDataError = true;
                state.returnedDataLoading = false;
                state.returnedData = action.error.message;
            });
    },
});

export const shopActions = shopSlice.actions;
export default shopSlice.reducer;
