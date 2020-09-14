import React from 'react';
import { shallow } from 'enzyme';
import ProductsVisualizer from './ProductsVisualizer';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
    useLocation: () => ({ pathname: '/', search: '?search=1234', hash: '' }),
    useHistory: () => ({
        push: jest.fn()
    })
}));

describe('component - SearchBar', () => {
    let productsVisualizer;
    beforeAll(() => {
        productsVisualizer = shallow(<ProductsVisualizer />);
    });

    test('renders correctly', () => {
        expect(productsVisualizer.length).toEqual(1);
    });

    test('includes SearchBar', () => {
        expect(productsVisualizer.exists('SearchBar')).toBeTruthy();
    });

    test('includes Breadcrumb', () => {
        expect(productsVisualizer.exists('Breadcrumb')).toBeTruthy();
    });

    test('includes Products', () => {
        expect(productsVisualizer.exists('Products')).toBeTruthy();
    });

});