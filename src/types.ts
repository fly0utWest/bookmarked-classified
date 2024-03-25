import { Sign } from 'crypto';
import { ChangeEvent, ReactNode } from 'react';

export type ListsButtonsProps = {
  filmId?: string;
  classModifier?: string;
  listStatus: {
    watched: boolean;
    liked: boolean;
    watchLater: boolean;
  };
};

export type ButtonProps = {
  dest: string;
  src: string;
  alt: string;
};

export type BurgerMenuProps = {
  updatedState: boolean;
  setUpdatedState: (state: boolean) => void;
};

export type BurgerButtonProps = {
  eventHandler: () => void;
};

export type FilmData = {
  id: number;
  background: string;
  cover: string;
  title: string;
  year: number;
  director: string;
  slogan: string;
  description: string;
  cast: string[];
  studio: string;
  rating: number;
};

export type AsideNavLinkProps = {
  dest: string;
  src: string;
  span: string;
};

export type ProfileInfoProps = {
  name?: string;
  tag?: string;
  avatar?: string;
};

export type ArticleProps = {
  title?: string;
  cover?: string;
  content?: string;
  date?: string;
};

export type ErrorPageProps = {
  code: number;
  description: string;
};

export type CastCardProps = {
  name: string;
};

export type FilmBackgroundsProps = {
  url?: string;
};

export type FilmCoverProps = {
  filmId?: string;
  img?: string;
};

export type ArticleCardProps = {
  img: string;
  heading: string;
  description: string;
};

export type FilmLinkProps = {
  filmId?: string;
  src: string;
  classModifier?: string;
};

export type NewsCardProps = {
  img: string;
  heading: string;
  description: string;
};

export type ListElementProps = {
  heading: string;
  baseUrl: string;
};

export type PosterProps = {
  src: string;
  alt: string;
};

export type ProfileListCounterProps = {
  favoritesCount?: number[];
  watchlistCount?: number[];
};

export type HideInterfaceProps = {
  children: React.ReactNode;
};

export type MainLayoutProps = {
  children: React.ReactNode;
};

export type ErrorResponse = {
  message: string;
};

export type User = {
  id: number;
  login: string;
  password: string;
  bio: string;
  favourites: number[];
  watchLater: number[];
  watched: number[];
  reviews: number[];
};

export type ProfileListProps = {
  listArray?: number[];
};

export type ProfileReviewsProps = {
  reviews?: number[];
};

export interface UseFetchResult<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

export interface Config {
  BACK_API: string;
  IMAGE_API: string;
}

export type SlicedListProps = {
  films: FilmData[];
  limit?: number;
  linkClassModifier?: string;
};

export interface FormData {
  login: string;
  password: string;
}

export interface SignupFormData extends FormData {
  repeatedPassword: string;
}

export type ProfilePageProps = {
  data: User | null;
};

export type ClassModifier = {
  classModifier?: string;
};

export interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  error: string | null;
  loginError: string | null;
  signupError: string | null;
  isLoading: boolean;
  formData: FormData;
  signupFormData: SignupFormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  signupHandleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  login: (formData: FormData) => Promise<void>;
  signup: (formData: SignupFormData) => Promise<void>;
  reFetchUser: () => void;
}

export type AuthProviderType = {
  children: React.ReactNode;
};

export type HomeFeatureType = {
  icon: string;
  alt: string;
  text: string;
};

export type ListPageProps = {
  heading?: string;
  type?: ListPageType;
};

export enum ListType {
  Favourites = 'like',
  WatchLater = 'watch-later',
  Watched = 'watched',
}

export enum ListPageType {
  Favourites = 'favourites',
  WatchLater = 'watchlist',
  Watched = 'watched',
  Catalogue = 'catalogue',
}

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export type ThemeProviderProps = {
  children: ReactNode;
};

export type ThemeSwitcherProps = {
  classModifier?: string;
};

export type ProfileAvatarProps = {
  username?: string;
  classModifier?: string;
};

export type DropdownMenuProps = {
  children?: ReactNode;
  placeholder: string;
  classModifier?: string
}