import React from 'react';
import ReactDom from 'react-dom';
import { render, screen } from '@testing-library/react';
import Calculator from './Calculator';

test('renders learn react link', () => {
  render(<Calculator />);
  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
});
