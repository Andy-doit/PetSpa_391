export interface createBookingInput {
    customerAddress: string,
    customerPhone: number,
    customerEmail: string,
    additionalMessage: string,
    serviceId: string,
    localDate: string,
    timeSlot: string,
    customerId: string;
    serviceName: string;
    shopName: string
    customerName: string;
    addressShop: string;
    petType: string;
    petName: string;
    petWeight: number;
    notes: string;
}
export interface allServicesPaginationData {
    id: string,
    slug: string,
    serviceName: string;
    price: number;
    address: string,
    nomination: number,
    shopName: string,
    shopOwner: {
        id: number,
        shopId: number;

    };
}
export interface allServicesPaginationResponse {
    success: boolean;
    status: number;
    data: {
        data: allServicesPaginationData[];
        totalCount: number;
        pageCount: number;
    };
}
export interface ServiceDetail {
    id: string;
    shopId: string;
    title: string;
    slug: string;
    serviceName: string,
    serviceDescription: string,
    minWeight: number,
    maxWeight: number,
    shopName: string,

}
export interface bookingCreateResponseSuccess {
    status: number;
    message: string;
    success: boolean;
}