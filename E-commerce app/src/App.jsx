import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import SuccessPopup from "./components/SuccessPopup";

import Login from "./pages/Login";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [rating, setRating] = useState(0);

  const [page, setPage] = useState("home");
  const [loggedIn, setLoggedIn] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    const matchesRating = product.rating >= rating;

    return matchesSearch && matchesCategory && matchesRating;
  });

  const placeOrder = () => {
    setCart([]);
    setShowSuccess(true);
    setPage("home");
  };

  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }

  return (
    <>
      <Navbar
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        setPage={setPage}
      />

      {page === "home" && (
        <>
          <SearchBar search={search} setSearch={setSearch} />

          <Filters
            category={category}
            setCategory={setCategory}
            rating={rating}
            setRating={setRating}
          />

          <ProductList
            products={filteredProducts}
            addToCart={addToCart}
          />
        </>
      )}

      {page === "cart" && (
        <Cart
          cart={cart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeFromCart={removeFromCart}
          setPage={setPage}
        />
      )}

      {page === "checkout" && (
        <Checkout
          cart={cart}
          placeOrder={placeOrder}
        />
      )}

      {showSuccess && (
        <SuccessPopup
          closePopup={() => setShowSuccess(false)}
        />
      )}
    </>
  );
}

export default App;


import Home from "./pages/Home";