import React, { useState, useCallback, useEffect } from 'react';
import { Switch, Route, Redirect, useHistory, useLocation } from "react-router-dom";
import Products from '../Products/Products';
import ProductDetails from '../ProductDetails/ProductDetails';
import SearchBar from '../../components/SearchBar/SearchBar';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ProductsMessage from '../../components/ProductsMessage/ProductsMessage';

const ProductsVisualizer = (props) => {
    const history = useHistory();
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searched, setSearched] = useState(new URLSearchParams(useLocation().search).get('search') || '');
    const loadProducts = (search) => {
        if (search && search.length > 1) {
            history.push(`/items?search=${search}`);
            setSearched(search);
        }
    };

    const handleChanges = useCallback((currentCategories, currentLoading) => {
        setCategories(currentCategories);
        setLoading(currentLoading);
    }, []);

    useEffect(() => {
        history.listen((listen, action) => {
            if (listen.search) {
                setSearched(new URLSearchParams(listen.search).get('search'));
            } else {
                setSearched('');
            }
        });
    }, [history]);

    return (
        <>
            <SearchBar loadProducts={loadProducts} loading={loading} searched={searched} />
            <Breadcrumb categories={categories} loadProducts={loadProducts} loading={loading} />
            <main className="row h-100 margin-horizontal">
                <div className="col-lg-10 mx-auto row flex-align-center pl-0 pr-0" >
                    <div className="col-12 pl-0 pr-0">
                        <Switch>
                            <Route exact path="/items">
                                <Products handleChanges={handleChanges} searched={searched}></Products>
                            </Route>
                            <Route exact path="/items/:id">
                                <ProductDetails />
                            </Route>
                            <Route exact path="/">
                                <ProductsMessage message={'notSearched'} />
                            </Route>
                            <Redirect to="/" />
                        </Switch>
                    </div>
                </div>
            </main>
        </>
    );
}

export default ProductsVisualizer;

