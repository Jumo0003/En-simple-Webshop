import Link from "next/link";
const Kategori = ({kategori, label}) => {
  return (
    <li>
      <Link
        className="bg-[#7FB1D0] hover:shadow-xl hover:bg-[#6ea1c1] hover:text-[#2e4b74] p-2 px-6 transition-colors rounded-xl duration-400"
        href={`/produkter?category=${encodeURIComponent(kategori)}`}
      >
        {label ?? kategori}
      </Link>
    </li>
  );
};

export default Kategori;
