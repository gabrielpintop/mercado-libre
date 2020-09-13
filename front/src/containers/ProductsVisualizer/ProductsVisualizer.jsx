import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Products from '../Products/Products';
import ProductDetails from '../ProductDetails/ProductDetails';
import SearchBar from '../../components/SearchBar/SearchBar';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

const ProductsVisualizer = () => {
    const [loading, setLoading] = useState(false);
    const categories = ['Electrónica, Audio y Video', 'iPod', 'Reproductores', 'iPod touch', '32 GB'];

    const loadProducts = (searched) => {

    };

    return (
        <>
            <SearchBar loadProducts={loadProducts} loading={loading} />
            <Breadcrumb categories={categories} loadProducts={loadProducts} loading={loading} />
            {!loading && <div className="row h-100 margin-horizontal">
                <div className="col-lg-10 mx-auto row flex-align-center pl-0 pr-0" >
                    <Router>
                        <Switch>
                            <Route exact path="/">
                                <Products></Products>
                            </Route>
                            <Route exact path="/:id">
                                <ProductDetails />
                            </Route>
                            <Redirect to="" />
                        </Switch>
                    </Router>
                </div>
            </div>}
        </>
    );
}

export default ProductsVisualizer;

