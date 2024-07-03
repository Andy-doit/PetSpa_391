

import { AllShopTimeSlotIn4Response, CreateShopTimeSlotInput, ShopInput, allOrderBookingPaginationResponse, createServiceInput, serviceCreateResponseSuccess, shopCreateResponseSuccess, updatePasswordInputResponseSuccess, updatePasswordShopInput } from "@/models/shopModel";
import agent from "@/utilities/agent";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

export interface ShopState {
    allOrderBookingPagination: allOrderBookingPaginationResponse | null | undefined;
    allOrderBookingFetchingStatus: string;
    allOrderBookingFetchingError: boolean;
    allOrderBookingFetchingLoading: boolean;
    allShopTimeSlotPagination: AllShopTimeSlotIn4Response | null | undefined;
    allShopTimeSlotFetchingStatus: string;
    allShopTimeSlotFetchingError: boolean;
    allShopTimeSlotFetchingLoading: boolean;
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
    allOrderBookingPagination: null,
    allOrderBookingFetchingStatus: 'idle',
    allOrderBookingFetchingError: false,
    allOrderBookingFetchingLoading: false,
    allShopTimeSlotPagination: null,
    allShopTimeSlotFetchingStatus: 'idle',
    allShopTimeSlotFetchingError: false,
    allShopTimeSlotFetchingLoading: false,
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
export const fetchAllOrderBookingPagination = createAsyncThunk(
    'shopOwner/fetchAllOrderBookingPagination',
    async () => {
        try {
            const response = await agent.ShopOnwer.getAllOrderBooking();
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
export const fetchShopInforPagination = createAsyncThunk(
    'shopOnwer/ShopInfor',
    async () => {
        try {
            const response = await agent.ShopOnwer.getShopProfileInfor();
            console.log(response)
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
export const createShopInfor = createAsyncThunk(
    'shopOnwer/createShop',
    async ({ shopData }: { shopData: ShopInput }) => {
        try {
            const response = await agent.ShopOnwer.createShopInfor(shopData);
            return response.data as shopCreateResponseSuccess;
        } catch (error) {
            if (error instanceof AxiosError) {
                throw error.response?.data.error.message || "An error occurred";
            }
            throw error;
        }
    }
);
export const updateShopInfor = createAsyncThunk(
    'shopOnwer/updateShopInfor',
    async ({ shopData }: { shopData: ShopInput }) => {
        try {
            const response = await agent.ShopOnwer.updateShopInfor(shopData);
            return response.data as shopCreateResponseSuccess;
        } catch (error) {
            if (error instanceof AxiosError) {
                throw error.response?.data.error.message || "An error occurred";
            }
            throw error;
        }
    }
);
export const patchPasswordShopProfile = createAsyncThunk(
    'shopOnwer/patchPasswordShopProfile',
    async ({ profileData }: { profileData: updatePasswordShopInput }) => {
        try {
            const response = (await agent.ShopOnwer.updatepasswordShopInfor(
                profileData,
            )) as updatePasswordInputResponseSuccess;
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

export const fetchServiceInfo = createAsyncThunk(
    'shopOwner/fetchServiceInfo',
    async ({ slug }: { slug: string }) => {
        try {
            const response = await agent.ShopOnwer.getServiceInfo(slug);
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
export const fetchAllShopTimeSlotPagination = createAsyncThunk(
    'shopOwner/fetchAllShopTimeSlotPagination',
    async () => {
        try {
            const response = await agent.ShopOnwer.getShopTimeSlot();
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
export const createShopTimeSlot = createAsyncThunk(
    'shopOnwer/createShopTimeSlot',
    async ({ timeSlotData }: { timeSlotData: CreateShopTimeSlotInput }) => {
        try {
            const response = await agent.ShopOnwer.postCreateShopTimeSlot(timeSlotData);
            return response.data as shopCreateResponseSuccess;
        } catch (error) {
            if (error instanceof AxiosError) {
                throw error.response?.data.error.message || "An error occurred";
            }
            throw error;
        }
    }
);
const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
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
            });
        builder.addCase(fetchAllOrderBookingPagination.pending, (state) => {
            state.allOrderBookingFetchingLoading = true;
            state.allOrderBookingFetchingStatus = 'loading';
        });
        builder.addCase(fetchAllOrderBookingPagination.fulfilled, (state, action) => {
            state.allOrderBookingPagination = action.payload;
            state.allOrderBookingFetchingLoading = false;
        });
        builder
            .addCase(fetchAllOrderBookingPagination.rejected, (state) => {
                state.allOrderBookingFetchingStatus = 'failed';
                state.allOrderBookingFetchingError = true;
                state.allOrderBookingFetchingLoading = false;
            });
        builder.addCase(fetchAllShopTimeSlotPagination.pending, (state) => {
            state.allShopTimeSlotFetchingLoading = true;
            state.allShopTimeSlotFetchingStatus = 'loading';
        });
        builder.addCase(fetchAllShopTimeSlotPagination.fulfilled, (state, action) => {
            state.allShopTimeSlotPagination = action.payload;
            state.allShopTimeSlotFetchingLoading = false;
        });
        builder
            .addCase(fetchAllShopTimeSlotPagination.rejected, (state) => {
                state.allShopTimeSlotFetchingStatus = 'failed';
                state.allShopTimeSlotFetchingError = true;
                state.allShopTimeSlotFetchingLoading = false;
            });

    },
});

export const shopActions = shopSlice.actions;
export default shopSlice.reducer;
