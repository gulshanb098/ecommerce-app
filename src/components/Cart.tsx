import React from "react";
import { useCartContext } from "../context/CartContext";

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, clearCart } = useCartContext();

  // Calculate the total price
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} (x{item.quantity})
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <h3>Summary</h3>
            <p>Total Price: ${getTotalPrice().toFixed(2)}</p>
            <div className="cart-actions">
              <button onClick={clearCart}>Clear Cart</button>
              <button onClick={() => alert("Proceeding to checkout...")}>
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
