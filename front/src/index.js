import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import * as serviceWorker from './serviceWorker';
import ProductsVisualizer from './containers/ProductsVisualizer/ProductsVisualizer';

ReactDOM.render(
  <React.StrictMode>
    <ProductsVisualizer />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
