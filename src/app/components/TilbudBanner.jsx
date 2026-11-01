import Image from "next/image";

const TilbudBanner = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();

  const HojDiscount = data.products.filter((produkt) => produkt.discountPercentage > 15);

  const RandomdiscounItem = Math.floor(Math.random() * HojDiscount.length);
  const tilbud = HojDiscount[RandomdiscounItem];
  return (
    <div>
      <div className=" bg-blue-300 rounded-2xl m-8 flex justify-center">
        <div className=" items-start p-12 gap-4 contain-content  my-5 flex flex-col m-4">
          <h2 className="bg-blue-400">{tilbud.title}</h2>
          <p className="bg-blue-400">{tilbud.price}kr </p>
          <p className="bg-orange-300 p-4 ">{tilbud.discountPercentage}% rabat</p>
        </div>
        <div className="items-left">
          <Image width={300} height={300} src={tilbud.thumbnail} alt={tilbud.title} />
        <div className="">
          <img className="items-end " src={tilbud.thumbnail} alt={tilbud.title} />
        </div>
      </div>
    </div>
  );
};

export default TilbudBanner;
