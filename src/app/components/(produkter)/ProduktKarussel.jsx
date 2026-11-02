import ProduktKarusselClient from "@/app/components/(produkter)/ProduktKarusselClient";

const categoryGroups = {
  home: ["furniture", "home-decoration"],
  tech: ["laptop", "mobile-accessories", "smartphones", "tablets"],
};

async function hentProdukter(category) {
  if (category === "discount") {
    const response = await fetch("https://dummyjson.com/products?limit=150");

    if (!response.ok) {
      throw new Error("Kunne ikke hente produkterne");
    }

    const data = await response.json();
    return data.products
      .filter((product) => product.discountPercentage > 15)
      .slice(0, 15);
  }

  const categories = categoryGroups[category];

  const responses = await Promise.all(
    categories.map((item) =>
      fetch(
        `https://dummyjson.com/products/category/${encodeURIComponent(item)}?limit=15`,
      ),
    ),
  );

  if (responses.some((response) => !response.ok)) {
    throw new Error("Kunne ikke hente produkterne");
  }

  const data = await Promise.all(responses.map((response) => response.json()));
  return data.flatMap((item) => item.products).slice(0, 15);
}

export default async function ProduktKarussel({title, category}) {
  const products = await hentProdukter(category);

  return (
    <section className="mb-8 flex w-full relative flex-col gap-4">
      <h2 className="text-3xl font-bold text-[#2e4565]">{title}</h2>
      <ProduktKarusselClient products={products} />
    </section>
  );
}

//encodeURIComponent() er en reel, indbygget standardfunktion i JavaScript, som bruges til at gøre tekst sikker at putte ind i en URL (en webadresse)
