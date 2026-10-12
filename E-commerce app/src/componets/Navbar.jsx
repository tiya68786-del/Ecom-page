function Navbar({ cartCount, setPage }) {
  return (
    <nav className="navbar">
      <h2
        className="logo"
        onClick={() => setPage("home")}
      >
        🛒 ShopEasy
      </h2>

      <div className="nav-links">
        <button onClick={() => setPage("home")}>
          Home
        </button>

        <button onClick={() => setPage("cart")}>
          Cart 🛒 ({cartCount})
        </button>
      </div>
    </nav>
  );
}

export default Navbar;