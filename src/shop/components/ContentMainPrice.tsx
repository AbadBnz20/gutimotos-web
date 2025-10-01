import { usePrice } from "../hooks/usePrice";
import { ContentLoading } from "./ContentLoading";
import { ContentPrice } from "./ContentPrice";
import { EmptyContent } from "./EmptyContent";
interface Props {
  select: string;
  motorcycle_type_id: number;
}
export const ContentMainPrice = ({ select, motorcycle_type_id }: Props) => {
  const { data: priceData, isLoading,isError } = usePrice(
    select,
    motorcycle_type_id.toString()
  );
  if (isLoading) return <ContentLoading small />;
  if (!priceData?.data) return <EmptyContent />;
  if (isError) return <div>Error al cargar el precio</div>;
  return (
    <>
      <ContentPrice data={priceData.data} />
    </>
  );
};
