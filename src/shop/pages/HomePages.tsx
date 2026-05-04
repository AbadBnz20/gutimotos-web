import { useEffect } from "react";
import { CustomPagination } from "../components/CustomPagination";
import { ProductsContent } from "../components/ProductsContent";
import { useProducts } from "../hooks/useProducts";
import { useSearchParams } from "react-router";

export const HomePages = () => {
  const { data, isLoading } = useProducts();
  const [searchParams,setSearchParams] = useSearchParams();

  useEffect(() => {
const newParams = new URLSearchParams(searchParams);
  newParams.delete("cursor");
  newParams.delete("brand");
  newParams.delete("color");
  setSearchParams(newParams);

  }, []);

  return (
    <div>
      <ProductsContent products={data?.data || []} isloading={isLoading} />
      <CustomPagination
        next_cursor={data?.next_cursor}
        previous_cursor={data?.previous_cursor}
      />
    </div>
  );
};
