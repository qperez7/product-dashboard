import React from 'react';
import ProductItem from './ProductItem';
import ProductForm from './AddProductForm';

// Product List
export default function App() {
  const products = [
    {id: 1, name: 'T-Shirt', price: 15, description: 'Company Logo T-Shirt'},
    {id: 2, name: 'Jeans', price: 20, description: 'Standard Company Khakis'},
    {id: 3, name: 'Hat', price: 10, description: 'Company Logo Hat'},
  ]
// Adds New Products depending on Form
  const [product,setProducts] =useState([]);
  const addProduct = (newProduct) => {
  setProducts(prevProducts => ({ ...prevProducts, newProduct}))};
  return (
    <>
      <div>
      <h1>Company Uniform Store</h1> 
      {products.map(product => (
                <ProductItem
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                />
    
      ))}
      </div>
      <div>
      <ProductForm addProduct = {addProduct} />
      </div>
      
     
    </>
  )
}

