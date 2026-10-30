"use client";

import {useLikeStore} from "@/stores/useLikeStore";

export default function FavoriteList() {
  const likes = useLikeStore((state) => state.likes);

  return (
    <div className="p-4 bg-white rounded-xl text-sm shadow-sm">
      <h2 className="text-xl font-bold mb-4">
        Mine Favoritter ({likes.length})
      </h2>

      {likes.length === 0 ? (
        <p className="text-gray-500">
          Du har ikke tilføjet nogen favoritter endnu.
        </p>
      ) : (
        <ul>
          {likes.map((product) => (
            // product er nu et objekt, så vi bruger dens .id som key
            <li key={product.id} className="flex gap-2 items-center">
              {/* 1. Vis billedet (Brug produktets billed-sti) */}
              <img
                src={product.billede}
                alt={product.produktnavn}
                className="w-10 h-10 object-cover"
              />

              {/* 2. Ret fra {product} til {product.produktnavn} */}
              <span>{product.produktnavn}</span>

              {/* 3. Vis prisen */}
              <span>{product.pris} kr.</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
