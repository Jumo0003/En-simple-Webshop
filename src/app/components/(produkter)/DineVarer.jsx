"use client";
import { useCartStore } from "@/stores/useCartStore";
import Image from "next/image";

const DineVarer = ({ detaljeret }) => {
  const kurv = useCartStore((state) => state.kurv);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const total = kurv.reduce((sum, produkt) => sum + produkt.pris * produkt.antal, 0);

  return (
    <div>
      {kurv.map((produkt) => (
        <div key={produkt.id} className="flex justify-between items-center">
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

          <button onClick={() => removeFromCart(produkt.id)} className="bg-blue-400 px-3 py-1 rounded hover:bg-gray-200">
            Fjern
          </button>
        </div>
      ))}

      <p>Total: {total.toFixed(2)} kr</p>
    </div>
  );
};

export default DineVarer;
