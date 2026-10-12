function Filters({
  category,
  setCategory,
  rating,
  setRating
}) {
  return (
    <div className="filters">

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
        <option value="Home">Home</option>
      </select>

      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
      >
        <option value="0">All Ratings</option>
        <option value="4">4 ⭐ & above</option>
        <option value="4.5">4.5 ⭐ & above</option>
      </select>

    </div>
  );
}

export default Filters;