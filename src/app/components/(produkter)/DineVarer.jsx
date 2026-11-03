"use client";
import {useCartStore} from "@/stores/useCartStore";

const DineVarer = () => {
  const kurv = useCartStore((state) => state.kurv);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const total = kurv.reduce(
    (sum, produkt) => sum + produkt.pris * produkt.antal,
    0,
  );

  return (
    <div className="flex flex-col gap-2 bg-white p-4 text-xl text-[#2e4565]">
      {kurv.map((produkt) => (
        <div
          key={produkt.id}
          className="flex gap-2 items-center justify-between bg-[#D4E7F1] p-2"
        >
          {produkt.antal} x {produkt.produktnavn}
          <button
            onClick={() => removeFromCart(produkt.id)}
            className="bg-blue-400 px-3 py-1 rounded hover:bg-blue-200 text-blue-900"
          >
            Fjern
          </button>
        </div>
      ))}

      <p className="mt-auto">Total: {total.toFixed(2)} kr</p>
    </div>
  );
};

export default DineVarer;
