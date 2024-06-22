
import { allBookingPaginationResponse, allPetPaginationResponse, createPetInput, petCreateResponseSuccess } from '@/models/userModels';
import agent from '@/utilities/agent';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';


export interface UserState {
    allBookingPagination: allBookingPaginationResponse | null | undefined;
    allBookingFetchingStatus: string;
    allBookingFetchingError: boolean;
    allBookingFetchingLoading: boolean;
    allPetPagination: allPetPaginationResponse | null | undefined;
    allPetFetchingStatus: string;
    allPetFetchingError: boolean;
    allPetFetchingLoading: boolean;
    returnedData: any;
    returnedDataStatus: string;
    returnedDataError: boolean;
    returnedDataLoading: boolean;


}

const initialState: UserState = {
    allPetPagination: null,
    allBookingPagination: null,
    allBookingFetchingStatus: 'idle',
    allBookingFetchingError: false,
    allPetFetchingStatus: 'idle',
    allPetFetchingError: false,
    allPetFetchingLoading: false,
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
export const createPet = createAsyncThunk(
    'customer/createPet',
    async ({ petData }: { petData: createPetInput }) => {
        try {
            const response = (await agent.User.createPet(
                petData,
            )) as petCreateResponseSuccess;
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

export const updatePet = createAsyncThunk(
    'customer/updatePet',
    async ({ petData }: { petData: createPetInput }) => {
        try {
            const response = (await agent.User.updatePet(
                petData,
            )) as petCreateResponseSuccess;
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
export const fetchAllPetPagination = createAsyncThunk(
    'customer/fetchAllPetPagination',
    async () => {
        try {
            const response = await agent.User.getAllPet();
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

export const fetchPetInfor = createAsyncThunk(
    'customer/fetchPetInfor',
    async ({ slug }: { slug: string }) => {
        try {
            const response = await agent.User.getPetInfor(slug);
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
export const deletePet = createAsyncThunk(
    'customer/fetchDeletePet',
    async ({ slug }: { slug: string }) => {
        try {
            const response = await agent.User.deletePet(slug);
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
        builder.addCase(fetchAllPetPagination.pending, (state) => {
            state.allPetFetchingLoading = true;
            state.allPetFetchingStatus = 'loading';
        });
        builder.addCase(fetchAllPetPagination.fulfilled, (state, action) => {
            state.allPetPagination = action.payload;
            state.allPetFetchingLoading = false;
        });
        builder
            .addCase(fetchAllPetPagination.rejected, (state) => {
                state.allPetFetchingStatus = 'failed';
                state.allPetFetchingError = true;
                state.allPetFetchingLoading = false;
            });

    },
});


export const userReducer = userSlice.actions;

export default userSlice.reducer;