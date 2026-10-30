"use client";

import {useLikeStore} from "@/stores/useLikeStore";
import {FaRegHeart, FaHeart} from "react-icons/fa"; // Eksempel baseret på din fejlbesked tidligere

export default function LikeButton({product}) {
  const likes = useLikeStore((state) => state.likes);
  const toggleLike = useLikeStore((state) => state.toggleLike);

  // Tjek om dette produkt (id) findes i vores array af objekter
  const isLiked = likes.some((item) => item.id === product.id);

  return (
    <button
      onClick={() => toggleLike(product)} // Sender HELE produktet med op til storen
      className="p-2 rounded-full transition-colors duration-200 hover:bg-gray-100"
    >
      {isLiked ? (
        <FaHeart className="w-6 h-6 text-red-500" />
      ) : (
        <FaRegHeart className="w-6 h-6 text-gray-500" />
      )}
    </button>
  );
}
