export interface AuthResponse {
    success: boolean;
    message: string;
    data:    Data;
}

export interface Data {
    access:  string;
    refresh: string;
    user:    User;
}

export interface User {
    id:             string;
    email:          string;
    email_verified: boolean;
}
