import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Settings } from './Settings';
import { AuthContext } from '../../providers/Auth';
import { NavigationContainer } from '@react-navigation/native';

describe('Settings', () => {
  const mockLogout = jest.fn();

  const mockAuthContext = {
    user: { email: 'test@example.com' },
    logout: mockLogout,
    isLoading: false,
  };

  const renderComponent = () =>
    render(
      <AuthContext.Provider value={mockAuthContext}>
        <NavigationContainer>
          <Settings />
        </NavigationContainer>
      </AuthContext.Provider>
    );

  it('renders user email', () => {
    const { getByText } = renderComponent();
    expect(getByText('User email:')).toBeTruthy();
    expect(getByText('test@example.com')).toBeTruthy();
  });

  it('calls logout function when logout button is pressed', () => {
    const { getByTestId } = renderComponent();
    fireEvent.press(getByTestId('logout-button'));
    expect(mockLogout).toHaveBeenCalled();
  });
});
