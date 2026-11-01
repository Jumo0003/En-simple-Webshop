import Image from "next/image";
import butikbilled1 from "../../butikvaerdier.png";

const BilledTekst = ({ reverse }) => {
  return (
    <div className={`flex justify-between gap-4 mb-8 ${reverse ? "flex-row-reverse" : "flex-row"}`}>
      <Image className="rounded-2xl max-w-125 h-auto" src={butikbilled1} alt="generisk generet ai billed for Løtex omkring butikkens værdier" />
      <div className="p-4 max-w-[64ch]">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, dolorem voluptate? Voluptate eum distinctio pariatur quaerat neque totam, minima veritatis reiciendis beatae inventore voluptas, dignissimos natus iste excepturi sed expedita.</p>
        <button className="text-white px-32 py-3 bg-blue-900 my-4  rounded-xl">Knap!</button>
      </div>
    </div>
  );
};

export default BilledTekst;
