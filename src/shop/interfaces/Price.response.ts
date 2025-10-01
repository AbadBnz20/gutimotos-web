export interface PriceResponse {
    success: boolean;
    message: string;
    data:    PriceProduct;
}

export interface PriceProduct {
    type_price_name: string;
    prices:          Price[];
}

export interface Price {
    currency_name: string;
    currency_code: string;
    final_price:   number;
}
