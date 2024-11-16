import React, { useState } from "react";
import addProduct from "./App";

function ProductForm() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, ProductDescription] = useState("");

  const productNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted form: ${productName}`);
  };
  // Adding new products
  const newProduct = {
    name: productName,
    price: productPrice,
    description: productDescription,
  };
  addProduct(newProduct);
  // Returns the text boxes on the page with the following:
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Product Name:
        <input type="name" value={productName} onChange={productNameChange} />
      </label>
      <label>
        Product Price:
        <input
          type="price"
          value={productPrice}
          onChange={(event) => setProductPrice(event.target.value)}
        />
      </label>
      <label>
        Product Description:
        <input
          type="description"
          value={productDescription}
          onChange={(event) => ProductDescription(event.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ProductForm;
