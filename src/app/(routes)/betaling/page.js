import Image from "next/image";
import DineVarer from "@/app/components/(produkter)/DineVarer";
import FavoritListe from "@/app/components/(produkter)/LikedListe";
import BetalingAccordion from "@/app/components/BetalingAccordion";
import BetalKnap from "@/app/components/(knapper)/BetalKnap";
import BelobSektion from "@/app/components/BelobSektion";

export default function Payment() {
  return (
    <div className="text-7xl flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
        <DineVarer />
        <FavoritListe />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
        <BetalingAccordion />
        <BelobSektion />
      </div>

      <BetalKnap />
    </div>
  );
}
