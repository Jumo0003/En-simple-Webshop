import LikedListe from "@/app/components/(produkter)/LikedListe";
import {FaMinus} from "react-icons/fa6";

const LikedPopover = () => {
  return (
    <div
      popover="auto"
      id="liked"
      className="bg-[#f1f6f6] w-[calc(100vw-2rem)] m-0 md:w-100 text-[#2e4565] p-4 liked-popover fixed mt-4 shadow-md"
    >
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <h1 className="font-bold text-2xl">Your liked items</h1>
          <button popoverTarget="liked" popoverTargetAction="hide">
            <FaMinus className="size-8" />
          </button>
        </div>

        <LikedListe overskrift="" />
      </div>
    </div>
  );
};

export default LikedPopover;
