"use client";
import { useCartStore } from "@/stores/useCartStore";

const DineVarer = () => {
  const kurv = useCartStore((state) => state.kurv);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const total = kurv.reduce((sum, produkt) => sum + produkt.pris * produkt.antal, 0);

  return (
    <div>
      {kurv.map((produkt) => (
        <div key={produkt.id} className="flex justify-between items-center">
          {produkt.antal} x {produkt.produktnavn}
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
