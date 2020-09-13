import React from 'react';
import { shallow } from 'enzyme';
import ProductsMessage from './ProductsMessage';

describe('component - ProductsMessage', () => {
    let productsMessage;
    beforeAll(() => {
        productsMessage = shallow(<ProductsMessage message="" />);
    });

    test('renders correctly', () => {
        expect(productsMessage.length).toEqual(1);
    });

    test('content container present', () => {
        expect(productsMessage.exists('#productsMessage')).toBeTruthy();
    });

    test('logo present', () => {
        expect(productsMessage.exists('img')).toBeTruthy();
    });

    test('h2 present', () => {
        expect(productsMessage.exists('h2')).toBeTruthy();
        expect(productsMessage.find('h2').text()).toEqual('');
    });

    test('message prop change', () => {
        productsMessage.setProps({ message: 'notSearched' });
        expect(productsMessage.find('h2').text()).toEqual('Escribe en el buscador lo que quieres encontrar.');
        productsMessage.setProps({ message: 'notAValidMessageForTesting' });
        expect(productsMessage.find('h2').text()).toEqual('');
    });
});
