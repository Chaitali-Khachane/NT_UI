import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect';

describe('App', () => {
  beforeEach(() => {
    window.matchMedia = () => ({ matches: true });
  });

  it('should render xps-react header', () => {
    const { getByText } = render(<App />);
    expect(getByText('Getting Started')).toBeInTheDocument();
  });
});
