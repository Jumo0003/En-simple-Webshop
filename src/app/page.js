import Image from "next/image";
import TilbudBanner from "@/app/components/TilbudBanner";
import ProduktKarussel from "@/app/components/(produkter)/ProduktKarussel";
import BilledTekst from "@/app/components/BilledTekst";

export default function Home() {
  return (
    <>
      <TilbudBanner />
      <ProduktKarussel title="Over 15% discount" category="discount" />
      <ProduktKarussel title="Home" category="home" />
      <ProduktKarussel title="Tech" category="tech" />
      <BilledTekst />
      <BilledTekst />
    </>
  );
}
