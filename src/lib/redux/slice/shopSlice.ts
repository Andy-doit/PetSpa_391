import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import agent from '@/utilities/agent';
import { createResponseSuccess, createService } from '@/models/shopModel';

    export const createServicebyShop = createAsyncThunk(
        'servie/createService',
        async ({ bookingData }: { bookingData: createService }) => {
            try {
    
    
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
                const response = (await agent.ShopOnwer.postCreateService(
                    bookingData,
                )) as createResponseSuccess;
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

