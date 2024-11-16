import React, { useState } from 'react';

function ProductForm() {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescripton, ProductDescription] = useState('');

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
        description:productDescripton,
    };
    addProduct(newProduct);

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Product Name:
                <input type="name" value={productName} onChange={productNameChange} />
            </label>
            <label>
                Product Price:
                <input type="price" value={productPrice} onChange= {(event) => setProductPrice(event.target.value)}/>
            </label>
            <label>
                Product Name:
                <input type="description" value={ProductDescription} onChange= {(event) => ProductDescription(event.target.value)}/>
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default ProductForm;