import { useSearchParams } from "react-router";
import { Checkbox } from "@/components/ui/checkbox";
import { useCurrency } from "../hooks/useCurrency";

export const FilterCurrencies = () => {
  const { data } = useCurrency();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentcurrency = searchParams.get("currency_code") || "BOB";

  const handleBrandChanged = (codecurrency: string) => {
    if (codecurrency === currentcurrency) {
      searchParams.delete("currency_code");
      setSearchParams(searchParams);
      return;
    }
    searchParams.set("currency_code", codecurrency);
    setSearchParams(searchParams);
  };

  return (
    <div className="space-y-4">
      <h4 className="font-medium">Monedas</h4>
      <div className="grid grid-cols-2 gap-2">
        {data.map((currency) => (
          <div
            key={currency.code}
            onClick={() => handleBrandChanged(currency.code)}
            className={`inline-flex items-center justify-start h-8 px-3 rounded-md border text-sm cursor-pointer
      ${
        currentcurrency === currency.code
          ? "bg-secondary text-secondary-foreground"
          : "border-input bg-transparent"
      }`}
          >
            <Checkbox checked={currentcurrency === currency.code} defaultChecked={currency.code==='BOB'}/>
            <span className="ml-2">{currency.code}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
