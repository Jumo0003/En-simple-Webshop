import Image from "next/image";
import DineVarer from "@/app/components/(produkter)/DineVarer";
import LikedListe from "@/app/components/(produkter)/LikedListe";
import BetalingAccordion from "@/app/components/BetalingAccordion";
import BetalKnap from "@/app/components/(knapper)/BetalKnap";
import BelobSektion from "@/app/components/BelobSektion";

export default function Payment() {
  return (
    <div className="text-7xl flex flex-col gap-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
        <div className="bg-white text-3xl font-bold p-4 text-[#2e4565]">
          <h1 className="mb-4">Your items</h1>
          <DineVarer />
        </div>
        <div className="bg-white p-4 shadow-cl">
          <LikedListe overskrift="Mine Favoritter" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
        <BetalingAccordion />
        <div className="flex flex-col gap-4">
          <BelobSektion />
          <BetalKnap />
        </div>
      </div>
    </div>
  );
}
