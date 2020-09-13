import React from 'react';
import searchErrorSvg from '../../assets/icons/ic_SearchError.svg';
import warningSvg from '../../assets/icons/ic_warning.svg';

import './ProductsMessage.scss';

const ProductsMessage = ({ message }) => {
    const messsages = {
        notSearched: {
            title: 'Escribe en el buscador lo que quieres encontrar.',
            items: ['<strong>Escribe tu búsqueda</strong> en el campo que figura en la parte superior de la pantalla.']
        },
        searchedNotFound: {
            title: 'No hay publicaciones que coincidan con tu búsqueda.',
            items: ['<strong>Revisa la ortografía</strong> de la palabra.', 'Utiliza <strong>palabras más genéricas</strong> o menos palabras.']
        },
        productNotFound: {
            title: 'No encontramos el producto con el identificador ingresado.',
            items: ['<strong>Haz una búsqueda</strong> del producto que querías visualizar.', 'Utiliza <strong>palabras asociadas</strong> a dicho producto.'],
            warning: true
        }
    };
    return <div id="productsMessage" className="main-content row no-gutters py-5 margin-horizontal">
        <div className="col-lg-1 col-12"></div>
        <div className="col-lg-2 col-md-3 text-center">
            <img src={messsages[message]?.warning ? warningSvg : searchErrorSvg} alt="Search error svg" />
        </div>
        <div className="col-md-9 pt-2">
            <h2>{messsages[message]?.title}</h2>
            <ul className="pl-3">
                {messsages[message]?.items?.map((item, index) => <li key={'PM' + index} dangerouslySetInnerHTML={{ __html: item }}></li>)}
            </ul>
        </div>
    </div>;
};

export default ProductsMessage;