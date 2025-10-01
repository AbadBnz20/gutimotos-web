import { gutiMotors } from "@/api/GutiMotosAPI";
import type { BrandResponse } from "../interfaces/Brands.response";

export const getBrands = async (
  page: string | null,
  type: string
): Promise<BrandResponse> => {
  const { data } = await gutiMotors.get<BrandResponse>("/core/api/brand", {
    params: {
      page,
      product_type: type,
    },
  });
  return data;
};
