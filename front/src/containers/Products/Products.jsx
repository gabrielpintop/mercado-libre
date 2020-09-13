import React, { useEffect, useState } from 'react';
import Loading from '../../components/Loading/Loading';

const Products = ({ searched, handleChanges }) => {
    // const [products, setProducts] = [];
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log('here');

        if (searched) {
            handleChanges([], true);
            setLoading(true);
            setTimeout(() => {
                handleChanges(['Televisores', 'Celular'], false);
                setLoading(false);
            }, 2000);
        }
    }, [searched, handleChanges]);

    return loading ? <Loading /> : <h2>Buscado: {searched}</h2>;
};

export default Products;