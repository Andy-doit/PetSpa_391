
import { allBookingPaginationResponse } from '@/models/userModels';
import agent from '@/utilities/agent';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';


export interface UserState {
    allBookingPagination: allBookingPaginationResponse | null | undefined;
    allBookingFetchingStatus: string;
    allBookingFetchingError: boolean;
    allBookingFetchingLoading: boolean;
    returnedData: any;
    returnedDataStatus: string;
    returnedDataError: boolean;
    returnedDataLoading: boolean;


}

const initialState: UserState = {
    allBookingPagination: null,
    allBookingFetchingStatus: 'idle',
    allBookingFetchingError: false,
    allBookingFetchingLoading: false,
    returnedData: null,
    returnedDataStatus: 'idle',
    returnedDataError: false,
    returnedDataLoading: false,
};

export const fetchAllBookingPagination = createAsyncThunk(
    'customer/fetchAllBookingPagination',
    async () => {
        try {
            const response = await agent.User.getallBooking();
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
export const fetchUserInforPagination = createAsyncThunk(
    'customer/UserInfor',
    async () => {
        try {
            const response = await agent.User.getProfileInfor();
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
export const fetchOrderBooking = createAsyncThunk(
    'id/fetchOrderBooking',
    async ({ slug }: { slug: string }) => {
        try {
            const response = await agent.User.getorderBooking(slug);
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

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(fetchAllBookingPagination.pending, (state) => {
            state.allBookingFetchingLoading = true;
            state.allBookingFetchingStatus = 'loading';
        });
        builder.addCase(fetchAllBookingPagination.fulfilled, (state, action) => {
            state.allBookingPagination = action.payload;
            state.allBookingFetchingLoading = false;
        });
        builder
            .addCase(fetchAllBookingPagination.rejected, (state) => {
                state.allBookingFetchingStatus = 'failed';
                state.allBookingFetchingError = true;
                state.allBookingFetchingLoading = false;
            });

    },
});


export const userReducer = userSlice.actions;

export default userSlice.reducer;