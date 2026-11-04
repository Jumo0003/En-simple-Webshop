"use client";
import {useEffect, useRef} from "react";
import Produkt from "@/app/components/(produkter)/Produkt";
import {FaArrowLeftLong} from "react-icons/fa6";
import {FaArrowRightLong} from "react-icons/fa6";

export default function ProduktKarusselClient({products}) {
  const carouselRef = useRef(null);
  const itemsRef = useRef([]);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const firstMiddleItem = itemsRef.current[products.length];

    if (firstMiddleItem && carouselRef.current) {
      carouselRef.current.scrollLeft = firstMiddleItem.offsetLeft;
    }

    // Ryd timeouten op, hvis komponenten fjernes, eller produkterne ændres.
    return () => window.clearTimeout(scrollTimeoutRef.current);
  }, [products.length]);

  function scroll(direction) {
    // Hent karussellen og de første to kort for at beregne afstanden mellem kortene
    const carousel = carouselRef.current;
    const firstItem = itemsRef.current[0];
    const secondItem = itemsRef.current[1];

    // Elementer kan mangle, mens komponenten stadig ikke er færdig med at blive renderet.
    if (!carousel || !firstItem || !secondItem) return;

    // Afstanden inkluderer både produktkortets bredde og mellemrummet til næste kort.
    const itemStep = secondItem.offsetLeft - firstItem.offsetLeft;

    carousel.scrollBy({
      left: direction * itemStep,
      behavior: "smooth",
    });
  }

  function handleScroll() {
    window.clearTimeout(scrollTimeoutRef.current);

    scrollTimeoutRef.current = window.setTimeout(() => {
      const carousel = carouselRef.current;

      const firstMiddleItem = itemsRef.current[products.length];
      const firstLastCopyItem = itemsRef.current[products.length * 2];

      // Afbryd hvis referencerne ikke findes
      if (!carousel || !firstMiddleItem || !firstLastCopyItem) return;

      // Beregn begyndelsen og slutningen på det område, hvor den originale liste ligger.
      const middleStart = firstMiddleItem.offsetLeft;
      const middleEnd = firstLastCopyItem.offsetLeft;

      // De to kopier af listen har samme bredde som midterlisten.
      const copyWidth = middleEnd - middleStart;

      // Flytter positionen én listebredde frem og tilbage.
      if (carousel.scrollLeft < middleStart) {
        carousel.scrollLeft += copyWidth;
      } else if (carousel.scrollLeft >= middleEnd) {
        carousel.scrollLeft -= copyWidth;
      }
    }, 120);
  }

  // Tre gentagelser giver en kopi på hver side af den egentlige liste
  const repeatedProducts = [...products, ...products, ...products];

  return (
    <div className="w-full">
      {/* Knapperne bruger scroll-funktionen til at flytte karussellen ét kort ad gangen. */}
      <div className="mb-3 flex gap-2">
        {/* aria-label gør knappen forståelig for hjælpemidler som skærmlæsere. */}
        <button
          type="button"
          aria-label="Rul produkter tilbage"
          onClick={() => scroll(-1)}
          className="rounded transition-colors duration-400 bg-[#b1d1e1] hover:bg-[#94b9cd] active:bg-[#94b9cd] text-[#456695] ease-in-out px-4 py-2 shadow absolute top-60 left-4 z-10"
        >
          <FaArrowLeftLong className="size-7" />
        </button>
        <button
          type="button"
          aria-label="Rul produkter frem"
          onClick={() => scroll(1)}
          className="rounded transition-colors duration-400 bg-[#b1d1e1] hover:bg-[#94b9cd] active:bg-[#94b9cd] text-[#456695] ease-in-out px-4 py-2 shadow absolute top-60 right-4 z-10"
        >
          <FaArrowRightLong className="size-7" />
        </button>
      </div>

      {/* Dette element er selve karussellen: vandret scroll, snap til kort og skjult scrollbar. */}
      <div
        ref={carouselRef}
        onScroll={handleScroll}
        className="hide-scrollbar scrollbar-none flex w-full snap-x snap-mandatory gap-4 overflow-x-auto"
      >
        {/* Hver scroll-bevægelse kan udløse en korrektion ved kopiernes grænser. */}
        {/* Render de tre lister; index bruges til at gemme hvert korts DOM-reference. */}

        {repeatedProducts.map((product, index) => (
          // Index adskiller også de tre visuelle kopier af samme produkt.

          <div
            key={`${index}-${product.id}`}
            ref={(element) => {
              itemsRef.current[index] = element;
            }}
            className="w-60 h-full shrink-0 snap-start"
          >
            {/* Kortet må ikke krympe, og snap-start får det til at flugte ved scroll-stop. */}
            {/* Genbrug produktkortets visning og send produktdata videre som props. */}
            <Produkt
              id={product.id}
              billede={product.thumbnail}
              produktnavn={product.title}
              brand={product.brand}
              pris={product.price}
              tilbud={`Discount: ${product.discountPercentage}%`}
              lager={product.stock}
              alt={product.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// useEffect bruges til at placere karussellen, når produkterne er renderet i browseren.
// useRef gemmer referencer til DOM-elementer uden at starte en ny render, når de ændres.

// carouselRef: reference til scrollbare beholder med alle produktkortene
// Gemmer en reference til hvert produktkort i samme rækkefølge som i repeatedProducts.

//scrollTimeoutRef: Gemmer timeout

// Produkterne vises tre gange: kopi, original liste og kopi.
// products.length er indeks for det første produkt i den midterste liste.
//firstMiddleItem er midterste række af produkter;
