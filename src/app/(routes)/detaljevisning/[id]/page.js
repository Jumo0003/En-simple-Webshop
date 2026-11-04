import Image from "next/image";
import BilledTekst from "@/app/components/BilledTekst";
import Reviews from "@/app/components/Reviews";
import KurvKobKnapper from "@/app/components/(knapper)/KurvKobKnapper";

export default async function DetailView({ params }) {
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const produkt = await response.json();

  return (
    <div className="py-8">
      <div className="flex gap-8">
        <Image src={produkt.images[0]} width={400} height={400} alt={produkt.title} className="bg-blue-50 my-5" />
        <div className="max-w-125 flex flex-col mt-4">
          <span>
            <h1>{produkt.title}</h1>
            <p>{produkt.price} kr</p>
            <p>{produkt.description}</p>
          </span>

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
              }}
            />
          </div>
        </div>
      </div>
      <Reviews />
    </div>
  );
}
