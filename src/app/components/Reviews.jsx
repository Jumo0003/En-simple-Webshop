const Reviews = ({ reviews }) => {
  return (
    <div className="bg-white p-4 shadow-xl flex flex-col gap-3 text-[#2e4565]">
      <h1 className="text-3xl font-bold">
        Reviews <span></span>
      </h1>
      <div className="flex flex-col gap-2">
        {reviews.map((review, index) => (
          <article key={index} className="bg-[#dde3ec] p-4">
            <p className="font-bold">
              {review.reviewerName}{" "}
              {[1, 2, 3, 4, 5].map((stjerne) => (
                <span key={stjerne}>{stjerne <= review.rating ? "★" : "☆"}</span>
              ))}
            </p>
            <p>{review.comment}</p>
            <p>
              {new Date(review.date).toLocaleDateString("da-DK", {
                day: "numeric",
                month: "numeric",
                year: "numeric",
              })}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
