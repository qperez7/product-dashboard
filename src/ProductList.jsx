import React from 'react';
import ProductItem from './ProductItem';
function ProductList() {
    return (
        <div>
            <h2>Product List</h2>
            {products.map(product => (
                <ProductItem
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                />
            ))}
        </div>
    );
}

export default ProductList;