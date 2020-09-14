import React from 'react';
import { mount } from 'enzyme';
import ProductDetails from './ProductDetails.jsx';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
    useParams: () => ({ id: '1234', }),
}));

describe('container - ProductDetails', () => {

    const handleChanges = jest.fn();

    let productDetails;
    beforeAll(() => {
        productDetails = mount(<ProductDetails handleChanges={handleChanges} />);
    });

    test('renders correctly', () => {
        expect(productDetails.length).toEqual(1);
    });

    test('loading present', () => {
        expect(productDetails.exists('Loading')).toBeTruthy();
    });
});
