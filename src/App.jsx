import React from 'react';
import ProductList from './ProductList';
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const products = [
    {id: 1, name: 'T-Shirt', price: 15, Description: 'Company Logo T-Shirt'},
    {id: 1, name: 'Jeans', price: 20, Description: 'Standard Company Khakis'},
    {id: 1, name: 'Hat', price: 10, Description: 'Company Logo Hat'},
  ]

  return (
    <>
      <div>
      <h1>Company Uniform Store</h1> 
      <ProductList products = {products} />
      </div>
      
     
    </>
  )
}

export default App
