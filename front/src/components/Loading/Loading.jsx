import React from 'react';
import mercadoLibreLogo from '../../assets/logos/Logo_ML@2x.png'
import './Loading.scss';

const Loading = () => (
    <div className="text-center margin-top-large">
        <img id="loadingLogo" src={mercadoLibreLogo} alt="Mercado Libre loading logo" />
    </div>
);

export default Loading;