import React from 'react';
import { mount } from 'enzyme';
import SearchBar from './SearchBar';

describe('component - SearchBar', () => {
    const searchedText = 'Testing';
    const loadProducts = jest.fn();
    let searchBar;
    beforeAll(() => {
        searchBar = mount(<SearchBar loading={false} loadProducts={loadProducts} />);
    });

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
        expect(searchBar.exists('#searchBar')).toBeTruthy();
        expect(searchBar.exists('#searchBarInput')).toBeTruthy();
        expect(searchBar.exists('#searchBar button')).toBeTruthy();
    });

    test('input value change', () => {
        const input = searchBar.find('#searchBarInput');
        expect(input.props().value).toEqual('');
        input.simulate('change', { target: { value: 'Testing' } });
        expect(searchBar.find('#searchBarInput').props().value).toEqual(searchedText);
    });

    test('button clicked', () => {
        searchBar.find('#searchBar button').simulate('click');
        expect(loadProducts).toHaveBeenCalledTimes(1);
        expect(loadProducts).toHaveBeenCalledWith(searchedText);
    });

    test('enter key pressed', () => {
        searchBar.find('#searchBar button').simulate('keypress', { key: 'Enter' });
        expect(loadProducts).toHaveBeenCalledTimes(1);
        expect(loadProducts).toHaveBeenCalledWith(searchedText);
    });

    test('loading prop effect', () => {
        expect(searchBar.find('#searchBarInput').props().disabled).toBeFalsy();
        expect(searchBar.find('#searchBar button').props().disabled).toBeFalsy();
        searchBar.setProps({ loading: true });
        expect(searchBar.find('#searchBarInput').props().disabled).toBeTruthy();
        expect(searchBar.find('#searchBar button').props().disabled).toBeTruthy();
    });
});
