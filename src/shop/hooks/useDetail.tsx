import { useQuery } from "@tanstack/react-query";
import { useProductStore } from "../store/product.store";
import { getDetailProduct } from "../actions/get-detailProduct.action";

export const useDetail = () => {
  const { idProduct } = useProductStore();
  return useQuery({
    queryKey: ["details", { idProduct }],
    queryFn: () => getDetailProduct(idProduct),
    enabled: !!idProduct,
    retry: 2,
    staleTime: 1000 * 60 * 60 * 24,
  });
};
