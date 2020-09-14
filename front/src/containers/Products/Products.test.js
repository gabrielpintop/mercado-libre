import React from 'react';
import { mount } from 'enzyme';
import Products from './Products.jsx';

describe('container - Products', () => {
    const handleChanges = jest.fn();
    let productDetails;
    beforeAll(() => {
        productDetails = mount(<Products searched={''} handleChanges={handleChanges} />);
    });

    test('renders correctly', () => {
        expect(productDetails.length).toEqual(1);
    });

    test('products message', () => {
        expect(productDetails.exists('ProductsMessage')).toBeTruthy();
    });

    test('called handleChanges', () => {
        expect(handleChanges).toHaveBeenCalledTimes(1);
        expect(handleChanges).toHaveBeenCalledWith([], false);
    });
});
