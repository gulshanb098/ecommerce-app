import React from "react";
import { useCartContext } from "../context/CartContext";
import { useProductContext } from "../context/ProductContext";

const ProductList: React.FC = () => {
  const { products, currentPage, totalPages, setCurrentPage } =
    useProductContext();
  const { cartItems, addToCart } = useCartContext();

  const productsPerPage = 5;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const getProductQuantity = (productId: number) => {
    const productInCart = cartItems.find((item) => item.id === productId);
    return productInCart ? productInCart.quantity : 0;
  };

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {currentProducts.map((product) => (
          <li key={product.id}>
            <div>
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </div>
            <div>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
              {getProductQuantity(product.id) > 0 && (
                <span>Quantity: {getProductQuantity(product.id)}</span>
              )}
            </div>
          </li>
        ))}
      </ul>
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        <span>
          {currentPage} / {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
