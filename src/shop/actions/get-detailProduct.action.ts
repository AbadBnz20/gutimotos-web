import { gutiMotors } from "@/api/GutiMotosAPI";
import type { DetailProductResponse } from "../interfaces/DetailProduct.response";

export const getDetailProduct = async (
  id: string
): Promise<DetailProductResponse> => {
  const { data } = await gutiMotors.get<DetailProductResponse>(
    `/motorcycles/api/motorcycle-photo/${id}`
  );
  return data;
};
