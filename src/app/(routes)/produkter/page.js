import Image from "next/image";
import FilterSortBtns from "@/app/components/(knapper)/FilterSortBtns";
import Produkt from "@/app/components/(produkter)/Produkt";

export default function ProductList() {
  return (
    <div className="text-7xl">
      <FilterSortBtns />
      <Produkt />
      <Produkt />
      <Produkt />
      <Produkt />
    </div>
  );
}
