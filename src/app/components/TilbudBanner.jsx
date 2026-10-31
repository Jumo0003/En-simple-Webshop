const TilbudBanner = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();

  const HojDiscount = data.products.filter((produkt) => produkt.discountPercentage > 15);

  const RandomdiscounItem = Math.floor(Math.random() * HojDiscount.length);
  const tilbud = HojDiscount[RandomdiscounItem];
  return (
    <div className="full-bleed bg-blue-300">
      <div className="flex">
        <div className=" items-start p-12 gap-4 contain-content  my-5 flex flex-col m-4">
          <h2>{tilbud.title}</h2>
          <p>{tilbud.price}kr </p>
          <p className="bg-orange-300 ">{tilbud.discountPercentage}% rabat</p>
        </div>
        <div className="items-left">
          <img src={tilbud.thumbnail} alt={tilbud.title} />
        </div>
      </div>
    </div>
  );
};

export default TilbudBanner;
