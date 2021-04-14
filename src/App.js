import React from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import Body from './components/Body'
import { ProductsProvider} from './contexts/ProductsContext'

function App() {
  
  return (
    <ProductsProvider>
      <Header />
      <Modal />  
      <Body />
    </ProductsProvider>
  );
}

export default App;
