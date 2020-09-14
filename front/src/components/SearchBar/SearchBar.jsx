import React, { useState, useEffect } from 'react';
import './SearchBar.scss';
import mercadoLibreLogo from '../../assets/logos/Logo_ML@2x.png';
import searchIcon from '../../assets/icons/ic_Search@2x.png';
import { Link } from 'react-router-dom';

const SearchBar = ({ loading, loadProducts, searched }) => {
    const [searchedText, setSearchedText] = useState(searched);
    const defineText = (event) => {
        setSearchedText(event.target.value);
    };
    const handleKeyEnterPress = (event) => {
        if (event.key === 'Enter') {
            loadProducts(searchedText)
        }
    };

    useEffect(() => {
        setSearchedText(searched);
    }, [searched]);

    return (
        <header className="header">
            <div className="row h-100 margin-horizontal">
                <div className="col-lg-10 mx-auto row flex-align-center pl-0 pr-0" >
                    <div className="col-lg-1 col-md-2 col-3 pl-0 pr-0">
                        <Link to=""><img id="headerLogo" src={mercadoLibreLogo} alt="Mercado Libre Header Logo" /></Link>
                    </div>
                    <div className="col-lg-11 col-md-10 col-9 pl-0 pr-0">
                        <div id="searchBar">
                            <input id="searchBarInput" disabled={loading} onKeyPress={handleKeyEnterPress} name="searchedText" type="text" placeholder="Nunca dejes de buscar" value={searchedText} onChange={defineText} />
                            <button disabled={loading} style={{ backgroundImage: `url(${searchIcon})` }} onClick={() => loadProducts(searchedText)}></button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default SearchBar;
