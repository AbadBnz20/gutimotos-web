import { gutiMotors } from "@/api/GutiMotosAPI";
import type { CurrencyResponse } from "../interfaces/Currency.response";

export const getCurrencies = async (page: string | null): Promise<CurrencyResponse[]> => {
  const { data } = await gutiMotors.get<CurrencyResponse[]>("/core/api/currency", {
    params: {
      page,
    },
  });
  return data;
};
