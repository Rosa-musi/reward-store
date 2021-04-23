import React from 'react'
import Header from './components/Header'
import Body from './components/Pages/Body'
import RedeemHistory from './components/Pages/RedeemHistory'
import GetCoins from './components/Pages/GetCoins'
import { ProductsProvider} from './contexts/ProductsContext'
import GlobalStyle from "./styles/globalStyles.js"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  
  return (
    <>
     <Router>
        <GlobalStyle/>
        <ProductsProvider>
          <Header />
          <Switch>
            <Route path="/" exact><Body /></Route>
            <Route path="/redeems" exact><RedeemHistory/></Route>
            <Route path="/getcoins" exact><GetCoins/></Route>

          </Switch>
          
        </ProductsProvider>
      </Router>
    </>
  );
}

export default App;
