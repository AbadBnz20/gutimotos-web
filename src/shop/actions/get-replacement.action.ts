import { gutiMotors } from "@/api/GutiMotosAPI";
import type { ReplacementResponse } from "../interfaces/Replacement.response";

export const getReplacement = async (
  cursor: string | null,
  currency_code: string | null,
  type_price_slug: string | null,
  brand_id: string | null,
  category_id: string | null,
  search: string | null
): Promise<ReplacementResponse> => {
  const { data } = await gutiMotors.get<ReplacementResponse>(
    "/products/api/product-photo",
    {
      params: {
        cursor,
        currency_code,
        type_price_slug,
        brand_id,
        category_id,
        search,
      },
    }
  );
  return data;
};
