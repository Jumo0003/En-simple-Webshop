import Image from "next/image";
import DineVarer from "@/app/components/(produkter)/DineVarer";
import FavoritListe from "@/app/components/(produkter)/FavoritListe";
import BetalingAccordion from "@/app/components/BetalingAccordion";
import BetalKnap from "@/app/components/(knapper)/BetalKnap";
import BelobSektion from "@/app/components/BelobSektion";

export default function Payment() {
  return (
    <div className="text-7xl">
      <DineVarer />
      <FavoritListe />
      <BetalingAccordion />
      <BelobSektion />
      <BetalKnap />
    </div>
  );
}
