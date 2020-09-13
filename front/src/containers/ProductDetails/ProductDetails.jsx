import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = (props) => {
    const { id } = useParams();
    return (<h1>Detalles del producto con id: {id}</h1>);
};

export default ProductDetails;