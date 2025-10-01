import { useSearchParams } from "react-router";
import { Checkbox } from "@/components/ui/checkbox";
import { useTypePrice } from "../hooks/useTypePrice";

export const FilterTypePrice = () => {
  const { data } = useTypePrice('sparepart');
  const [searchParams, setSearchParams] = useSearchParams();
  const currenttypeprice =
    searchParams.get("type_price_slug") || "venta-publico";

  const handleBrandChanged = (codecurrency: string) => {
    if (codecurrency === currenttypeprice) {
      searchParams.delete("type_price_slug");
      setSearchParams(searchParams);
      return;
    }
    searchParams.set("type_price_slug", codecurrency);
    setSearchParams(searchParams);
  };

  return (
    <div className="space-y-4">
      <h4 className="font-medium">Tipo de Precio</h4>
      <div className="grid grid-cols-2 gap-2">
        {data.map((typeprice) => (
          <div
            key={typeprice.slug}
            onClick={() => handleBrandChanged(typeprice.slug)}
            className={`inline-flex items-center justify-start h-auto px-3 py-3  rounded-md border text-sm cursor-pointer
      ${
        currenttypeprice === typeprice.slug
          ? "bg-secondary text-secondary-foreground"
          : "border-input bg-transparent"
      }`}
          >
            <Checkbox
              checked={currenttypeprice === typeprice.slug}
              defaultChecked={typeprice.slug === "venta-publico"}
            />
            <span className="ml-2">{typeprice.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
