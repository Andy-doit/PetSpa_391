export interface AccountInput {
    id: string,
    firstname: string,
    lastName: string,
    email: string,
    password: string,
    username: string,
    phone: string

}


export interface shopCreateResponseSuccess {
    status: number;
    message: string;
    success: boolean;
}
export interface allCusPaginationData {
    id: string,
    email: string,
    username: string,
    phone: string,
    role : string ,
    firstName :string,
    lastName : string,
    profileImageUrl : string ,
    coverImageUrl : string,
    birthday : string,
    status: boolean

}
export interface allShopPaginationData {
    id: string,
    email: string,
    username: string,
    phone: string,
    status: boolean

}
export interface ShopInfor {
    slug: string | undefined | null,
    id: string | undefined | null,
    firstname: string | undefined | null,
    lastName: string | undefined | null,
    email: string | undefined | null,
    username: string | undefined | null,
    phone: string | undefined | null
    status: boolean
}


export interface allAccountShopPaginationResponse {
    success: boolean;
    status: number;
    data: {
        data: allShopPaginationData[];
        totalCount: number;
        pageCount: number;
    };
}