import Kategori from "@/app/components/(kategorier)/Kategori";
import Link from "next/link";

const Kategorier = () => {
  return (
    <div className="full-bleed bg-[#A8C8DF] cursor-pointer">
      <ul className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-11 gap-3 justify-between text-[#456695] items-center p-4">
        <Kategori kategori="beauty" label="Beauty" />
        <Kategori kategori="groceries" label="Groceries" />
        <Kategori kategori="accessories" label="Accessories" />
        <Kategori kategori="sports" label="Sports" />
        <Kategori kategori="clothes" label="Clothes" />
        <Kategori kategori="home" label="Home" />
        <Kategori kategori="kitchen-accessories" label="Kitchen" />
        <Kategori kategori="tech" label="Tech" />
        <Kategori kategori="shoes" label="Shoes" />
        <Kategori kategori="vehicles" label="Vehicles" />
        <Link
          href="/produkter"
          className="block w-full bg-[#7FB1D0] text-center hover:shadow-xl hover:bg-[#6ea1c1] hover:text-[#2e4b74] p-2 transition-colors rounded-sm duration-400"
        >
          All
        </Link>
      </ul>
    </div>
  );
};

export default Kategorier;
