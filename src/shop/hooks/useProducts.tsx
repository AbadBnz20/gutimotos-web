import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../actions/get-products.actions"
import { useSearchParams } from "react-router";

export const useProducts = () => {
  const [searchParams] = useSearchParams();
const cursor = searchParams.get('cursor');
 const colors = searchParams.get("color") ;
 const brand = searchParams.get("brand") ;
  return useQuery({
    queryKey: ["products",{cursor,colors,brand}],
    queryFn: () => getProducts(cursor,brand,colors),
    retry:2,
    staleTime:0
  })
}
