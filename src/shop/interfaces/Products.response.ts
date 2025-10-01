export interface ProductResponse {
    next_cursor:     string | null;
    previous_cursor: string | null;
    data:            Product[];
}

export interface Product {
    id:              number;
    motorcycle_file: number;
    photo:           string;
    brand:           string;
    motorcycle_type: string;
    color:           string;
    created:         Date;
}



