import { gutiMotors } from "@/api/GutiMotosAPI";
import type { OtpRequestResponse } from "../interfaces/otprequest.response";

export const OtpRequest = async (
  email: string,
): Promise<OtpRequestResponse> => {
  try {
    const { data } = await gutiMotors.post<OtpRequestResponse>(
      "/users/api/auth/otp/request/",
      {
        email,
      },
    );
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
