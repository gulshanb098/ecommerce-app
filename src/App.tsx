import React from "react";
import "./App.css";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <div className="product-list-container">
        <ProductList />
      </div>
      <div className="cart-container">
        <Cart />
      </div>
    </div>
  );
};

export default App;
