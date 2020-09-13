import React from 'react';
import { shallow } from 'enzyme';
import Loading from './Loading';

describe('component - SearchBar', () => {
    let loading;
    beforeAll(() => {
        loading = shallow(<Loading />);
    });

    test('renders correctly', () => {
        expect(loading.length).toEqual(1);
    });

    test('logo present', () => {
        expect(loading.exists('#loadingLogo')).toBeTruthy();
    });
});