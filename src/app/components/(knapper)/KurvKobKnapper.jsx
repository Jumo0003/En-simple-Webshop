"use client";
import {useCartStore} from "@/stores/useCartStore";
import Link from "next/link";

const TilfojKnap = ({product, kurv, køb}) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <>
      <button
        onClick={() => addToCart(product)}
        className="rounded-sm w-full text-center p-2 text-md bg-[#cbaadf] hover:text-[#884fac] hover:bg-[#cdaadf] text-white transition-colors duration-400"
      >
        {kurv}
      </button>
      <Link
        href="/betaling"
        onClick={() => addToCart(product)}
        className="rounded-sm w-full text-center p-2 text-md bg-[#AAC9DF] hover:text-[#4f85ac] hover:bg-[#AAC9DF] text-white transition-colors duration-400"
      >
        {køb}
      </Link>
    </>
  );
};

export default TilfojKnap;
