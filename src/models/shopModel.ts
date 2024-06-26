export interface createServiceInput {
    userId: string,
    id: string,
    serviceCategoryId: number,
    serviceName: string,
    serviceDescription: string,
    price: number,
    minWeight: number,
    maxWeight: number,
    tags: string

}


export interface serviceCreateResponseSuccess {
    status: number;
    message: string;
    success: boolean;
}

export interface ServiceInfor {
    slug: string | undefined | null,
    userId: string | undefined | null,
    id: string,
    serviceName: string | undefined | null,
    serviceDescription: string | undefined | null,
    price: number | undefined | null,
    minWeight: number | undefined | null,
    maxWeight: number | undefined | null,
    nomination: number | undefined | null,
    tags: string | undefined | null
}
export interface shopInfor {
    id: string,
    shopName: string,
    shopAddress: string,
    role: string,
    firstName: string,
    lastName: string,
    shopEmail: string,
    shopDescription: string,
    openTime: string,
    closeTime: String,
    isAvailable: boolean,
    totalServices: number,
    nomination: number,
    shopTitle: string,
    shopPhone: string | undefined,
    profileImageUrl: string | undefined | null,
    coverImageUrl: string | undefined | null,
    birthday: string | undefined | null,

}
export interface ShopInput {
    userId: string,
    id: string,
    shopName: string,
    shopAddress: string,
    shopPhone: string,
    area: string,
    shopDescription: string,
    openTime: string,
    closeTime: string,
    isAvailable: boolean,
    shopEmail: string,
    shopTitle: string,

}
export interface shopCreateResponseSuccess {
    status: number;
    message: string;
    success: boolean;
}

export interface allServicePaginationData {
    id: string,
    serviceName: string,
    serviceCategoryId: number,
    serviceDescription: string,
    price: number,
    minWeight: number,
    maxWeight: number,
    nomination: number,
    tags: string,


}