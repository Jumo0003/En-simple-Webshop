import KurvKobKnapper from "../(knapper)/KurvKobKnapper";
import Image from "next/image";
import HeartBtn from "../(knapper)/HeartBtn";

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
    <article className="bg-white shadow-xl cursor-pointer relative transition-colors duration-400 text-[#456695">
      <Image
        src={billede}
        width={300}
        height={300}
        alt={alt}
        loading="eager"
        className="bg-white w-full aspect-square"
      />
      <div className="flex flex-col gap-2 p-4 text-left">
        <h2 className="font-bold text-2xl">{produktnavn}</h2>
        <p className="italic ">{brand}</p>
        <p className="text-xl">
          <b>{pris}</b>
        </p>
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

        <KurvKobKnapper />
      </div>
      <HeartBtn
        product={{id, produktnavn, brand, pris, tilbud, lager, billede}}
      />
    </article>
  );
};

export default Produkt;
