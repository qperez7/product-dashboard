import React, { useState } from "react";
import ProductForm from "./AddProductForm";
import ProductItem from "./ProductItem";
import "./App.css";

// Product List
export default function App() {
  const products = [
    { id: 1, name: "T-Shirt", price: 15, description: "Company Logo T-Shirt" },
    { id: 2, name: "Jeans", price: 20, description: "Standard Company Khakis" },
    { id: 3, name: "Hat", price: 10, description: "Company Logo Hat" },
  ];
  // Adds New Products depending on Form
  const [Aproduct, setProducts] = useState(
    { id: 1, name: "T-Shirt", price: 15, description: "Company Logo T-Shirt" },
    { id: 2, name: "Jeans", price: 20, description: "Standard Company Khakis" },
    { id: 3, name: "Hat", price: 10, description: "Company Logo Hat" }
  );
  Aproduct;
  const addProduct = () => {
    setProducts((newProduct) => ({ ...newProduct, id: newProduct.id + 1 }));
  };
  return (
    // Displays the following on the page:
    <>
      <div className="app-background">
        <div className="center-text">
          <div>
            <h1>Company Uniform Store</h1>
            {products.map((product) => (
              <ProductItem
                key={product.id}
                name={product.name}
                price={product.price}
                description={product.description}
              />
            ))}
          </div>
          <div>
            <ProductForm newProduct={addProduct} />
          </div>
        </div>
      </div>
    </>
  );
}
