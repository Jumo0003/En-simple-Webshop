import Image from "next/image";
import BilledTekst from "@/app/components/BilledTekst";
import Reviews from "@/app/components/Reviews";

export default function DetailView() {
  return (
    <div className="text-7xl">
      <BilledTekst />
      <Reviews />
    </div>
  );
}
