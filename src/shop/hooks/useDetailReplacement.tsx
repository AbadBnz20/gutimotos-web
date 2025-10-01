import { useQuery } from "@tanstack/react-query";
import { useProductStore } from "../store/product.store";
import { getDetailReplacement } from "../actions/get-detailReplacement";

export const useDetailReplacement = () => {
  const { idProduct } = useProductStore();
  return useQuery({
    queryKey: ["detailReplacement", { idProduct }],
    queryFn: () => getDetailReplacement(idProduct),
    enabled: !!idProduct,
    retry: 2,
    staleTime: 1000 * 60 * 60 * 24,
  });
};