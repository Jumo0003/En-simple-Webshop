"use client";

import {useState} from "react";
import Produkt from "@/app/components/(produkter)/Produkt";
import IngenProdukter from "@/app/components/IngenProdukter";

export default function ProduktListeClient({products}) {
  const [filter, setFilter] = useState("all");
  const [sortering, setSortering] = useState("");

  const [filterOpen, setFilterOpen] = useState(false);

  const filterOptions = [
    {value: "all", label: "All products"},
    {value: "discount", label: "Over 5% discount"},
    {value: "discount2", label: "Over 15% discount"},
    {value: "soldout", label: "Sold out"},
  ];

  const selectedFilter =
    filterOptions.find((option) => option.value === filter)?.label ??
    "All products";

  let alleProdukter = [...products];

  if (filter === "discount") {
    alleProdukter = alleProdukter.filter(
      (product) => product.discountPercentage > 5,
    );
  }

  if (filter === "discount2") {
    alleProdukter = alleProdukter.filter(
      (product) => product.discountPercentage > 15,
    );
  }

  if (filter === "soldout") {
    alleProdukter = alleProdukter.filter((product) => product.stock === 0);
  }

  if (sortering === "price") {
    alleProdukter.sort((a, b) => a.price - b.price);
  }

  if (sortering === "price2") {
    alleProdukter.sort((a, b) => b.price - a.price);
  }

  if (sortering === "name") {
    alleProdukter.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (sortering === "name2") {
    alleProdukter.sort((a, b) => b.title.localeCompare(a.title));
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4">
      <div className="grid grid-cols-2 md:grid-cols-1 justify-center gap-3 self-start h-fit md:sticky md:top-65">
        <button
          className="transition-colors shadow-xl duration-400 text-[#456695] bg-white px-8 hover:bg-[#94b9cd] active:bg-[#94b9cd] hover:text-[#456695] active:text-[#456695] ease-in-out p-3"
          type="button"
          onClick={() =>
            setSortering((current) => (current === "name" ? "name2" : "name"))
          }
        >
          {sortering === "name" ? "Z - A" : "A - Z"}
        </button>

        <button
          className="transition-colors shadow-xl duration-400 bg-white px-8 hover:bg-[#94b9cd] active:bg-[#94b9cd] text-[#456695] active:text-[#456695] ease-in-out p-3"
          type="button"
          onClick={() =>
            setSortering((current) =>
              current === "price" ? "price2" : "price",
            )
          }
        >
          {sortering === "price" ? "Most expensive first" : "Cheapest first"}
        </button>

        <div className="relative">
          <button
            type="button"
            onClick={() => setFilterOpen((open) => !open)}
            className="transition-colors w-full shadow-xl duration-400 bg-white px-8 py-3 text-[#456695] hover:bg-[#94b9cd]"
          >
            {selectedFilter} <span aria-hidden="true">▾</span>
          </button>

          {filterOpen && (
            <div
              id="filter-options"
              className="absolute left-0 z-10 mt-2 min-w-full overflow-hidden rounded-xl bg-white text-left shadow-lg"
            >
              {filterOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  aria-pressed={filter === option.value}
                  onClick={() => {
                    setFilter(option.value);
                    setFilterOpen(false);
                  }}
                  className="block w-full whitespace-nowrap px-4 py-3 text-left text-[#456695] hover:bg-[#e6f0f5]"
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <button
          className="transition-colors shadow-xl duration-400 bg-white px-8 hover:bg-[#94b9cd] active:bg-[#94b9cd] text-[#456695] active:text-[#456695] ease-in-out p-3"
          type="button"
          onClick={() => {
            setFilter("all");
            setSortering("");
          }}
        >
          Show All
        </button>
      </div>

      {alleProdukter.length === 0 ? (
        <IngenProdukter />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 justify-center gap-4">
          {alleProdukter.map((product) => (
            <Produkt
              key={product.id}
              id={product.id}
              billede={product.thumbnail}
              produktnavn={product.title}
              brand={product.brand}
              pris={product.price}
              tilbud={`Tilbud: ${product.discountPercentage}%`}
              lager={product.stock}
              alt={product.title}
            />
          ))}
        </div>
      )}
    </div>
  );
}

//knappers bg før: [#D4E7F1]
