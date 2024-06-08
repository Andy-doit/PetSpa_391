export interface createBooking {
    customer_Id: string;
    serviceName: string;
    addressShop: string;
    nameShop: string;
    shopId: number;
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
    id: number | null;
    shopId: string;
    title: string;
    slug: string;
    serviceName: string,
    serviceDescription: string,
    minWeight: number,
    maxWeight: number,
    shopName: string,

}