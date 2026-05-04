import { gutiMotors } from "@/api/GutiMotosAPI";
import type { AuthOtpResponse } from "../interfaces/authOtp.response";

export const loginOTP = async (email:string,code:string):Promise<AuthOtpResponse> =>{
    try {
        const {data} = await gutiMotors.post<AuthOtpResponse>("/users/api/auth/otp/verify/",{
            email,
            code
        });
        return data;
    } catch (error) {
        console.log(error)
        throw error;
    }

}