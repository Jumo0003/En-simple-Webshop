import Image from "next/image";
import TilbudBanner from "@/app/components/(produkter)/TilbudBanner";
import ProduktKarussel from "@/app/components/(produkter)/ProduktKarussel";
import BilledTekst from "@/app/components/BilledTekst";

export default function Home() {
  return (
    <>
      <TilbudBanner />
      <div className="mt-4">
        <ProduktKarussel title="Over 15% discount" category="discount" />
      </div>
      <ProduktKarussel title="Home" category="home" />
      <ProduktKarussel title="Tech" category="tech" />
      <BilledTekst />
      <BilledTekst reverse />
    </>
  );
}
