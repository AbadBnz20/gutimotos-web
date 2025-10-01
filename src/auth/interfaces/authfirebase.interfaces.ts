import type { User } from "./user.interfaces";

export interface AuthFirebaseInterface {
    status: boolean;
    token: string | null;
    user: User | null;
}