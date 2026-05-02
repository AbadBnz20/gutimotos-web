import { useSearchParams } from "react-router";
import { CustomPagination } from "../components/CustomPagination";
import { ReplacementContent } from "../components/ReplacementContent";
import { useReplacement } from "../hooks/useReplacement";
import { useEffect } from "react";

export const SparepartsPage = () => {
  const { data, isLoading } = useReplacement();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete("cursor");
    newParams.delete("brand");
    newParams.delete("color");
    newParams.delete("search");
    newParams.delete("type_price_slug");

    setSearchParams(newParams);
  }, []);
  return (
    <div>
      <ReplacementContent
        replacements={data?.data || []}
        isloading={isLoading}
      />
      <CustomPagination
        next_cursor={data?.next_cursor}
        previous_cursor={data?.previous_cursor}
      />
    </div>
  );
};
