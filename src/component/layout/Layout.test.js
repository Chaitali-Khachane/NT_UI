import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout';
import '@testing-library/jest-dom/extend-expect';

describe('<Layout>', () => {
  it('should render layout components', () => {
    render(<Layout />);
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('main')).toHaveClass('display-flex flex-grow-1');
  });
});
