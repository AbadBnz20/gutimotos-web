export interface BrandResponse {
    next_page: number;
    results:   Brand[];
}

export interface Brand {
    id:   number;
    name: string;
}
