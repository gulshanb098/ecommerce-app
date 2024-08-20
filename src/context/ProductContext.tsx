import React, { ReactNode, createContext, useContext, useState } from "react";
import { Product } from "../types";

interface ProductContextType {
  products: Product[];
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

interface ProductProviderProps {
  children: ReactNode; // Define the type for children prop
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "Apple iPhone 14",
      price: 999,
      description: "The latest Apple iPhone with A15 Bionic chip.",
      imageUrl: "https://example.com/iphone14.jpg",
    },
    {
      id: 2,
      name: "Samsung Galaxy S22",
      price: 849,
      description: "Samsung's flagship smartphone with a stunning display.",
      imageUrl: "https://example.com/galaxys22.jpg",
    },
    {
      id: 3,
      name: "Sony WH-1000XM4",
      price: 349,
      description: "Industry-leading noise canceling wireless headphones.",
      imageUrl: "https://example.com/sonywh1000xm4.jpg",
    },
    {
      id: 4,
      name: "Dell XPS 13",
      price: 1199,
      description: "A powerful ultrabook with a stunning display.",
      imageUrl: "https://example.com/dellxps13.jpg",
    },
    {
      id: 5,
      name: "Apple MacBook Pro",
      price: 1999,
      description: "The new MacBook Pro with M1 Pro chip.",
      imageUrl: "https://example.com/macbookpro.jpg",
    },
    {
      id: 6,
      name: "Google Pixel 6",
      price: 699,
      description: "Google's latest smartphone with Tensor chip.",
      imageUrl: "https://example.com/pixel6.jpg",
    },
    {
      id: 7,
      name: "Amazon Echo Dot",
      price: 49,
      description: "Smart speaker with Alexa.",
      imageUrl: "https://example.com/echodot.jpg",
    },
    {
      id: 8,
      name: "Nintendo Switch",
      price: 299,
      description: "The versatile gaming console from Nintendo.",
      imageUrl: "https://example.com/switch.jpg",
    },
    {
      id: 9,
      name: "Sony PlayStation 5",
      price: 499,
      description:
        "The latest PlayStation console with groundbreaking performance.",
      imageUrl: "https://example.com/ps5.jpg",
    },
    {
      id: 10,
      name: "Apple Watch Series 7",
      price: 399,
      description: "The latest smartwatch from Apple with a larger display.",
      imageUrl: "https://example.com/applewatch7.jpg",
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <ProductContext.Provider
      value={{ products, currentPage, totalPages, setCurrentPage }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};

export { ProductProvider, useProductContext };
