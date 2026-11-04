"use client";
import { useCartStore } from "@/stores/useCartStore";
import Image from "next/image";
import { FaMinus } from "react-icons/fa6";

const DineVarer = ({ detaljeret }) => {
  const kurv = useCartStore((state) => state.kurv);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const total = kurv.reduce((sum, produkt) => sum + produkt.pris * produkt.antal, 0);

  return (
    <div className="flex flex-col gap-2 text-sm text-[#2e4565]">
      {kurv.map((produkt) => (
        <div key={produkt.id} className="flex gap-2 items-center justify-between bg-[#D4E7F1] p-2">
          {produkt.antal} x {produkt.produktnavn}
          <button onClick={() => removeFromCart(produkt.id)} className="px-3 py-1 rounded transition-colors duration-400 bg-[#b1d1e1] hover:bg-[#94b9cd] active:bg-[#94b9cd] hover:text-[#456695] active:text-[#456695] ease-in-out">
            <FaMinus className="size-5" />
          </button>
        </div>
      ))}
      <br />
      <p className="mt-auto">Total: {total.toFixed(2)} kr</p>
    </div>
  );
};

export default DineVarer;
