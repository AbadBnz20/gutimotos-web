import { gutiMotors } from "@/api/GutiMotosAPI";
import type { CheckAuth } from "../interfaces/check-auth.response";

export const checkAuth = async (): Promise<CheckAuth> => {
  console.log('update accesstoken')
  const refreshtoken = localStorage.getItem("token-refresh");
  if (!refreshtoken) throw new Error("No hay token en el storage");
  try {
    const { data } = await gutiMotors.post<CheckAuth>(
      "users/api/auth/refresh-token/",
      {
        refresh_token: refreshtoken,
      }
    );


    return data;
  } catch (error) {
    console.log(error);
    localStorage.removeItem("token-access");
    localStorage.removeItem("token-refresh");
    throw new Error("expirated");
  }
};
