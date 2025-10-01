import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { getReplacement } from "../actions/get-replacement.action";

export const useReplacement = () => {
  const [searchParams] = useSearchParams();
  const cursor = searchParams.get("cursor");
  const currency = searchParams.get("currency_code");
  const type_price_slug = searchParams.get("type_price_slug");
  const brand = searchParams.get("brand");
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  return useQuery({
    queryKey: ["replacement", { cursor, currency,type_price_slug, brand, category,search }],
    queryFn: () => getReplacement(cursor, currency,type_price_slug, brand, category,search),
    retry: 2,
    staleTime: 0,
  });
};
