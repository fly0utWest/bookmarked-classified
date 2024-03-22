import { ChangeEvent } from 'react';

export type ListsButtonsProps = {
  classModifier?: string;
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
  watched?: boolean;
  liked?: boolean;
  listed?: boolean;
};

export type ArticleCardProps = {
  img: string;
  heading: string;
  description: string;
};

export type FilmLinkProps = {
  filmId?: number;
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

export type HomePageProps = {
  username: string;
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

export type ProfileFavoritesProps = {
  favourites?: number[];
};

export type ProfileWatchlistProps = {
  watchLater?: number[];
};

export type ProfileWatchedProps = {
  watched?: number[];
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
  isLoading: boolean;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  login: (formData: FormData) => Promise<void>;
}

export type AuthProviderType = {
  children: React.ReactNode;
};

export type HomeFeatureType = {
  icon: string;
  alt: string;
  text: string;
};
