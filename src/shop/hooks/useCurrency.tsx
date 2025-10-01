import { useQuery } from "@tanstack/react-query";
import { getCurrencies } from "../actions/get-currency.action";
import type { CurrencyResponse } from "../interfaces/Currency.response";

export const useCurrency = () => {
  const { data, isLoading } = useQuery<CurrencyResponse[]>({
    queryKey: ["currency"],
    queryFn: () => getCurrencies(null),
    retry: 2,
    staleTime: 1000 * 60 * 60 * 24,
  });
  return {
    data: data??[],
    isLoading,
  };
};
