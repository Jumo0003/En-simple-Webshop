"use client";
import { useCartStore } from "@/stores/useCartStore";

const DineVarer = () => {
  const kurv = useCartStore((state) => state.kurv);

  return kurv.map((produkt) => <div key={produkt.id}>{produkt.produktnavn}</div>);
};

export default DineVarer;
