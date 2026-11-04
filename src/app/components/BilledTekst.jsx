import Image from "next/image";

const BilledTekst = ({ reverse, video, button, width, grid, billede }) => {
  return (
    <div className={`${grid ? "grid grid-cols-1 md:grid-cols-2" : "flex flex-col"} justify-between text-sm gap-4 mb-8 text-[#2e4565] items-center ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}>
      <Image className={`rounded-2xl ${width ? "md:max-w-125" : "w-full"} h-auto ${video ? "aspect-video" : "aspect-4/3"}`} src={billede} alt="generisk generet ai billed for Løtex omkring butikkens værdier" />
      <div className="p-4 max-w-[64ch]">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, dolorem voluptate? Voluptate eum distinctio pariatur quaerat neque totam, minima veritatis reiciendis beatae inventore voluptas, dignissimos natus iste excepturi sed expedita.</p>
        <br />
        <div>{button}</div>
      </div>
    </div>
  );
};

export default BilledTekst;
