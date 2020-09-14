import React from 'react';
import { shallow } from 'enzyme';
import Pagination from './Pagination';

describe('component - Pagination', () => {
    const selectPage = jest.fn();
    let pagination;
    beforeAll(() => {
        pagination = shallow(<Pagination selectPage={selectPage} total={20} offset={0} hasNext={true} hasBefore={true} />);
    });

    test('renders correctly', () => {
        expect(pagination.length).toEqual(1);
    });

    test('pagination container', () => {
        expect(pagination.exists('#paginationContainer')).toBeTruthy();
    });

    test('back button', () => {
        expect(pagination.exists('#backButtonContainer button')).toBeTruthy();
    });

    test('forward button', () => {
        expect(pagination.exists('#forwardButtonContainer button')).toBeTruthy();
    });
});