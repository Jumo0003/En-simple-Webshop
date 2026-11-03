import Image from "next/image";
import BilledTekst from "@/app/components/BilledTekst";
import Reviews from "@/app/components/Reviews";
import KurvKobKnapper from "@/app/components/(knapper)/KurvKobKnapper";

export default function DetailView() {
  return (
    <div className="py-8">
      <BilledTekst
        grid
        button={
          <div className="flex flex-col md:flex-row gap-2 mt-auto">
            <KurvKobKnapper kurv="Add to cart" køb="Buy now" />
          </div>
        }
      />

      <Reviews />
    </div>
  );
}
