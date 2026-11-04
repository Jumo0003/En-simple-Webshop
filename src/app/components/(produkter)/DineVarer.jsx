"use client";
import { useCartStore } from "@/stores/useCartStore";
import { FaMinus } from "react-icons/fa6";
import Image from "next/image";

const DineVarer = ({ detaljeret }) => {
  const kurv = useCartStore((state) => state.kurv);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const total = useCartStore((state) => state.getTotal());

  return (
    <div className="flex flex-col gap-2 text-sm text-[#2e4565]">
      {kurv.map((produkt) => (
        <div key={produkt.id} className="flex gap-2 items-center justify-between bg-[#D4E7F1] p-2">
          {detaljeret ? (
            <div className="flex gap-4 items-center">
              <Image src={produkt.billede} width={80} height={80} alt={produkt.produktnavn} />
              <div>
                <p className="font-bold">{produkt.produktnavn}</p>
                <p>{produkt.pris} kr</p>
                <p>Antal: {produkt.antal}</p>
                <p>{produkt.lager > 0 ? "In stock" : "Sold out"}</p>
              </div>
            </div>
          ) : (
            <span>
              {produkt.antal} x {produkt.produktnavn}
            </span>
          )}

          <button onClick={() => removeFromCart(produkt.id)} className="px-3 py-1 rounded transition-colors duration-400 bg-[#b1d1e1] hover:bg-[#94b9cd] active:bg-[#94b9cd] hover:text-[#456695] active:text-[#456695] ease-in-out">
            <FaMinus className="size-5" />
          </button>
        </div>
      ))}

      <p className="mt-auto">Total: {total.toFixed(2)} kr</p>
    </div>
  );
};

export default DineVarer;
