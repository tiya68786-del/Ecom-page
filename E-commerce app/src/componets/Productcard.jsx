function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.name}
      />

      <div className="product-info">

        <h3>{product.name}</h3>

        <p className="category">
          {product.category}
        </p>

        <p className="rating">
          ⭐ {product.rating}
        </p>

        <h3>
          ₹{product.price.toLocaleString("en-IN")}
        </h3>

        <button
          className="add-button"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
}

export default ProductCard;




<p className="rating">
  ⭐ {product.rating}
</p>