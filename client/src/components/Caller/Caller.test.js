import React from 'react';
import { render, screen } from '@testing-library/react';
// import { shallow, mount } from 'enzyme';
import StreamContextProvider from 'contexts/StreamContext';
import SocketContextProvider from 'contexts/SocketContext';
import UserIdContextProvider from 'contexts/UserIdContext'; // TEST
import Caller from './Caller';

describe('<Caller/>', () => {
  it('render <Caller/>', () => {
    render(
      <UserIdContextProvider>
        <SocketContextProvider>
          <StreamContextProvider>
            <Caller />
          </StreamContextProvider>
        </SocketContextProvider>
      </UserIdContextProvider>,
    );
    expect(screen.getByLabelText('caller-video')).toBeInTheDocument();
  });
});
