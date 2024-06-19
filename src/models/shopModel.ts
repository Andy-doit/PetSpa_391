export  interface createService {
    shopId : string ,
    serviceCategoryId : string,
    serviceName : string ,
    serviceDescription : string ,
    price : number,
    minWeight: number,
    maxWeight : number,
    typePet : string, 
    tags : string

}


export interface createResponseSuccess {
    status: number;
    message: string;
    success: boolean;
}