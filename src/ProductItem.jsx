import React from 'react';

function ProductItem({ name, price, description }) {
    return (
        <div className="product-card">
            <h4>Description:{description} </h4>
            <h3>{name}</h3>
            <p>Price: ${price}</p>
        </div>
    );
}

export default ProductItem;