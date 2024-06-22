export interface AccountInput {
    id: string,
    firstname: string,
    lastName: string,
    email: string,
    password: string,
    username: string,
    phoneNumber: string

}

export interface ShopOnwerInfor {
    slug: string | undefined | null,
    id: string,
    firstname: string | undefined | null,
    lastName: string | undefined | null,
    email: string | undefined | null,
    password: number | undefined | null,
    username: string | undefined | null,
    phoneNumber: string | undefined | null,


}

export interface shopCreateResponseSuccess {
    status: number;
    message: string;
    success: boolean;
}

export interface allShopPaginationData {
    id: string,
    email: string,
    username: string,
    phoneNumber: string,
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