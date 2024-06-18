export interface allBookingPaginationData {
    id: string,
    localDate: string,
    status: string,
    serviceName: string,
    shopName: string,
    petName: string,
    timeSlotDto: {
        startLocalDateTime: string | null,
        endLocalDateTime: string | null,
    }

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