import { Badge } from "@/components/ui/badge";
import type { PriceProduct } from "../interfaces/Price.response";


interface Props {
  data: PriceProduct;
}
export const ContentPrice = ({ data: priceData }: Props) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString("es-BO");
  };
  return (
    <div className="my-2 w-full">
      <div className="flex items-center justify-between w-full">
        <span className="text-xs text-muted-foreground uppercase">
          {priceData.type_price_name}
        </span>
        <Badge variant="secondary">{priceData.prices.length} Monedas</Badge>
      </div>
      <div className="mt-2  grid grid-cols-1 md:grid-cols-2 gap-2">
        {priceData.prices.map((price) => (
          <div
            key={price.currency_name}
            className="flex items-center justify-between p-2 px-3 bg-muted/50 rounded-lg border"
          >
            <div className="flex flex-col">
              <span className="font-medium text-md">
                {formatPrice(price.final_price)}
              </span>
              <span className="text-sm text-muted-foreground">
                {price.currency_name}
              </span>
            </div>
            <Badge variant="outline" className="font-mono">
              {price.currency_code}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
};
