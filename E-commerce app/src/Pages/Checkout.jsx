import { useState } from "react";

function Checkout({ cart, placeOrder }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !address || !phone) {
      alert("Please fill all details");
      return;
    }

    placeOrder();
  };

  return (
    <div className="checkout">

      <h1>Checkout</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Delivery Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <h2>
          Total: ₹{total.toLocaleString("en-IN")}
        </h2>

        <button type="submit">
          Place Order
        </button>

      </form>
    </div>
  );
}

export default Checkout;