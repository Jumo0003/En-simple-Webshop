"use client";

import {useLikeStore} from "@/stores/useLikeStore";
import KurvKobKnapper from "../(knapper)/KurvKobKnapper";

export default function FavoriteList({overskrift}) {
  const likes = useLikeStore((state) => state.likes);

  return (
    <div className="h-90 overflow-y-auto p-4 bg-white text-sm shadow-sm text-[#2e4565]">
      <h2 className="text-xl font-bold mb-4">
        {overskrift}
        <span> ({likes.length})</span>
      </h2>

      {likes.length === 0 ? (
        <p className="text-gray-500">
          Du har ikke tilføjet nogen favoritter endnu.
        </p>
      ) : (
        <ul className="flex flex-col gap-2">
          {likes.map((product) => (
            // product er nu et objekt, så vi bruger dens .id som key
            <li
              key={product.id}
              className="flex gap-2 items-center justify-between bg-[#D4E7F1] p-2"
            >
              <div className="flex items-center gap-1">
                {/* 1. Vis billedet (Brug produktets billed-sti) */}
                <img
                  src={product.billede}
                  alt={product.produktnavn}
                  className="w-10 h-10 object-cover rounded-sm bg-white"
                />

                {/* 2. Ret fra {product} til {product.produktnavn} */}
                <span>{product.produktnavn}</span>
              </div>

              {/* 3. Vis prisen */}
              <span>
                <b>{product.pris} USD</b>
              </span>

              <KurvKobKnapper />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
