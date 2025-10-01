import { Skeleton } from "@/components/ui/skeleton";

export const ConentSkeleton = () => {
  return (
    <div className="w-full">
      <div className="pb-4  grid justify-between ">
        <div className="space-y-1">
          <Skeleton className="h-5 w-[150px]" />
          <Skeleton className="h-3 w-[200px]" />
        </div>
      </div>
      <Skeleton className="h-[250px] w-full" />
    </div>
  );
};
