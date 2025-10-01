import { gutiMotors } from "@/api/GutiMotosAPI";
import type { ProductResponse } from "../interfaces/Products.response";

export const getProducts = async (
  cursor: string | null,
 brand_id: string | null,
 color_id: string | null
): Promise<ProductResponse> => {
  const { data } = await gutiMotors.get<ProductResponse>(
    "/motorcycles/api/motorcycle-photo",
    {
      params: {
        cursor,
        brand_id,
        color_id
      },
    }
  );
  return data;
};
