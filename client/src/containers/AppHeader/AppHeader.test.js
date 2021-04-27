import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import AppHeader from 'containers/AppHeader';
import NavMenuContextProvider from 'contexts/NavMenuContext';
import UserIdContextProvider from 'contexts/UserIdContext';

describe('<AppHeader/>', () => {
  it('render <AppHeader />', () => {
    render(
      <NavMenuContextProvider>
        <AppHeader />
      </NavMenuContextProvider>,
    );
    expect(screen.getByLabelText('menu')).toBeInTheDocument();
  });
});
