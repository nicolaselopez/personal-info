import { useContext, createContext, useCallback, useMemo, useState } from 'react';

// Interface for the User object
export interface User {
  email: string;
  password: string;
}

// Interface for the AuthContext properties
export interface AuthContextProps {
  user?: User;
  isLoading?: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
}

// Create the AuthContext with default values
export const AuthContext = createContext<AuthContextProps>({
  user: undefined,
  isLoading: false,
  login: () => {},
  logout: () => {},
});

// AuthProvider component to manage authentication state and provide context
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(undefined as User | undefined);
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle user login
  const login = useCallback((email: string, password: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setUser({ email, password });
      setIsLoading(false);
    }, 1000);
  }, []);

  // Function to handle user logout
  const logout = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setUser(undefined);
      setIsLoading(false);
    }, 1000);
  }, []);

  // Memoize the context value to optimize performance
  const value = useMemo(() => ({ user, isLoading, login, logout }), [user, isLoading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
