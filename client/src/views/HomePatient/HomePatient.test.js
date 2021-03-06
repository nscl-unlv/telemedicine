import React from 'react';
import { render, screen } from '@testing-library/react';
import UserIdContextProvider from 'contexts/UserIdContext';
import NavMenuContextProvider from 'contexts/NavMenuContext';
import HomePatient from './HomePatient';

describe('<HomePatient />', () => {
  it('render <HomePatient />', () => {
    render(
      <UserIdContextProvider>
        <NavMenuContextProvider>
          <HomePatient />
        </NavMenuContextProvider>
      </UserIdContextProvider>,
    );
    expect(screen.getByText(/Welcome/)).toBeInTheDocument();
  });
});
