import React, { useEffect, useState } from 'react';
import Loading from '../../components/Loading/Loading';
import { getProducts } from '../../services/products';
import ProductsMessage from '../../components/ProductsMessage/ProductsMessage';
import ProductListItem from '../../components/Products/ProductListItem/ProductListItem';

const Products = ({ searched, handleChanges }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (searched) {
            handleChanges([], true);
            setLoading(true);
            getProducts(searched).then(data => {
                console.log(data);

                setProducts(data.items);
                handleChanges(data.categories, false);
                setLoading(false);
            }).catch(err => {
                handleChanges([], false);
                setLoading(false);
            });
        } else {
            handleChanges([], false);
            setProducts([]);
        }
    }, [searched, handleChanges]);

    const renderProducts = () => {
        return products.length === 0 ?
            <ProductsMessage message="searchedNotFound" />
            :
            <div className="main-content row no-gutters mb-medium">
                {products.map(product => <ProductListItem key={product.id} {...product} />)}
            </div>;
    };

    return loading ? <Loading /> : renderProducts();
};

export default Products;