import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import Breadcrumb from './components/Breadcrumb/Breadcrumb';

const categories = ['Electrónica, Audio y Video', 'iPod', 'Reproductores', 'iPod touch', '32 GB'];
const mockedLoadProducts = (result) => {
  console.log(result);
};

const App = () => {
  return (
    <>
      <SearchBar loadProducts={mockedLoadProducts}></SearchBar>
      <Breadcrumb loadProducts={mockedLoadProducts} categories={categories} />
    </>
  );
}

export default App;

