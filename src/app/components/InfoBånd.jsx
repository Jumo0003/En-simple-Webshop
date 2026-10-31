import {RiArrowRightDoubleFill} from "react-icons/ri";

const Info = () => {
  return (
    <div className="bg-blue-400 full-bleed p-1 cursor-pointer text-center">
      <div className="flex justify-center">
        <p className="text-white flex items-center gap-3 font-bold transition-colors duration-400">
          <span>UBEGRÆNSET RETURRET. LET OG SIMPELT</span>
          <RiArrowRightDoubleFill className="size-5" />
        </p>
      </div>
    </div>
  );
};

export default Info;
