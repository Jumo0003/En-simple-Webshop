import Link from "next/link";
const Kategori = ({kategori, label}) => {
  return (
    <li>
      <Link
        className="block w-full bg-[#7FB1D0] text-center hover:shadow-xl hover:bg-[#6ea1c1] hover:text-[#2e4b74] p-2 transition-colors rounded-xl duration-400"
        href={`/produkter?category=${encodeURIComponent(kategori)}`}
      >
        {label ?? kategori}
      </Link>
    </li>
  );
};

export default Kategori;
