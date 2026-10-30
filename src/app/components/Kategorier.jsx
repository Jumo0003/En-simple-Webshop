import Kategori from "@/app/components/Kategori";

const Kategorier = () => {
  return (
    <div className="full-bleed bg-[#A8C8DF] cursor-pointer">
      <ul className="flex flex-wrap gap-2 justify-between text-[#456695] items-center p-4">
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
      </ul>
    </div>
  );
};

export default Kategorier;
