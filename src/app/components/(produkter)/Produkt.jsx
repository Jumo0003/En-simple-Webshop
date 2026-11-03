import KurvKobKnapper from "../(knapper)/KurvKobKnapper";
import Image from "next/image";
import HeartBtn from "../(knapper)/HeartBtn";
import Link from "next/link";

const Produkt = ({
  produktnavn,
  brand,
  pris,
  tilbud,
  lager,
  billede,
  alt,
  id,
}) => {
  return (
    <article className="bg-white shadow-xl cursor-pointer relative transition-colors duration-400 text-[#456695]">
      <Link href="/detaljevisning">
        <Image
          src={billede}
          width={300}
          height={300}
          alt={alt}
          loading="eager"
          className="bg-white w-full aspect-square"
        />
      </Link>

      <div className="flex flex-col gap-2 p-4 text-left">
        <Link href="/detaljevisning">
          <h2 className="font-bold text-2xl">{produktnavn}</h2>
          <p className="italic ">{brand}</p>
          <p className="text-xl mb-2">
            <b>{pris}</b>
          </p>
          <div className="flex flex-col gap-2">
            <span className="bg-orange-300 px-2 py-1 rounded-xl max-w-content text-gray-700 font-bold">
              {tilbud}
            </span>
            <span
              className={
                lager > 0
                  ? "bg-green-300 px-2 py-1 rounded-xl text-gray-700 font-bold"
                  : "bg-blue-300 px-2 py-1 rounded-xl text-gray-700 font-bold"
              }
            >
              {lager > 0 ? "In stock" : "Sold out"}
            </span>
          </div>
        </Link>

        <div className="flex flex-col gap-2 mt-auto">
          <KurvKobKnapper
            kurv="Add to cart"
            køb="Buy now"
            product={{id, produktnavn, brand, pris, tilbud, lager, billede}}
          />
        </div>
      </div>
      <HeartBtn
        product={{id, produktnavn, brand, pris, tilbud, lager, billede}}
      />
    </article>
  );
};

export default Produkt;
