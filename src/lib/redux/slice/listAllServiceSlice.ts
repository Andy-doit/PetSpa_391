import { ServiceDetail, allServicesPaginationData, allServicesPaginationResponse, bookingCreateResponseSuccess, createBookingInput } from '@/models/bookingModels';
import agent from '@/utilities/agent';
import baseApi from '@/utilities/baseApi';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';


export interface ServiceState {
    allServicesPagination: allServicesPaginationResponse | null | undefined;
    allServicesFetchingStatus: string;
    allServicesFetchingError: boolean;
    allServicesFetchingLoading: boolean;
    returnedData: any;
    returnedDataStatus: string;
    returnedDataError: boolean;
    returnedDataLoading: boolean;


}

const initialState: ServiceState = {
    allServicesPagination: null,
    allServicesFetchingStatus: 'idle',
    allServicesFetchingError: false,
    allServicesFetchingLoading: false,
    returnedData: null,
    returnedDataStatus: 'idle',
    returnedDataError: false,
    returnedDataLoading: false,
};

export const fetchAllServicesPagination = createAsyncThunk(
    'service/fetchAllServicesPagination',
    async () => {
        try {
            const response = await agent.ServiceAPI.getServiceList();
            console.log('asdsadasd')
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


export const fetchServiceDetail = createAsyncThunk(
    'role/fetchServiceDetail',
    async ({ slug }: { slug: string }) => {
        try {
            const response = await agent.ServiceAPI.getServiceBySlug(slug) as ServiceDetail;
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

const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(fetchAllServicesPagination.pending, (state) => {
            state.allServicesFetchingLoading = true;
            state.allServicesFetchingStatus = 'loading';
        });
        builder.addCase(fetchAllServicesPagination.fulfilled, (state, action) => {
            state.allServicesPagination = action.payload;
            state.allServicesFetchingStatus = 'succeeded';
            state.allServicesFetchingLoading = false;
        });
        builder
            .addCase(fetchAllServicesPagination.rejected, (state) => {
                state.allServicesFetchingStatus = 'failed';
                state.allServicesFetchingError = true;
                state.allServicesFetchingLoading = false;
            })

    },
});
export const createBooking = createAsyncThunk(
    'servie/createBooking',
    async ({ bookingData }: { bookingData: createBookingInput }) => {
        try {
            console.log(bookingData);
            const formData = new FormData();

            formData.append('customerId', bookingData.customerId);
            formData.append('customerName', bookingData.customerName);
            formData.append('customerAddress', bookingData.customerAddress);
            formData.append('customerPhone', bookingData.customerPhone.toString());
            formData.append('additionalMessage', bookingData.additionalMessage);
            formData.append('serviceId', bookingData.serviceId);
            formData.append('serviceName', bookingData.serviceName);
            formData.append('localDate', bookingData.localDate);
            formData.append('timeSlot', bookingData.timeSlot);
            const response = (await agent.ServiceAPI.createBooking(
                formData,
            )) as bookingCreateResponseSuccess;
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

export const serviceReducer = serviceSlice.actions;

export default serviceSlice.reducer;