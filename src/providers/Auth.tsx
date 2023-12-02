import { useContext, createContext, useCallback, useMemo, useState } from 'react';

export interface User {
  email: string;
  password: string;
}

export interface AuthContextProps {
  user?: User;
  isLoading?: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  user: undefined,
  isLoading: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(undefined as User | undefined);
  const [isLoading, setIsLoading] = useState(false);

  const login = useCallback((email: string, password: string) => {
    // login logic
    setIsLoading(true);
    setTimeout(() => {
      setUser({ email, password });
      setIsLoading(false);
    }, 1000);
  }, []);

  const logout = useCallback(() => {
    // logout logic
    setIsLoading(true);
    setTimeout(() => {
      setUser(undefined);
      setIsLoading(false);
    }, 1000);
  }, []);

  const value = useMemo(() => ({ user, isLoading, login, logout }), [user, isLoading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
