import React, { useContext, useEffect } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import { ProductsProvider} from './contexts/ProductsContext'

function App() {
  

  return (
    <ProductsProvider>
      <Header />  
      <Body />
    </ProductsProvider>
  );
}

export default App;
