import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory, useLocation } from "react-router-dom";
import Products from '../Products/Products';
import ProductDetails from '../ProductDetails/ProductDetails';
import SearchBar from '../../components/SearchBar/SearchBar';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

const ProductsVisualizer = (props) => {
    const history = useHistory();
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searched, setSearched] = useState(new URLSearchParams(useLocation().search).get('search') || '');
    const loadProducts = (search) => {
        if (search && search.length > 1) {
            history.push(`/?search=${search}`);
            setSearched(search);
        }
    };

    const handleChanges = useCallback((currentCategories, currentLoading) => {
        setCategories(currentCategories);
        setLoading(currentLoading);
    }, []);

    return (
        <>
            <SearchBar loadProducts={loadProducts} loading={loading} searched={searched} />
            <Breadcrumb categories={categories} loadProducts={loadProducts} loading={loading} />
            <div className="row h-100 margin-horizontal">
                <div className="col-lg-10 mx-auto row flex-align-center pl-0 pr-0" >
                    <div className="col-12 pl-0 pr-0">
                        <Router>
                            <Switch>
                                <Route exact path="/">
                                    <Products handleChanges={handleChanges} searched={searched}></Products>
                                </Route>
                                <Route exact path="/products/:id">
                                    <ProductDetails />
                                </Route>
                                <Redirect to="/" />
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductsVisualizer;

