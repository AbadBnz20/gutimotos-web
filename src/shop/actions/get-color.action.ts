import { gutiMotors } from "@/api/GutiMotosAPI";
import type {  ColorResponse } from "../interfaces/Color.response";

export const getColors = async (
  page: string | null
): Promise<ColorResponse> => {
  const { data  } = await gutiMotors.get<ColorResponse>("/core/api/color", {
    params: {
      page,
    },
  });
  return data;
};
