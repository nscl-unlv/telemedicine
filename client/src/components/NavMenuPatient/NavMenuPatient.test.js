// NavMenuPatient.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavMenuContextProvider from 'contexts/NavMenuContext';
import NavMenuPatient from './NavMenuPatient';

describe('<NavMenuPatient/>', () => {
  it('render <NavMenuPatient/>', () => {
    render(
      <NavMenuContextProvider>
        <Router>
          <NavMenuPatient />
        </Router>
      </NavMenuContextProvider>,
    );

    const link = screen.getByText('Waiting Room');
    expect(link).toBeInTheDocument();
  });
});
