import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  test('renders the main page title', () => {
    render(<App />);
    const pageTitleElement = screen.getByText(/Create a new account/i);
    expect(pageTitleElement).toBeInTheDocument();
  });

  test('renders the company name in the header and footer', () => {
    render(<App />);
    const companyNameElement = screen.getAllByText(/Company Name/i);
    expect(companyNameElement).toHaveLength(2);
  });
});
