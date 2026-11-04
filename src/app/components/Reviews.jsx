const Reviews = () => {
  return (
    <div className="bg-white p-4 shadow-xl flex flex-col gap-3 text-[#2e4565]">
      <h1 className="text-3xl font-bold">
        Reviews <span>(3)</span>
      </h1>
      <div className="flex flex-col gap-2">
        <article className="bg-[#dde3ec] p-4">
          Jeg synes de er god kvalitet, og at det føles rart i øret. Den nye
          telefon jeg købte fra Løtex var ikke L, men W. Wøtex!!
        </article>
        <article className="bg-[#dde3ec] p-4">
          I like this leather, it's so smooth and authentic!! I'll definitely
          buy from Løtex again... yea!
        </article>
      </div>
    </div>
  );
};

export default Reviews;
