import React from "react";

function ProductItem({ name, price, description }) {
  return (
    <div className="product-item">
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p>Description: {description} </p>
    </div>
  );
}

export default ProductItem;
