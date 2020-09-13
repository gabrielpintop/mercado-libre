import React from 'react';
import { mount } from 'enzyme';
import Products from './Products.jsx';

describe('container - Products', () => {

    let productDetails;
    beforeAll(() => {
        productDetails = mount(<Products searched={''} />);
    });

    test('renders correctly', () => {
        expect(productDetails.length).toEqual(1);
    });

    test('searched text', () => {
        expect(productDetails.find('h2').text()).toMatch(/Buscado:/);
    });
});
