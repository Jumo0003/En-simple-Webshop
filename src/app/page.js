import Image from "next/image";
import TilbudBanner from "@/app/components/(produkter)/TilbudBanner";
import ProduktKarussel from "@/app/components/(produkter)/ProduktKarussel";
import BilledTekst from "@/app/components/BilledTekst";
import butikbilled1 from "../butikvaerdier.png";
import butikbilled2 from "../Hvemervi.png";

export default function Home() {
  return (
    <>
      <TilbudBanner />
      <div className="mt-4">
        <ProduktKarussel title="Over 15% discount" category="discount" />
      </div>
      <ProduktKarussel title="Home" category="home" />
      <ProduktKarussel title="Tech" category="tech" />
      <BilledTekst billede={butikbilled1} video width button={<button className="text-white px-32 py-3 bg-blue-900 my-4  rounded-xl">Læs mere</button>} />
      <BilledTekst reverse billede={butikbilled2} width video button={<button className="text-white px-32 py-3 bg-blue-900 my-4  rounded-xl">Læs mere</button>} />
    </>
  );
}
