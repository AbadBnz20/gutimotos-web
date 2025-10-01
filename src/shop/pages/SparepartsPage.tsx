import { CustomPagination } from "../components/CustomPagination";
import { ReplacementContent } from "../components/ReplacementContent";
import { useReplacement } from "../hooks/useReplacement";

export const SparepartsPage = () => {
  const { data, isLoading } = useReplacement();

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
