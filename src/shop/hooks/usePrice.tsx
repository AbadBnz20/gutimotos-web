import { useQuery } from "@tanstack/react-query";
import { getPrice } from "../actions/get-price.action";

export const usePrice = (type: string, idslug: string) => {
  // const { idslug } = useProductStore();
  return useQuery({
    queryKey: ["prices", { type, idslug }],
    queryFn: () => getPrice(idslug, type),
    retry: 2,
    staleTime: 0,
     enabled: !!type ,
  });
};
