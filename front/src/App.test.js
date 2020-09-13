import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App test', () => {
  test('renders app', () => {
    const app = shallow(<App />);
    expect(app.length).toEqual(1);
  });
});
