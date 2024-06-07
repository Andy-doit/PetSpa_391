export interface createBooking {
    customer_Id: string;
    serviceName: string;
    addressShop: string;
    nameShop: string;
    shop_id: string;
    petType: string;
    appointmentDate: string;
    appointmentSlot: string;
    petName: string;
    petWeight: number;
    notes: string;
}
export interface allServicesPaginationData {
    id: number,
    serviceName: string;
    price: number;
    address: string,
    nomination: number,
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