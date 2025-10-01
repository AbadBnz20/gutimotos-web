import { gutiMotors } from "@/api/GutiMotosAPI";
import type { DetailReplacementResponse } from "../interfaces/DetailReplacement.response";

export const getDetailReplacement = async (
  id: string
): Promise<DetailReplacementResponse> => {
  const { data } = await gutiMotors.get<DetailReplacementResponse>(
    `/products/api/product-photo/${id}`
  );
  return data;
};
