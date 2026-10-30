import {FaMinus} from "react-icons/fa6";
import Link from "next/link";

const Menu = () => {
  return (
    <div
      popover="auto"
      id="menu"
      className="bg-[#f1f6f6] w-[calc(100vw-2rem)] m-0 md:w-100 text-[#2e4565] menu-popover rounded-xl fixed mt-4 shadow-md"
    >
      <div className="flex flex-col gap-4">
        <div className="flex p-4 pb-0 justify-between">
          <h1 className="font-bold text-2xl">Menu</h1>
          <button popoverTarget="menu" popoverTargetAction="hide">
            <FaMinus className="size-8" />
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          <Link
            href="/"
            className="transition-colors duration-400 hover:bg-[#b1d1e1] p-4 py-3"
          >
            Forside
          </Link>
          <Link
            href="/produkter"
            className="transition-colors duration-400 hover:bg-[#b1d1e1] p-4 py-3"
          >
            Alle produkter
          </Link>
          <Link
            href="/betaling"
            className="transition-colors duration-400 hover:bg-[#b1d1e1] p-4 py-3"
          >
            Min kurv
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
