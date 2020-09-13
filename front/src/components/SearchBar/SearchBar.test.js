import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';

describe('component - SearchBar', () => {
    const searchBar = shallow(<SearchBar />);

    test('renders correctly', () => {
        expect(searchBar.length).toEqual(1);
    });

    test('header present', () => {
        expect(searchBar.exists('header')).toBeTruthy();
    });

    test('logo present', () => {
        expect(searchBar.exists('#headerLogo')).toBeTruthy();
    });

    test('search bar present', () => {
        expect(searchBar.exists('#searchBarInput')).toBeTruthy();
        expect(searchBar.exists('#searchBar button')).toBeTruthy();
    });
});
