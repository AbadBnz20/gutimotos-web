export interface ColorResponse {
    next_page: number;
    results:   Colors[];
}

export interface Colors {
    id:       number;
    name:     string;
    code_hex: string;
}
