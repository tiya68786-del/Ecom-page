import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import ProductList from "../components/ProductList";

function Home({
  products,
  search,
  setSearch,
  category,
  setCategory,
  rating,
  setRating,
  addToCart
}) {
  return (
    <div className="home">

      {/* Search Bar */}
      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      {/* Filters */}
      <Filters
        category={category}
        setCategory={setCategory}
        rating={rating}
        setRating={setRating}
      />

      {/* Products */}
      <ProductList
        products={products}
        addToCart={addToCart}
      />

    </div>
  );
}

export default Home;