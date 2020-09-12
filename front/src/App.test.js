import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders mercado libre header logo', () => {
  const { getByAltText } = render(<App />);
  const mercadoLibreLogo = getByAltText(/Mercado Libre Header Logo/i);
  expect(mercadoLibreLogo).toBeInTheDocument();
});
