import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../services/products';
import Loading from '../../components/Loading/Loading';
import ProductsMessage from '../../components/ProductsMessage/ProductsMessage';

const ProductDetails = ({ handleChanges }) => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        handleChanges([], true);
        getProductById(id).then(data => {
            // setProduct(data);
            handleChanges([], false);
            setLoading(false);
        }).catch(err => {
            window.alert(err);
            handleChanges([], false);
            setLoading(false);
        });
    }, []);

    return (loading ? <Loading /> : product ? <h1>Hola</h1> : <ProductsMessage message="productNotFound" />);
};

export default ProductDetails;