import { create } from "zustand";

export const useCartStore = create((set) => ({
  kurv: [],
  addToCart: (product) =>
    set((state) => ({
      kurv: [...state.kurv, product],
    })),
}));
