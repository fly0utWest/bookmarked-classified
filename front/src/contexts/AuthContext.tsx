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
import { SignupFormData } from '../types';
import { AuthContextType } from '../types';
import config from '../config/config';
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

  const [signupFormData, setSignupFormData] = useState<SignupFormData>({
    login: '',
    password: '',
    repeatedPassword: '',
  });

  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [signupError, setSignupError] = useState<string | null>(null);
  const [signupSuccess, setSignupSuccess] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const signupHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignupFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const login = async (formData: FormData) => {
    try {
      console.log("I'm here");
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
      const token = await response.text();
      localStorage.setItem('jwtToken', token);

      navigate('/home');
      window.location.reload();
    } catch (error: unknown) {
      console.error('Login Error:', error);
      setLoginError((error as Error).message);
    }
  };

  const signup = async (formData: SignupFormData) => {
    if (formData.password === formData.repeatedPassword) {
      try {
        const response = await fetch(`${config.BACK_API}/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (!response.ok) {
          throw new Error('Registration has failed!');
        }
        setSignupSuccess(true);
      } catch (error: unknown) {
        console.error('Registration: ', error);
        setSignupError((error as Error).message);
        setSignupSuccess(false);
      }
    } else {
      setSignupError('Passwords are not the same.');
      setSignupSuccess(false);
    }
  };

  const fetchUser = useCallback(async (signal: AbortSignal): Promise<void> => {
    try {
      const response = await fetch(`${config.BACK_API}/user`, {
        method: 'GET',
        credentials: 'include',
        signal,
        headers: {
          'x-auth': `${localStorage.getItem('jwtToken')}`,
        },
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

  const reFetchUser = () => {
    const abortController = new AbortController();
    fetchUser(abortController.signal);
  };

  useEffect(() => {
    const abortController = new AbortController();
    fetchUser(abortController.signal);

    return () => {
      abortController.abort();
    };
  }, [fetchUser, location]);

  const authData = {
    user,
    setUser,
    error,
    loginError,
    signupError,
    signupSuccess,
    isLoading,
    formData,
    signupFormData,
    setFormData,
    handleChange,
    signupHandleChange,
    login,
    signup,
    reFetchUser,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};
