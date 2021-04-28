// NavMenuDoctor.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavMenuContextProvider from 'contexts/NavMenuContext';
import NavMenuDoctor from './NavMenuDoctor';

describe('<NavMenuDoctor/>', () => {
  it('render <NavMenuDoctor/>', () => {
    render(
      <NavMenuContextProvider>
        <Router>
          <NavMenuDoctor />
        </Router>
      </NavMenuContextProvider>,
    );

    const link = screen.getByText('Call Room');
    expect(link).toBeInTheDocument();
  });
});
