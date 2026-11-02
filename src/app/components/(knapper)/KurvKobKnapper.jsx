"use client";
import { useCartStore } from "@/stores/useCartStore";

const TilfojKnap = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <button onClick={() => addToCart(product)} className="rounded-sm mt-auto text-center p-4 text-2xl bg-[#AAC9DF] text-[#4f85ac] hover:bg-[#AAC9DF] hover:text-white transition-colors duration-400">
      Tilføj til Kurv
    </button>
  );
};

export default TilfojKnap;
