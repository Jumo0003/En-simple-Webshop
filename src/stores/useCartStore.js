import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  kurv: [],
  addToCart: (product) =>
    set((state) => {
      const findes = state.kurv.find((vare) => vare.id === product.id);

      if (findes) {
        return {
          kurv: state.kurv.map((vare) => (vare.id === product.id ? { ...vare, antal: vare.antal + 1 } : vare)),
        };
      }

      return {
        kurv: [...state.kurv, { ...product, antal: 1 }],
      };
    }),
  removeFromCart: (id) =>
    set((state) => ({
      kurv: state.kurv.filter((vare) => vare.id !== id),
    })),
  getTotal: () => {
    const kurv = get().kurv;
    return kurv.reduce((sum, produkt) => sum + produkt.pris * produkt.antal, 0);
  },
  getBesparelse: () => {
    const kurv = get().kurv;
    return kurv.reduce((sum, produkt) => sum + produkt.pris * (produkt.rabat / 100) * produkt.antal, 0);
  },
}));
