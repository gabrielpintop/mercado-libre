import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';

const mockedLoadProducts = (result) => {
  console.log(result);
};

const App = () => {
  return (
    <>
      <SearchBar loadProducts={mockedLoadProducts}></SearchBar>
    </>
  );
}

export default App;

