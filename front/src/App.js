import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import SearchBar from './components/SearchBar/SearchBar';
import Breadcrumb from './components/Breadcrumb/Breadcrumb';
import full from '../src/assets/02_Detalle@2x.png.png';
import Products from './containers/Products/Products';
import ProductDetails from './containers/ProductDetails/ProductDetails';

const categories = ['Electrónica, Audio y Video', 'iPod', 'Reproductores', 'iPod touch', '32 GB'];
const mockedLoadProducts = (result) => {
  console.log(result);
};

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

