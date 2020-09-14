import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../services/products';
import Loading from '../../components/Loading/Loading';
import ProductsMessage from '../../components/ProductsMessage/ProductsMessage';
import { formatNumber } from '../../services/utilities';
import './ProductDetails.scss';

const ProductDetails = ({ handleChanges }) => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState(null);
    const [selectedPicture, setSelectedPicture] = useState(0);
    useEffect(() => {
        handleChanges([], true);
        getProductById(id).then(data => {
            setProduct(data.item);
            handleChanges(data.categories, false);
            setLoading(false);
        }).catch(err => {
            handleChanges([], false);
            setLoading(false);
        });
    }, [handleChanges, id]);

    const showPrice = () => {
        if (product.price.decimals !== 0) {
            const decimals = String(product.price.amount).substring(String(product.price.amount).length - product.price.decimals);
            return <p id="productDetailsPrice" className="mb-medium"><span>$ {formatNumber(product.price.amount)}</span><sup>{decimals}</sup></p>;
        } else {
            return <p id="productDetailsPrice" className="mb-medium"><span>$ {formatNumber(product.price.amount)}</span><sup>00</sup></p>;
        }
    };
    return (
        loading ? <Loading /> : product ?
            <div id="productDetails" className="main-content row no-gutters mb-small pt-medium">
                <div className="col-md-8">
                    <div id="productDetailsImageContainer">
                        <img src={product.pictures[selectedPicture]} alt={product.title} />
                    </div>
                </div>
                <div id="productDetailsInformation" className="col-md-4">
                    <p className="mb-small">{product.condition} - {product.sold_quantity} vendidos</p>
                    <h1 className="mb-medium">{product.title}</h1>
                    {showPrice()}
                    <a href={product.permalink} target="_blank" rel="noopener noreferrer">Comprar</a>
                </div>
                <div id="productsDetailsSeparator" className="col-12 mt-medium mb-medium">
                    {product.pictures.length > 0 &&
                        <div className="row" id="productDetailsImages">
                            {product.pictures?.map((picture, index) => <div key={'IM' + index} className={'col-md-2 col-6 ' + (index === selectedPicture ? 'active' : '')}><img src={picture} onClick={() => setSelectedPicture(index)} /></div>)}
                        </div>
                    }
                </div>
                <div id="productDetailsDescription" className="col-md-8">
                    <h3 className="mb-medium">Descripción del producto</h3>
                    <p className="mb-0">{product.description}</p>
                </div>
            </div>
            : <ProductsMessage message="productNotFound" />
    );
};

export default ProductDetails;