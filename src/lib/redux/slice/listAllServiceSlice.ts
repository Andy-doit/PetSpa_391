import { ServiceDetail, allServicesPaginationData, allServicesPaginationResponse, bookingCreateResponseSuccess, createBookingInput, getTimeSlot } from '@/models/bookingModels';
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
export const fetchTimeSlot = createAsyncThunk(
    'id/fetchTimeSlot',
    async ({ localDate, params }: { localDate: string, params: string }) => {
        try {
            const response = await agent.ServiceAPI.getTimeSlot(params, localDate) as getTimeSlot;
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

            // const formData = new FormData();

            // formData.append('customerId', bookingData.customerId);
            // formData.append('additionalMessage', bookingData.additionalMessage);
            // formData.append('serviceId', bookingData.serviceId);
            // formData.append('localDate', bookingData.localDate);
            // formData.append('petName', bookingData.petName);
            // formData.append('petAge', bookingData.petAge.toString());
            // formData.append('typePet', bookingData.typePet);
            // formData.append('petWeight', bookingData.petWeight.toString());
            // formData.append('petId', bookingData.localDate);
            // formData.append('petGender', bookingData.localDate);
            // formData.append('timeSlotDto', bookingData.timeSlotDto);
            const response = (await agent.ServiceAPI.createBooking(
                bookingData,
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