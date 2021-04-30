import React from 'react'
import Header from './components/Header'
import Body from './components/Pages/Body/Body'
import RedeemHistory from './components/Pages/RedeemHistory/RedeemHistory'
import GetCoins from './components/Pages/GetCoins/GetCoins'
import { ProductsProvider} from './contexts/ProductsContext'
import GlobalStyle from "./styles/globalStyles.js"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

function App() {
  
  return (
    <>
     <Router>
        <GlobalStyle/>
        <ProductsProvider>
          <Header />
          <Switch> 
            <Route path="/reward-store/" exact><Body /></Route>
            <Route path="/reward-store/redeems" exact><RedeemHistory/></Route>
            <Route path="/reward-store/getcoins" exact><GetCoins/></Route>

          </Switch>
          
        </ProductsProvider>
      </Router>
    </>
  );
}

export default App;
