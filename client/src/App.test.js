import React from 'react';
// import { mount, shallow } from 'enzyme';
import {
  cleanup, fireEvent, render, screen,
} from '@testing-library/react';
import App from './App';
// import AppBody from './containers/AppBody';

describe('<App/>', () => {
  it('render <App /> as a patient', () => {
    render(<App />);
    expect(screen.getByText('Telemedicine')).toBeInTheDocument();
  });

  it('renders <App/> as a doctor', () => {
    render(<App isDoctor />);
    const toggle = screen.getByRole('checkbox');
    fireEvent.click(toggle);
    expect(screen.getByText(/Welcome Dr./)).toBeInTheDocument();
  });
});
