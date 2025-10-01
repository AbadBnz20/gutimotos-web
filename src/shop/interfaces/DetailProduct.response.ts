export interface DetailProductResponse {
    success: boolean;
    message: string;
    data:    DataDetailProduct;
}

export interface DataDetailProduct {
    motorcycle_type_id:   number;
    motorcycle_type_name: string;
    brand_name:           string;
    color_name:           string;
    photos:               Photo[];
}

export interface Photo {
    id:    number;
    photo: string;
}
