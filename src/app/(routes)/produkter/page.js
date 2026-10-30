import ProduktListeClient from "@/app/components/(produkter)/ProduktListeClient";

export default async function ProductList({searchParams}) {
  const {category} = await searchParams;

  const categoryGroups = {
    accessories: [
      "mens-watches",
      "womens-watches",
      "womens-jewellery",
      "sunglasses",
      "womens-bags",
    ],
    beauty: ["beauty", "fragrances", "skin-care"],
    home: ["furniture", "home-decoration"],
    tech: ["laptop", "mobile-accessories", "smartphones", "tablets"],
    clothes: ["mens-shirts", "tops", "womens-dresses"],
    shoes: ["mens-shoes", "womens-shoes"],
    vehicles: ["motorcycle", "vehicle"],
    sports: ["sports-accessories"],
  };

  let products;

  if (category) {
    const apiCategories = categoryGroups[category] ?? [category];

    const responses = await Promise.all(
      apiCategories.map((apiCategory) =>
        fetch(
          `https://dummyjson.com/products/category/${encodeURIComponent(apiCategory)}?limit=100`,
        ),
      ),
    );

    if (responses.some((response) => !response.ok)) {
      throw new Error("Kunne ikke hente produkterne");
    }

    const categoryData = await Promise.all(
      responses.map((response) => response.json()),
    );

    products = categoryData.flatMap((data) => data.products);
  } else {
    const response = await fetch("https://dummyjson.com/products?limit=150");

    if (!response.ok) {
      throw new Error("Kunne ikke hente produkterne");
    }

    const productsData = await response.json();
    products = productsData.products;
  }

  return (
    <div className="text-center flex flex-col gap-4 text-[#456695] py-8">
      <h1 className="text-4xl font-bold">
        {category
          ? category.charAt(0).toUpperCase() + category.slice(1)
          : "Alle produkter"}
      </h1>

      <ProduktListeClient key={category ?? "all"} products={products} />
    </div>
  );
}

//apiCategories = brug kategorilisten fra categoryGroups hvis den findes ellers lav en liste med den valgta kategori alene
//responses = sender én request for hver kategori i apiCategories, så hver "underkategori" kommer i sit eget url
//Promise.all() sender alle requests afsted samtidig, venter på de bliver færdige og bliver afvist hvis én request fejler, før koden når til responses.some()
//responses.some((response) => !response.ok tjekker om mindst ét svar har en fejl og throw new Error kaster en fejl
//svarene bliver læst som json, og flatMap samler produktlisterne fra kategorierne til ét array

//?? hedder nullish coalescing og bruger kun den anden værdi som reserve
