export interface createServiceInput {
    userId: string,
    serviceCategoryId: number,
    serviceName: string,
    serviceDescription: string,
    price: number,
    minWeight: number,
    maxWeight: number,
    typePet: string,
    tags: string

}


export interface serviceCreateResponseSuccess {
    status: number;
    message: string;
    success: boolean;
}