import React from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import Body from './components/Body'
import { ProductsProvider} from './contexts/ProductsContext'
import GlobalStyle from "./styles/globalStyles.js"

function App() {
  
  return (
    <>
    <GlobalStyle/>
    <ProductsProvider>
      <Header />
      <Modal />  
      <Body />
    </ProductsProvider>
    </>
  );
}

export default App;
