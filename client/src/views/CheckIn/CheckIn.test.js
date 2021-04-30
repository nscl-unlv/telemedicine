import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CheckIn from './CheckIn';

describe('<CheckIn />', () => {
  it('render <CheckIn />', () => {
    render(
      <Router>
        <CheckIn />
      </Router>,
    );
    expect(
      screen.getByRole('button', { name: 'Check In' }),
    ).toBeInTheDocument();
  });
});
