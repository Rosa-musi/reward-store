import React, { useContext, useEffect } from 'react'
import Header from './components/Header'
import Filters from './components/Filters'
import Filtration from './components/Filtration'
import { ProductsProvider} from './contexts/ProductsContext'

function App() {
  

  return (
    <ProductsProvider>
      <Header />  
      <Filters />
      <Filtration/>
    </ProductsProvider>
  );
}

export default App;
