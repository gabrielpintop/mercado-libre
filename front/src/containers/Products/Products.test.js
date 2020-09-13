import React from 'react';
import { mount } from 'enzyme';
import Products from './Products.jsx';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
    useLocation: () => ({ pathname: '/', search: '?search=1234', hash: '' }),
}));

describe('container - Products', () => {

    let productDetails;
    beforeAll(() => {
        productDetails = mount(<Products />);
    });

    test('renders correctly', () => {
        expect(productDetails.length).toEqual(1);
    });

    test('searched text', () => {
        expect(productDetails.find('h1').text()).toMatch(/1234/);
    });
});
