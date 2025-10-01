import { ContentImages } from "./ContentImages";
import type { DataDetailReplacement } from "../interfaces/DetailReplacement.response";

interface Props {
  data: DataDetailReplacement;
  description: string;
}
export const DetailReplacement = ({ data,description }: Props) => {
  return (
    <div className="w-full">
      <div className="pb-4  grid justify-between ">
        <div className="space-y-1">
          <h3 className="font-medium text-lg tracking-tight">
            {description}
          </h3>
          <p className="text-xs text-muted-foreground uppercase">
            {data.product_code}
          </p>
        </div>
      </div>
      <ContentImages photo={data.photos} />
    </div>
  );
};
