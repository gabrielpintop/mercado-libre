import React from 'react';
import mercadoLibreLogo from '../src/assets/logos/Logo_ML@2x.png';
import './App.scss';

function App() {
  return (
    <>
      <header className="header">
        <img id="headerLogo" src={mercadoLibreLogo} alt="Mercado Libre Header Logo" />
      </header>
    </>
  );
}

export default App;
