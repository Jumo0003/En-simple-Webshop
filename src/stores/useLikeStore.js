import {create} from "zustand";

export const useLikeStore = create((set) => ({
  likes: [], // Dette bliver nu et array af fulde produkt-objekter [{id: 16, produktnavn: '...'}, ...]

  toggleLike: (product) =>
    set((state) => {
      // Tjek om produktet allerede ligger i arrayet baseret på dets ID
      const isAlreadyLiked = state.likes.some((item) => item.id === product.id);

      return {
        likes: isAlreadyLiked
          ? state.likes.filter((item) => item.id !== product.id) // Fjern objektet
          : [...state.likes, product], // Tilføj hele objektet
      };
    }),
}));
