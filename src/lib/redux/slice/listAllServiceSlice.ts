import { ServiceDetail, allServicesPaginationData, allServicesPaginationResponse } from '@/models/bookingModels';
import agent from '@/utilities/agent';
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


export const fetchServiceDetail = createAsyncThunk<ServiceDetail, { slug: string }>(
    'role/fetchServiceDetail',
    async (arg: { slug: string }) => {
        const { slug } = arg;
        
        try {
            const response = await agent.ServiceAPI.getServiceBySlug(slug);
            console.log(response);
            return { ...response.data.post, ...{ bought: response.data.bought } };
        } catch (error) {
            console.error(error);
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

export const serviceReducer = serviceSlice.actions;

export default serviceSlice.reducer;