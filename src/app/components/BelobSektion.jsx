"use client";
import { useCartStore } from "@/stores/useCartStore";

const BelobIAlt = () => {
  const total = useCartStore((state) => state.getTotal());
  const besparelse = useCartStore((state) => state.getBesparelse());
  const slutpris = total - besparelse;
  return (
    <section className="text-xl text-[#2e4565] h-full bg-white p-4">
      <div className="flex py-4 text-[#2e456598] justify-between border-b border-[#2e45652d]">
        <h2>Delivery</h2>
        <p className="italic">Free</p>
      </div>
      <div className="flex py-4 justify-between border-b border-[#2e45652d]">
        <p>Rabat:</p>
        <p className="text-3xl font-bold">{besparelse.toFixed(2)}</p>
      </div>
      <div className="flex py-4 justify-between border-b border-[#2e45652d]">
        <h2>Pris:</h2>
        <p className="text-3xl font-bold">{total.toFixed(2)}</p>
      </div>
      <div className="flex py-4 justify-between border-b border-[#2e45652d]">
        <h2>Total pris:</h2>
        <p className="text-3xl font-bold">{slutpris.toFixed(2)}</p>
      </div>
    </section>
  );
};

export default BelobIAlt;
