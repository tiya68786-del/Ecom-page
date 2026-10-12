function Ratings({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="ratings">
      {Array.from({ length: 5 }, (_, index) => {
        if (index < fullStars) {
          return <span key={index}>★</span>;
        }

        if (index === fullStars && hasHalfStar) {
          return <span key={index}>★</span>;
        }

        return <span key={index}>☆</span>;
      })}

      <span className="rating-number">
        ({rating})
      </span>
    </div>
  );
}

export default Ratings;