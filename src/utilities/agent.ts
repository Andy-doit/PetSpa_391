import { AxiosResponse } from "axios";
import apiJWT from "./api";
import baseApi from "./baseApi";
import { createBookingInput } from "@/models/bookingModels";


const responseBody = (response: AxiosResponse) => response.data;
const requests = {
  get: <T>(url: string, params?: T) =>
    apiJWT.get(url, { params }).then(responseBody),
  post: <T>(url: string, body: T) => apiJWT.post(url, body).then(responseBody),
  put: <T>(url: string, body: T) => apiJWT.put(url, body).then(responseBody),
  del: <T>(url: string, params?: T) =>
    apiJWT.delete(url, { params }).then(responseBody),
  baseApiGet: <T>(url: string, params?: T) =>
    baseApi.get(url, { params }).then(responseBody),
  baseApiPost: <T>(url: string, body: T) =>
    baseApi.post(url, body).then(responseBody),
  baseApiPut: <T>(url: string, body: T) =>
    baseApi.put(url, body).then(responseBody),
  baseApiPatch: <T>(url: string, body: T) =>
    baseApi.patch(url, body).then(responseBody),
  baseApiDelete: <T>(url: string, params?: T) =>
    baseApi.delete(url, { params }).then(responseBody),
};


const ServiceAPI = {
  getServiceList: () =>
    requests.baseApiGet("api/v1/service/all"),
  getServiceBySlug: (slug: string) =>
    requests.baseApiGet(`/api/v1/service/${slug}`),
  createBooking: (input: createBookingInput) =>
    requests.baseApiPost('api/v1/booking/auth', input),
  getTimeSlot: (params: string, localDate: string) =>
    requests.baseApiGet(`api/v1/cache-shop-time-slot/${params}/${localDate}`)
};

const User = {
  getallBooking: () =>
    requests.get("/api/v1/booking/auth"),
  getorderBooking: (slug: string) =>
    requests.get(`api/v1/booking/auth/${slug}`),
  getProfileInfor: () =>
    requests.get("api/v1/user"),
}

const agent = {
  ServiceAPI,
  User
};
export default agent;