# E-Commerce App with React and Context API

This project is a basic e-commerce application built using React, TypeScript, and the Context API. It includes features like product listing with pagination, adding items to the cart, and displaying the cart’s contents with quantities and total amount (summary).

## Getting Started

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/ecommerce-app.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd ecommerce-app
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm start
   ```

### Folder Structure

```plaintext
src/
│
├── components/
│   ├── ProductList.tsx       # Displays the list of products with pagination
│   └── Cart.tsx              # Displays the items in the cart with quantities
│
├── context/
│   ├── ProductContext.tsx    # Manages the product data and pagination state
│   └── CartContext.tsx       # Manages the cart state and actions
│
├── types/
│   └── index.ts              # Defines TypeScript types for the application
│
├── App.tsx                   # Main component that combines everything
└── index.tsx                 # Entry point of the React application
```

## Components and Their Usage

### 1. ProductContext

- **Location**: `src/context/ProductContext.tsx`
- **Purpose**: Manages the list of products and pagination logic. Provides state like `products`, `currentPage`, `totalPages`, and the method `setCurrentPage` to navigate between pages.
- **Usage**: Wraps the main App component to provide product data and pagination controls throughout the app.

### 2. CartContext

- **Location**: `src/context/CartContext.tsx`
- **Purpose**: Manages the cart, including adding, removing, and clearing items from the cart. Provides state like `cartItems` and methods like `addToCart`, `removeFromCart`, and `clearCart`.
- **Usage**: Wraps the main App component to manage cart state globally.

### 3. ProductList

- **Location**: `src/components/ProductList.tsx`
- **Purpose**: Displays a list of products with pagination. Allows users to add products to the cart. Shows the quantity of each product added to the cart.
- **Usage**: Consumes `ProductContext` for product data and `CartContext` for cart actions.

### 4. Cart

- **Location**: `src/components/Cart.tsx`
- **Purpose**: Displays the list of items currently in the cart along with their quantities. Allows users to remove items or clear the entire cart.
- **Usage**: Consumes `CartContext` to display and manage cart items.

### 5. App

- **Location**: `src/App.tsx`
- **Purpose**: The main component that combines the `ProductList` and `Cart` components. Wrapped by `ProductProvider` and `CartProvider` to supply context data.
- **Usage**: This is the entry point of the application where all components are assembled.

## Running the App

Once you start the development server with `npm start`, you should be able to view the application in your browser at [http://localhost:3000](http://localhost:3000).

- The **Product List** will display the products with pagination controls.
- The **Add to Cart** button allows users to add items to their cart, and a quantity counter will show up next to the button.
- The **Cart** component will display the items in the cart along with options to remove items or clear the cart.

## Conclusion

This is a simple e-commerce application built with React, TypeScript, and the Context API. It demonstrates how to manage state globally without the need for external libraries like Redux or Recoil.
