import { AxiosResponse } from "axios";
import apiJWT from "./api";
import baseApi from "./baseApi";
import { createBookingInput } from "@/models/bookingModels";
import { ShopInput, createServiceInput } from '@/models/shopModel';
import { CancelBookingInput, createPetInput } from "@/models/userModels";
import { AccountInput, ShopInfor } from "@/models/adminModel";


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

//booking
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


//ShopOnwer
const ShopOnwer = {
  getAllService: () =>
    requests.get("/api/v1/service/all/auth"),
  postCreateService: (input: createServiceInput) =>
    requests.baseApiPost("api/v1/service", input),
  getServiceInfo: (slug: string) =>
    requests.baseApiGet(`api/v1/service/${slug}`),
  deleteService: (slug: string) =>
    requests.baseApiDelete(`api/v1/service/${slug}`),
  updateService: (input: createServiceInput) =>
    requests.baseApiPut("api/v1/service", input),
  getShopProfileInfor: () =>
    requests.get("api/v1/shop/auth"),
  createShopInfor: (input: ShopInput) =>
    requests.baseApiPost("/api/v1/shop", input),
}


//User
const User = {
  getallBooking: () =>
    requests.get("/api/v1/booking/auth"),
  getorderBooking: (slug: string) =>
    requests.get(`api/v1/booking/auth/${slug}`),
  deleteBooking: (input: CancelBookingInput) =>
    requests.baseApiPost("/api/v1/booking/auth/cancel", input),
  getProfileInfor: () =>
    requests.get("api/v1/user"),
  createPet: (input: createPetInput) =>
    requests.baseApiPost("api/v1/pet", input),
  getAllPet: () =>
    requests.get("api/v1/pet/all/auth"),
  getPetInfor: (slug: string) =>
    requests.baseApiGet(`api/v1/pet/${slug}`),
  deletePet: (slug: string) =>
    requests.baseApiDelete(`api/v1/pet/${slug}`),
  updatePet: (input: createPetInput) =>
    requests.baseApiPut("api/v1/pet", input),
}

//Admin
const Admin = {
  getAllShops: () =>
    requests.get("api/v1/admin/manageShopOwner/viewAll"),
  getAllCus: () =>
    requests.get("api/v1/admin/manageCustomer/viewAll"),
  getShopInfor: (slug: string) =>
    requests.baseApiGet(`api/v1/admin/viewDetail/${slug}`),
  deleteShop: (slug: string) =>
    requests.baseApiDelete(`api/v1/admin/delete/${slug}`),
  createShop: (input: AccountInput) =>
    requests.baseApiPost("api/v1/admin/manageShopOwner/addShopOwner", input),

  deleteAcount: (slug: string) =>
    requests.baseApiDelete(`api/v1/admin/delete/${slug}`),
}



const agent = {
  ServiceAPI,
  User,
  ShopOnwer,
  Admin
};
export default agent;