export interface createServiceInput {
    userId: string,
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
    serviceCategoryId: number | undefined | null,
    serviceName: string | undefined | null,
    serviceDescription: string | undefined | null,
    price: number | undefined | null,
    minWeight: number | undefined | null,
    maxWeight: number | undefined | null,
    nomination: number | undefined | null,
    tags: string | undefined | null
}

export interface allServicePaginationData {
    userId: string,
    serviceCategoryId: number,
    serviceName: string,
    serviceDescription: string,
    price: number,
    minWeight: number,
    maxWeight: number,
    nomination: number,
    tags: string,
    servicephoto: string

}