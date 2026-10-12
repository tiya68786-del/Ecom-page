function CartItem({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
}) {
  return (
    <div className="cart-item">

      <img
        src={item.image}
        alt={item.name}
      />

      <div>
        <h3>{item.name}</h3>

        <p>
          ₹{item.price.toLocaleString("en-IN")}
        </p>

        <div className="quantity">

          <button
            onClick={() => decreaseQuantity(item.id)}
          >
            −
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() => increaseQuantity(item.id)}
          >
            +
          </button>

        </div>

        <button
          className="remove"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>
      </div>

    </div>
  );
}

export default CartItem;