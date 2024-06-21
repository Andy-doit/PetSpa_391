export interface allBookingPaginationData {
    id: string,
    slug: string;
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
export interface UserInfor {
    id: string,
    username: string,
    role: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: number | undefined,
    profileImageUrl: string,
    coverImageUrl: string,
    birthday: string,

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
export interface BookingDetail {
    id: string,
    bookingNote: string,
    status: string,
    localDate: string,
    startTime: string,
    endTime: string,
    shopId: string,
    shopName: string,
    shopAddress: string,
    userId: string,
    firstName: string,
    lastName: string,
    userName: string,
    serviceId: string,
    serviceName: string,
    typePet: string,
    petName: string,
    petWeight: number,

    done: boolean,
    canceled: boolean,

}
export interface createPetInput {
    userId: string,
    slug: string,
    petName: string,
    petType: string,
    petAge: number,
    petGender: string,
    petWeight: number,
    petDescription: string,
    petPhoto: string,
    petNote: string,

}
export interface petCreateResponseSuccess {
    status: number;
    message: string;
    success: boolean;
}

export interface allPetPaginationData {
    id: string,
    slug: string,
    petName: string,
    petType: string,
    petAge: number,
    petGender: string,
    petPhoto: string,
    ownerId: string,
    ownerName: string,
    doHaveUpcomingSchedule: boolean

}
export interface allPetPaginationResponse {
    success: boolean;
    status: number;
    data: {
        data: allPetPaginationData[];
        totalCount: number;
        pageCount: number;
    };
}
export interface PetInfor {
    slug: string,
    userId: string,
    petName: string,
    petType: string,
    petAge: number,
    petGender: string,
    petWeight: number,
    petDescription: string,
    petPhoto: string,
    petNote: string,

}
