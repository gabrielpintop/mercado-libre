import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Products from './containers/Products/Products';
import ProductDetails from './containers/ProductDetails/ProductDetails';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Products />
        </Route>
        <Route exact path="/:id">
          <ProductDetails />
        </Route>
        <Redirect to="" />
      </Switch>
    </Router>
  );
}

export default App;

