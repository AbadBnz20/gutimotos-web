import { CustomPagination } from "../components/CustomPagination";
import { ProductsContent } from "../components/ProductsContent";
import { useProducts } from "../hooks/useProducts";

export const HomePages = () => {
  const { data, isLoading } = useProducts();
 
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
