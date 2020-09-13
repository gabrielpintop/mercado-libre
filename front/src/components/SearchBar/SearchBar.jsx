import React, { useState } from 'react';
import './SearchBar.scss';
import mercadoLibreLogo from '../../assets/logos/Logo_ML@2x.png';
import searchIcon from '../../assets/icons/ic_Search@2x.png';

const SearchBar = ({ loading, loadProducts }) => {
    const [searchedText, setSearchedText] = useState('');
    const defineText = (event) => {
        setSearchedText(event.target.value);
    };

    return (
        <header className="header">
            <nav className="row h-100 margin-horizontal">
                <div className="col-lg-10 mx-auto row flex-align-center pl-0 pr-0" >
                    <div className="col-lg-1 col-md-2 col-3 pl-0 pr-0">
                        <img id="headerLogo" src={mercadoLibreLogo} alt="Mercado Libre Header Logo" />
                    </div>
                    <div className="col-lg-11 col-md-10 col-9 pl-0 pr-0">
                        <div id="searchBar">
                            <input id="searchBarInput" disabled={loading} name="searchedText" type="text" placeholder="Nunca dejes de buscar" value={searchedText} onChange={defineText} />
                            <button disabled={loading} style={{ backgroundImage: `url(${searchIcon})` }} onClick={() => loadProducts(searchedText)}></button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default SearchBar;
