import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import StreamContextProvider from 'contexts/StreamContext';
import SocketContextProvider from 'contexts/SocketContext';
import UserIdContextProvider from 'contexts/UserIdContext'; // TEST
import ChatRoom from 'views/ChatRoom';
import ChatRoomMenu from './ChatRoomMenu';

describe('<ChatRoomMenu />', () => {
  it('render <ChatRoomMenu/>', () => {
    render(
      <UserIdContextProvider>
        <SocketContextProvider>
          <StreamContextProvider>
            <Router>
              <ChatRoom>
                <ChatRoomMenu />
              </ChatRoom>
            </Router>
          </StreamContextProvider>
        </SocketContextProvider>
      </UserIdContextProvider>,
    );
    expect(screen.getByText('Patient Information')).toBeInTheDocument();
  });
});
