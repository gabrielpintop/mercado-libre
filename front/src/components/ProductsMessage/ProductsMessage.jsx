import React from 'react';
import searchErrorSvg from '../../assets/icons/ic_SearchError.svg';
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

        }
    };
    return <div id="productsMessage" className="main-content row no-gutters py-5 mb-small mt-small">
        <div className="col-md-1"></div>
        <div className="col-md-2 text-center">
            <div>
                <img src={searchErrorSvg} alt="Search error svg" />
            </div>
        </div>
        <div className="col-md-9 pt-2">
            <h2>{messsages[message]?.title}</h2>
            <ul className="pl-3">
                {messsages[message]?.items.map((item, index) => <li key={'PM' + index} dangerouslySetInnerHTML={{ __html: item }}></li>)}
            </ul>
        </div>
    </div>;
};

export default ProductsMessage;