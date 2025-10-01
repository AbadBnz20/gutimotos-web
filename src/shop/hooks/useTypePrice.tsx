import { useQuery } from "@tanstack/react-query";
import { getTypePrice } from "../actions/get-typeprice.action";
import type { TypePriceResponse } from "../interfaces/TypePrice.response";

export const useTypePrice = (type: string) => {
  const { data } = useQuery<TypePriceResponse[]>({
    queryKey: ["typeprice",{type}],
    queryFn: () => getTypePrice(type),
    retry: 2,
    staleTime: 1000 * 60 * 30,
  });
  return { data: data ?? [] };
};
