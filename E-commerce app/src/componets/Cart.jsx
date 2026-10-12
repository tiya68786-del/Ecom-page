
function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  setPage
}) {
  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty 🛒</h2>

        <button onClick={() => setPage("home")}>
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="cart-page">

      <h1>Shopping Cart</h1>

      <div className="cart-container">

        <div>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>

        <div className="cart-summary">

          <h2>Order Summary</h2>

          <h3>
            Total: ₹{total.toLocaleString("en-IN")}
          </h3>

          <button
            onClick={() => setPage("checkout")}
          >
            Proceed to Checkout
          </button>

        </div>

      </div>
    </div>
  );
}

export default Cart;