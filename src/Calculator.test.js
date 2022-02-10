import React from 'react';
import ReactDom from 'react-dom';
import Calculator from './Calculator';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Calculator', () => {

  it('renders component without errors', () => {
    const div = document.createElement('div');
    ReactDom.render(<Calculator />, div);
    ReactDom.unmountComponentAtNode(div);
  });
  
  it('Must clear the number field', () => {
    const { getByTestId, getByText } = render(<Calculator />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('C'));
    expect(getByTestId('txtNumbers')).toHaveValue('0');
  });

  it('Must add 2 + 3 and get 5', () => {
    const { getByTestId, getByText } = render(<Calculator />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumbers')).toHaveValue('5');
  });

  it('Must subtract 3 - 2 and get 1', () => {
    const { getByTestId, getByText } = render(<Calculator />);
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumbers')).toHaveValue('1');
  });

  it('Must multiply 2 * 3 and get 6', () => {
    const { getByTestId, getByText } = render(<Calculator />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('*'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumbers')).toHaveValue('6');
  });

  it('Must divide 6 / 3 and get 6', () => {
    const { getByTestId, getByText } = render(<Calculator />);
    fireEvent.click(getByText('6'));
    fireEvent.click(getByText('/'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumbers')).toHaveValue('2');
  });

  it('Must add 2.5 + 3 and get 5.5', () => {
    const { getByTestId, getByText } = render(<Calculator />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('.'));
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumbers')).toHaveValue('5.5');
  });
});
