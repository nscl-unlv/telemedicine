import React from 'react';
import { render, screen } from '@testing-library/react';
import UserIdContextProvider from 'contexts/UserIdContext';
import NavMenuContextProvider from 'contexts/NavMenuContext';
import HomeDoctor from './HomeDoctor';

describe('<HomeDoctor />', () => {
  it('render <HomeDoctor />', () => {
    render(
      <UserIdContextProvider>
        <NavMenuContextProvider>
          <HomeDoctor />
        </NavMenuContextProvider>
      </UserIdContextProvider>,
    );
    expect(screen.getByText(/Dr./)).toBeInTheDocument();
  });
});
