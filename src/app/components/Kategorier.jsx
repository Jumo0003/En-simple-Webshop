import Kategori from "@/app/components/Kategori";

const Kategorier = () => {
  return (
    <div className="full-bleed bg-[#A8C8DF] cursor-pointer">
      <ul className="flex flex-wrap gap-3 justify-between text-[#456695] items-center p-4">
        <Kategori kategori="Beauty" />
        <Kategori kategori="Groceries" />
        <Kategori kategori="Clothes" />
        <Kategori kategori="Accessories" />
        <Kategori kategori="Sports" />
        <Kategori kategori="Home" />
        <Kategori kategori="Tech" />
        <Kategori kategori="Shoes" />
        <Kategori kategori="Vehicles" />
      </ul>
    </div>
  );
};

export default Kategorier;
