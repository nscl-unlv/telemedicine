import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import UserIdContextProvider from 'contexts/UserIdContext';
import SocketContextProvider from 'contexts/SocketContext';
import StreamContextProvider from 'contexts/StreamContext';
import WaitingRoom from './WaitingRoom';

describe('<WaitingRoom />', () => {
  it('render <WaitingRoom />', () => {
    render(
      <UserIdContextProvider>
        <SocketContextProvider>
          <StreamContextProvider>
            <Router>
              <WaitingRoom />
            </Router>
          </StreamContextProvider>
        </SocketContextProvider>
      </UserIdContextProvider>,
    );
    expect(screen.getByText(/The doctor will be with you/)).toBeInTheDocument();
  });
});
