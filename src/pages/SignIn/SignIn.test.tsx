import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { SignIn } from './SignIn';
import { AuthContext } from '../providers/Auth';

describe('SignIn', () => {
  const mockLogin = jest.fn();
  const mockContextValue = {
    login: mockLogin,
    isLoading: false,
  };

  it('renders correctly', () => {
    const { getByText } = render(
      <AuthContext.Provider value={mockContextValue}>
        <SignIn />
      </AuthContext.Provider>
    );
    expect(getByText('Sign In')).toBeTruthy();
  });

  it('validates email and password', async () => {
    const { getByText, getByLabelText } = render(
      <AuthContext.Provider value={mockContextValue}>
        <SignIn />
      </AuthContext.Provider>
    );

    fireEvent.changeText(getByLabelText('Email'), 'invalid-email');
    fireEvent.changeText(getByLabelText('Password'), 'short');
    fireEvent.press(getByText('Login'));

    await waitFor(() => {
      expect(getByText('Invalid email')).toBeTruthy();
      expect(getByText('Password must be at least 8 characters')).toBeTruthy();
    });
  });

  it('calls login function on valid input', async () => {
    const { getByText, getByLabelText } = render(
      <AuthContext.Provider value={mockContextValue}>
        <SignIn />
      </AuthContext.Provider>
    );

    fireEvent.changeText(getByLabelText('Email'), 'test@example.com');
    fireEvent.changeText(getByLabelText('Password'), 'password123');
    fireEvent.press(getByText('Login'));

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith('test@example.com', 'password123');
    });
  });
});
