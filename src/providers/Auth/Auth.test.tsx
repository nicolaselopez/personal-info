import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { AuthProvider, AuthContext } from './Auth';

describe('AuthProvider', () => {
  it('provides user context', () => {
    const TestComponent = () => {
      const { user } = React.useContext(AuthContext);
      return <>{user ? user.email : 'No user'}</>;
    };

    const { getByText } = render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    expect(getByText('No user')).toBeTruthy();
  });

  it('logs in a user', async () => {
    const TestComponent = () => {
      const { user, login } = React.useContext(AuthContext);
      return (
        <>
          <button onPress={() => login('test@example.com', 'password')}>Login</button>
          {user ? user.email : 'No user'}
        </>
      );
    };

    const { getByText, getByRole } = render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    fireEvent.press(getByRole('button', { name: /login/i }));

    await waitFor(() => expect(getByText('test@example.com')).toBeTruthy());
  });

  it('logs out a user', async () => {
    const TestComponent = () => {
      const { user, login, logout } = React.useContext(AuthContext);
      return (
        <>
          <button onPress={() => login('test@example.com', 'password')}>Login</button>
          <button onPress={logout}>Logout</button>
          {user ? user.email : 'No user'}
        </>
      );
    };

    const { getByText, getByRole } = render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    fireEvent.press(getByRole('button', { name: /login/i }));

    await waitFor(() => expect(getByText('test@example.com')).toBeTruthy());

    fireEvent.press(getByRole('button', { name: /logout/i }));

    await waitFor(() => expect(getByText('No user')).toBeTruthy());
  });
});
