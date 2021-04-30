import React from 'react';
import { render, screen } from '@testing-library/react';
import AppBody from 'containers/AppBody';
import UserIdContextProvider from 'contexts/UserIdContext';
import NavMenuContextProvider from 'contexts/NavMenuContext';
import HomePatient from './HomePatient';

describe('<HomePatient />', () => {
  it('render <HomePatient />', () => {
    render(
      <UserIdContextProvider>
        <NavMenuContextProvider>
          <AppBody>
            <HomePatient />
          </AppBody>
        </NavMenuContextProvider>
      </UserIdContextProvider>,
    );
    expect(screen.getByText(/Welcome/)).toBeInTheDocument();
  });
});
