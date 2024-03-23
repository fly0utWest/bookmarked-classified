import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ChangeEvent,
} from 'react';
import { User } from '../types';
import { FormData } from '../types';
import { AuthContextType } from '../types';
import config from '../utils';
import { AuthProviderType } from '../types';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within a AuthProvider');
  return context;
}

export const AuthProvider: React.FC<AuthProviderType> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({
    login: '',
    password: '',
  });

  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loginError, setLoginError] = useState<string | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const login = async (formData: FormData) => {
    try {
      const response = await fetch(`${config.BACK_API}/auth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Login failed.');
      }
      navigate('/home');
      window.location.reload();
    } catch (error: unknown) {
      console.error('Login Error:', error);
      setLoginError((error as Error).message);
    }
  };

  const fetchUser = useCallback(async () => {
    try {
      const response = await fetch(`${config.BACK_API}/user`, {
        method: 'GET',
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Fetching user failed.');
      }
      const user: User = await response.json();
      setUser(user);
    } catch (error: unknown) {
      setError((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser, location]);

  const authData = {
    user,
    setUser,
    error,
    loginError,
    isLoading,
    formData,
    setFormData,
    handleChange,
    login,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};
