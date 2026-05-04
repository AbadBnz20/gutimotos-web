export interface AuthOtpResponse {
    success: boolean;
    message: string;
    action:  string;
    access:  string;
    refresh: string;
    user:    User;
}

export interface User {
    id:             string;
    email:          string;
    email_verified: boolean;
    is_active:      boolean;
}
