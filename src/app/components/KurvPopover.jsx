import DineVarer from "@/app/components/(produkter)/DineVarer";
import {FaMinus} from "react-icons/fa6";
import Link from "next/link";

const KurvPopover = () => {
  return (
    <div
      popover="auto"
      id="kurv"
      className="bg-[#f1f6f6] w-[calc(100vw-2rem)] m-0 md:w-100 text-[#2e4565] p-4 cart-popover rounded-xl fixed mt-4 shadow-md"
    >
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <h1 className="font-bold text-2xl">Din Kurv</h1>
          <button popoverTarget="kurv" popoverTargetAction="hide">
            <FaMinus className="size-8" />
          </button>
        </div>

        <DineVarer />
        <Link
          href="/betaling"
          className="transition-colors duration-400 bg-[#b1d1e1] text-center text-xl hover:bg-[#94b9cd] active:bg-[#94b9cd] hover:text-[#456695] active:text-[#456695] ease-in-out rounded-xl p-3  text-white"
        >
          Betal nu
        </Link>
      </div>
    </div>
  );
};

export default KurvPopover;
