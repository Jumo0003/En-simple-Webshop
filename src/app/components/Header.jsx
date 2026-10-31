import Logo from "@/app/components/(knapper)/Logo";
import {FiSearch} from "react-icons/fi";
import {SlMenu} from "react-icons/sl";
import {FiShoppingCart} from "react-icons/fi";
import KurvPopover from "@/app/components/KurvPopover";
import LikedPopover from "@/app/components/LikedPopover";
import MenuPopover from "@/app/components/MenuPopover";
import {FaRegHeart} from "react-icons/fa";

const Header = () => {
  return (
    <div className="full-bleed bg-[#C7E4F2] px-4 py-8">
      <header className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <Logo />
        <div className="flex gap-4 w-full">
          <form action="/produkter" className="flex items-center w-full">
            <input
              type="search"
              name="query"
              placeholder="Search products ..."
              className="p-4 bg-white rounded-l-sm border-none w-full focus:outline-none focus:ring-[#9FC5D9]"
            ></input>
            <button
              type="submit"
              className="transition-colors duration-400 bg-[#b1d1e1] hover:bg-[#94b9cd] active:bg-[#94b9cd] hover:text-[#456695] active:text-[#456695] ease-in-out rounded-r-full p-3  text-white"
            >
              <FiSearch className="size-8" />
            </button>
          </form>

          <div className="flex gap-2">
            <button
              popoverTarget="kurv"
              className="cart-button transition-colors duration-400 bg-[#9FC5D9] hover:bg-[#94b9cd] active:bg-[#94b9cd] hover:text-[#456695] active:text-[#456695] ease-in-out rounded-full p-3  text-white"
            >
              <FiShoppingCart className="size-7" />
            </button>
            <button
              popoverTarget="liked"
              className="liked-button transition-colors duration-400 bg-[#9FC5D9] hover:bg-[#94b9cd] active:bg-[#94b9cd] hover:text-[#456695] active:text-[#456695] ease-in-out rounded-full p-3  text-white"
            >
              <FaRegHeart className="size-7" />
            </button>
            <button
              popoverTarget="menu"
              className="menu-button transition-colors duration-400 bg-[#9FC5D9] hover:bg-[#94b9cd] active:bg-[#94b9cd] hover:text-[#456695] active:text-[#456695] ease-in-out rounded-full p-3  text-white"
            >
              <SlMenu className="size-7" />
            </button>
          </div>
        </div>
      </header>
      <KurvPopover />
      <LikedPopover />
      <MenuPopover />
    </div>
  );
};

export default Header;
