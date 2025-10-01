import { gutiMotors } from "@/api/GutiMotosAPI";

export const logout = async () => {
  const refreshtoken = localStorage.getItem("token-refresh");
  if (!refreshtoken) throw new Error("No hay token en el storage");
  try {
    await gutiMotors.post("/users/api/auth/logout/", {
      refresh_token: refreshtoken,
    });
  } catch (error) {
    console.log(error);
  }
};
