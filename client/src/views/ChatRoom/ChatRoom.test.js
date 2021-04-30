import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import UserIdContextProvider from 'contexts/UserIdContext';
import SocketContextProvider from 'contexts/SocketContext';
import StreamContextProvider from 'contexts/StreamContext';
import ChatRoom from './ChatRoom';

describe('<ChatRoom />', () => {
  it('render <ChatRoom />', () => {
    render(
      <UserIdContextProvider>
        <SocketContextProvider>
          <StreamContextProvider>
            <Router>
              <ChatRoom />
            </Router>
          </StreamContextProvider>
        </SocketContextProvider>
      </UserIdContextProvider>,
    );
    expect(
      screen.getByRole('button', { name: 'End Call' }),
    ).toBeInTheDocument();
  });
});
