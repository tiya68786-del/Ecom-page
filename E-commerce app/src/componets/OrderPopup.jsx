function SuccessPopup({ closePopup }) {
  return (
    <div className="popup-overlay">

      <div className="success-popup">

        <div className="success-icon">
          ✓
        </div>

        <h2>Order Successfully Placed!</h2>

        <p>
          Thank you for shopping with ShopEasy.
        </p>

        <button onClick={closePopup}>
          Continue Shopping
        </button>

      </div>

    </div>
  );
}

export default SuccessPopup;