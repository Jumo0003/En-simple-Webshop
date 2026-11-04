import Image from "next/image";
import BilledTekst from "@/app/components/BilledTekst";
import Reviews from "@/app/components/Reviews";
import KurvKobKnapper from "@/app/components/(knapper)/KurvKobKnapper";

export default async function DetailView({params}) {
  const {id} = await params;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const produkt = await response.json();
  const gennemsnit =
    produkt.reviews.reduce((sum, review) => sum + review.rating, 0) /
    produkt.reviews.length;

  return (
    <div className="py-8 text-[#2e4565] bg-blue-50 p-4 mt-4">
      <div className="flex gap-8">
        <Image
          src={produkt.images[0]}
          width={400}
          height={400}
          alt={produkt.title}
          className="bg-blue-100 my-5"
        />
        <div className="max-w-125 flex flex-col mt-4">
          <div className="flex flex-col gap-3">
            <h1
              className="
            text-3xl font-bold"
            >
              {produkt.title}
            </h1>
            <p className="text-6xl">{produkt.price} $</p>
            <p>{produkt.description}</p>
            <div className="flex text-3xl">
              {[1, 2, 3, 4, 5].map((stjerne) => (
                <span key={stjerne}>
                  {stjerne <= Math.round(gennemsnit) ? "★" : "☆"}
                </span>
              ))}{" "}
              <span> ({gennemsnit.toFixed(1)})</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-2 mt-auto mb-4">
            <KurvKobKnapper
              kurv="Add to cart"
              køb="Buy now"
              product={{
                id: produkt.id,
                produktnavn: produkt.title,
                pris: produkt.price,
                billede: produkt.thumbnail,
                lager: produkt.stock,
                rabat: produkt.discountPercentage,
              }}
            />
          </div>
        </div>
      </div>
      <Reviews reviews={produkt.reviews} />
    </div>
  );
}
