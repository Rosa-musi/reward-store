import React, { useContext, useEffect } from 'react'
import Header from './components/Header'
import Filters from './components/Filters'
import ProductCard from './components/ProductCard'
import { ProductsProvider, productContext } from './contexts/ProductsContext'

function App() {

  return (
    <ProductsProvider>
      <Header />  
      <Filters />
      <ProductCard />
    </ProductsProvider>
  );
}

export default App;
