import React from 'react';
import { shallow } from 'enzyme';
import ProductListItem from './ProductListItem';

describe('component - ProductListItem', () => {
    const product = {
        id: '1', title: 'Test',
        price: { currency: 'ARS', amount: 1000, decimals: 0 },
        picture: 'http://http2.mlstatic.com/D_949085-MLA40175707456_122019-F.jpg',
        condition: 'Nuevo',
        free_shipping: true,
        city: 'Mendoza'
    };
    let productListItem;
    beforeAll(() => {
        productListItem = shallow(<ProductListItem {...product} />);
    });

    test('renders correctly', () => {
        expect(productListItem.length).toEqual(1);
    });

    test('content container present', () => {
        expect(productListItem.exists('.product-container')).toBeTruthy();
    });

    test('product image', () => {
        expect(productListItem.exists('.product-image img')).toBeTruthy();
        expect(productListItem.find('.product-image img').props().src).toEqual(product.picture);
    });

    test('product price', () => {
        expect(productListItem.exists('.product-price h2')).toBeTruthy();
        expect(productListItem.find('.product-price h2').text()).toEqual(`$ 1.000 ${product.price.currency}`);
    });

    test('free shipping image', () => {
        expect(productListItem.exists('.product-image img')).toBeTruthy();
    });

    test('product title', () => {
        expect(productListItem.exists('.product-information Link')).toBeTruthy();
        expect(productListItem.find('.product-information Link').text()).toEqual(product.title);
    });

    test('product location', () => {
        expect(productListItem.exists('.product-location h5')).toBeTruthy();
        expect(productListItem.find('.product-location h5').text()).toEqual(product.city);
    });
});
