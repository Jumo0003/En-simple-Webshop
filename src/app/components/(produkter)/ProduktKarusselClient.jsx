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

    return () => window.clearTimeout(scrollTimeoutRef.current);
  }, [products.length]);

  function scroll(direction) {
    const carousel = carouselRef.current;
    const firstItem = itemsRef.current[0];
    const secondItem = itemsRef.current[1];

    if (!carousel || !firstItem || !secondItem) return;

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

      if (!carousel || !firstMiddleItem || !firstLastCopyItem) return;

      const middleStart = firstMiddleItem.offsetLeft;
      const middleEnd = firstLastCopyItem.offsetLeft;

      const copyWidth = middleEnd - middleStart;

      if (carousel.scrollLeft < middleStart) {
        carousel.scrollLeft += copyWidth;
      } else if (carousel.scrollLeft >= middleEnd) {
        carousel.scrollLeft -= copyWidth;
      }
    }, 120);
  }

  const repeatedProducts = [...products, ...products, ...products];

  return (
    <div className="w-full">
      <div className="mb-3 flex gap-2">
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

      <div
        ref={carouselRef}
        onScroll={handleScroll}
        className="hide-scrollbar scrollbar-none flex w-full snap-x snap-mandatory gap-4 overflow-x-auto"
      >
        {repeatedProducts.map((product, index) => (
          <div
            key={`${index}-${product.id}`}
            ref={(element) => {
              itemsRef.current[index] = element;
            }}
            className="w-60 h-full shrink-0 snap-center md:snap-start"
          >
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

// Tre produktlister giver en gentagende karussel, der starter på den midterste liste
// Knapperne ruller ét kort ad gangen; scrollpositionen korrigeres ved kopiernes grænser
// DOM-referencer og timeout styrer scroll uden unødige renders og ryddes op ved afmontering
