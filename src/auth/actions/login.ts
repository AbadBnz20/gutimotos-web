import { gutiMotors } from "@/api/GutiMotosAPI";
import type { AuthResponse } from "../interfaces/auth.response";

export const login = async (token: string): Promise<AuthResponse> => {
  try {
    const { data } = await gutiMotors.post<AuthResponse>(
      "/users/api/auth/google/",
      {
        token,
      }
    );

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
