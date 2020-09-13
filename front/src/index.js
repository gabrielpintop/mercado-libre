import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './scss/index.scss';
import * as serviceWorker from './serviceWorker';
import ProductsVisualizer from './containers/ProductsVisualizer/ProductsVisualizer';

const App = () => (
  <Router>
    <ProductsVisualizer />
  </Router>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
