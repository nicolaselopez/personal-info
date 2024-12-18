import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Home } from './Home';
import { AuthContext } from '../../providers/Auth';

describe('Home Component', () => {
  const user = { email: 'test@example.com', password: 'password' };

  const renderComponent = () =>
    render(
      <AuthContext.Provider value={{ user }}>
        <Home />
      </AuthContext.Provider>
    );

  it('should display the user email', () => {
    const { getByText } = renderComponent();
    expect(getByText('test@example.com')).toBeTruthy();
  });

  it('should show snackbar when avatar is pressed', () => {
    const { getByText, getByTestId } = renderComponent();
    fireEvent.press(getByTestId('avatar'));
    expect(getByText("Hey there! I'm a Snackbar.")).toBeTruthy();
  });

  it('should hide snackbar when hide action is pressed', () => {
    const { getByText, getByTestId } = renderComponent();
    fireEvent.press(getByTestId('avatar'));
    fireEvent.press(getByText('Hide'));
    expect(getByText("Hey there! I'm a Snackbar.")).not.toBeVisible();
  });
});
