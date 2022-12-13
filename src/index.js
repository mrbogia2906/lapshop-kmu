import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import UpdateAccountpage from './views/update-accountpage'
import ResetPasspage from './views/reset-passpage'
import Productpage from './views/productpage'
import ShowPasspage from './views/show-passpage'
import Cartpage from './views/cartpage'
import Accountpage from './views/accountpage'
import Registerpage from './views/registerpage'
import Loginpage from './views/loginpage'
import Productspage from './views/productspage'
import Policypage from './views/policypage'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={UpdateAccountpage} exact path="/update-accountpage" />
        <Route component={ResetPasspage} exact path="/reset-passpage" />
        <Route component={Productpage} exact path="/productpage" />
        <Route component={ShowPasspage} exact path="/show-passpage" />
        <Route component={Cartpage} exact path="/cartpage" />
        <Route component={Accountpage} exact path="/accountpage" />
        <Route component={Registerpage} exact path="/registerpage" />
        <Route component={Loginpage} exact path="/loginpage" />
        <Route component={Productspage} exact path="/productspage" />
        <Route component={Policypage} exact path="/policypage" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
