import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Productpage from './views/productpage'
import Cartpage from './views/cartpage'
import Registerpage from './views/registerpage'
import Loginpage from './views/loginpage'
import Productspage from './views/productspage'
import Policypage from './views/policypage'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={Productpage} exact path="/productpage" />
        <Route component={Cartpage} exact path="/cartpage" />
        <Route component={Registerpage} exact path="/registerpage" />
        <Route component={Loginpage} exact path="/loginpage" />
        <Route component={Productspage} exact path="/productspage" />
        <Route component={Policypage} exact path="/policypage" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
