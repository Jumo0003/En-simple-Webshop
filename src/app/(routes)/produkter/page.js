import Image from "next/image";
import FilterSortBtns from "@/app/components/(knapper)/FilterSortBtns";
import Produkt from "@/app/components/(produkter)/Produkt";

export default function ProductList() {
  return (
    <div className="text-center text-[#456695] py-8">
      <h1 className="text-4xl font-bold">Produkter</h1>
      <FilterSortBtns />
      <div className="grid grid-cols-4 justify-center gap-4 mt-4">
        <FetchProducts />
      </div>
    </div>
  );
}

const FetchProducts = async () => {
  const response = await fetch("https://dummyjson.com/products?limit=150");

  if (!response.ok) {
    throw new Error("Kunne ikke hente produkterne");
  }

  const productsData = await response.json();

  return productsData.products.map((product) => (
    <Produkt
      billede={product.thumbnail}
      key={product.id}
      produktnavn={product.title}
      brand={product.brand}
      pris={product.price}
      tilbud={`Tilbud: ${product.discountPercentage}%`}
      lager={product.stock}
      alt={product.title}
    />
  ));
};
