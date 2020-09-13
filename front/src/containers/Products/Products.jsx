import React from 'react';
import { useLocation } from 'react-router-dom';

const Products = (props) => {
    const search = new URLSearchParams(useLocation().search).get('search');
    return <h1>Busca productos usando: {search}</h1>;
};

export default Products;