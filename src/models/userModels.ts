export interface allBookingPaginationData {
    id: string,
    slug: string,
    serviceName: string,
    localDate: string,
    timeSlotDto: string,
    typePet: number,
    shopName: string,
}
export interface allBookingPaginationResponse {
    success: boolean;
    status: number;
    data: {
        data: allBookingPaginationData[];
        totalCount: number;
        pageCount: number;
    };
}