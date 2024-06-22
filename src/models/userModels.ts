export interface allBookingPaginationData {
    id: string,
    slug: string | undefined | null;
    localDate: string | undefined | null,
    status: string | undefined | null,
    serviceName: string | undefined | null,
    shopName: string | undefined | null,
    petName: string | undefined | null,
    timeSlotDto: {
        startLocalDateTime: string | null,
        endLocalDateTime: string | null,
    }

}
export interface UserInfor {
    id: string,
    username: string | undefined | null,
    role: string | undefined | null,
    firstName: string | undefined | null,
    lastName: string | undefined | null,
    email: string | undefined | null,
    phone: number | undefined,
    profileImageUrl: string | undefined | null,
    coverImageUrl: string | undefined | null,
    birthday: string | undefined | null,

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
    slug: string | undefined | null,
    userId: string,
    petName: string | undefined | null,
    petType: string | undefined | null,
    petAge: number | undefined | null,
    petGender: string | undefined | null,
    petWeight: number | undefined | null,
    petDescription: string | undefined | null,
    petPhoto: string | undefined | null,
    petNote: string | undefined | null,

}
