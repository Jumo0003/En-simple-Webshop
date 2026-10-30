import KurvKobKnapper from "../(knapper)/KurvKobKnapper";
import Image from "next/image";

const Produkt = ({produktnavn, brand, pris, tilbud, lager, billede, alt}) => {
  return (
    <article className="bg-[#D4E7F1] shadow-xl cursor-pointer transition-colors duration-400 hover:bg-[#c1d3dd] text-[#456695] rounded-xl">
      <Image
        src={billede}
        width={300}
        height={300}
        alt={alt}
        loading="eager"
        className="bg-[#9ABDD6] w-full aspect-square rounded-t-xl"
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
    </article>
  );
};

export default Produkt;
