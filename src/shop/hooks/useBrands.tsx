import { useInfiniteQuery } from "@tanstack/react-query";
import { getBrands } from "../actions/get-brands.action";

export const useBrands = (type: string) => {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      initialPageParam: 1,
      queryKey: ["brands",{type}],
      queryFn: ({ pageParam }) => {
        console.log(pageParam);
        return getBrands(pageParam.toString(),type);
      },
      getNextPageParam: (lastPage) => lastPage.next_page ?? undefined,
      staleTime: 1000 * 60 * 60 * 24,
    });

  return {
    data: data?.pages.flatMap((page) => page.results) ?? [],
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};
