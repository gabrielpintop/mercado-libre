import React, { useEffect, useState, useCallback } from 'react';
import Loading from '../../components/Loading/Loading';
import { getProducts } from '../../services/products';
import ProductsMessage from '../../components/ProductsMessage/ProductsMessage';
import ProductListItem from '../../components/Products/ProductListItem/ProductListItem';
import Pagination from '../../components/Pagination/Pagination';

const Products = ({ searched, handleChanges }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState({ total: 0, offset: 0, hasBefore: false, hasNext: false });

    const loadProducts = useCallback((newOffset = 0) => {
        handleChanges([], true);
        setLoading(true);
        getProducts(searched, newOffset).then(({ items, categories, total, hasNext, hasBefore, offset }) => {
            setProducts(items);
            setPagination({ total, hasNext, hasBefore, offset });
            handleChanges(categories, false);
            setLoading(false);
        }).catch(err => {
            setPagination({ total: 0, offset: 0, hasBefore: false, hasNext: false });
            handleChanges([], false);
            setLoading(false);
        });
    }, [handleChanges, searched]);

    useEffect(() => {
        if (searched) {
            loadProducts(pagination.offset);
        } else {
            handleChanges([], false);
            setProducts([]);
        }
    }, [searched, handleChanges, loadProducts, pagination.offset]);

    const renderProducts = () => {
        return products.length === 0 ?
            <ProductsMessage message="searchedNotFound" />
            :
            <><div className="main-content row no-gutters mb-small">
                {products.map(product => <ProductListItem key={product.id} {...product} />)}
            </div><Pagination selectPage={loadProducts} {...pagination} /></>;
    };

    return loading ? <Loading /> : renderProducts();
};

export default Products;