export interface CheckAuth {
    success: boolean;
    message: string;
    data:    Data;
}

export interface Data {
    access: string;
}
