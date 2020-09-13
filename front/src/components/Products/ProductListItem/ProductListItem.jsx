import React from 'react';
import './ProductListItem.scss';
import { formatNumber } from '../../../services/utilities';
import freeShippingIcon from '../../../assets/icons/ic_shipping@2x.png';
import { Link } from 'react-router-dom';

const ProductListItem = ({ id, title, price: { currency, amount, decimals }, city, picture, condition, free_shipping }) => {
    return (
        <div className="product-container col-12 pl-0 pr-0 pt-small pb-small">
            <Link to={`/items/${id}`}>
                <div className="product-image">
                    <img src={picture} alt={title} />
                </div>
            </Link>
            <div className="product-information mt-medium">
                <div className="product-price mb-medium"><h2>$ {formatNumber(amount)} {currency}</h2>{free_shipping && <img src={freeShippingIcon} alt="Logo de envío gratis" />}</div>
                <h4><Link to={`/items/${id}`}>{title}</Link></h4>
                <h4>{condition}</h4>
            </div>
            {
                city && <div className="product-location mt-medium">
                    <h5>{city}</h5>
                </div>
            }
        </div >
    );
};

export default ProductListItem;