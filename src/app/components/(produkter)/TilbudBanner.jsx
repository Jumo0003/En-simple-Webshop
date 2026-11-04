import Image from "next/image";

const TilbudBanner = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();

  const HojDiscount = data.products.filter(
    (produkt) => produkt.discountPercentage > 15,
  );

  const RandomdiscounItem = Math.floor(Math.random() * HojDiscount.length);
  const tilbud = HojDiscount[RandomdiscounItem];
  return (
    <div className="full-bleed bg-[url(/bannerbg.webp)] bg-cover bg-center m-4 rounded-2xl">
      <div className="flex justify-center">
        <div className="items-start justify-start p-12 gap-4 contain-content  my-5 flex flex-col m-4">
          <h2 className="font-bold px-4 py-2 rounded-sm bg-blue-300 text-4xl text-blue-900">
            {tilbud.title}
          </h2>
          <p className="bg-blue-200 px-4 py-2 rounded-sm text-4xl text-blue-900">
            {tilbud.price} $
          </p>
          <p className="bg-orange-300 text-orange-900 p-4 text-2xl">
            {tilbud.discountPercentage}% discount
          </p>
        </div>
        <div className="items-left">
          <Image
            width={300}
            height={300}
            src={tilbud.thumbnail}
            alt={tilbud.title}
          />
        </div>
      </div>
    </div>
  );
};

export default TilbudBanner;
