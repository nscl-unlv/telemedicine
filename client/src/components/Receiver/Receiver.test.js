// Reciever.test.js

import React, { createContext, useState } from 'react';
import { render } from '@testing-library/react';
import StreamContextProvider from 'contexts/StreamContext';
import SocketContextProvider from 'contexts/SocketContext';
import UserIdContextProvider from 'contexts/UserIdContext'; // TEST
import Receiver from './Receiver';

describe('<Receiver/>', () => {
  it('render <Receiver/>', () => {
    render(
      <UserIdContextProvider>
        <SocketContextProvider>
          <StreamContextProvider>
            <Receiver />
          </StreamContextProvider>
        </SocketContextProvider>
      </UserIdContextProvider>,
    );
  });
});
