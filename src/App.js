import './App.css';
import ProductList from './Components/ProductList';
import Navbar from './Components/NavBar';
import Footer from './Components/Footer';
import { useState } from 'react';

function App() {
  const [productsLen, setProductsLen] = useState(null)
  return (
    <>
      <Navbar productsLen={productsLen} />
      <ProductList setProductsLen={setProductsLen} />
      <Footer />
    </>
  );
}

export default App;
