import React from 'react';
import { mount } from 'enzyme';
import ProductDetails from './ProductDetails.jsx';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
    useParams: () => ({ id: '1234', }),
}));

describe('container - ProductDetails', () => {

    let productDetails;
    beforeAll(() => {
        productDetails = mount(<ProductDetails />);
    });

    test('renders correctly', () => {
        expect(productDetails.length).toEqual(1);
    });

    test('searched id text', () => {
        expect(productDetails.find('h1').text()).toMatch(/1234/);
    });
});
