import React from 'react';
import { mount } from 'enzyme';
import Breadcrumb from './Breadcrumb';

describe('component - Breadcrumb', () => {
    const loadProducts = jest.fn();
    const categories = ['Electrónica, Audio y Video', 'iPod', 'Reproductores', 'iPod touch', '32 GB'];
    let breadcrumb;
    beforeAll(() => {
        breadcrumb = mount(<Breadcrumb loadProducts={loadProducts} categories={categories} />);
    });

    test('renders correctly', () => {
        expect(breadcrumb.length).toEqual(1);
    });

    test('nav present', () => {
        expect(breadcrumb.exists('nav')).toBeTruthy();
    });

    test('breadcrumb present', () => {
        expect(breadcrumb.exists('#breadcrumb')).toBeTruthy();
    });

    test('breadcrumb elements values', () => {
        const breadcrumbElements = breadcrumb.find('li button');
        expect(breadcrumbElements.length).toEqual(categories.length);
        for (let index = 0; index < breadcrumbElements.length; index++) {
            expect(breadcrumbElements.at(index).text()).toEqual(categories[index]);
        }
    });

    test('breadcrumb element clicked', () => {
        breadcrumb.find('li button').at(0).simulate('click');
        expect(loadProducts).toHaveBeenCalledTimes(1);
        expect(loadProducts).toHaveBeenCalledWith(categories[0]);
    });

    test('loading prop effect', () => {
        expect(breadcrumb.find('li button').at(0).props().disabled).toBeFalsy();
        breadcrumb.setProps({ loading: true });
        expect(breadcrumb.find('li button').at(0).props().disabled).toBeTruthy();
    });
});
