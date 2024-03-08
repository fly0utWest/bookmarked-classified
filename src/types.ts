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
};

export type AsideNavLinkProps = {
  dest: string;
  src: string;
  span: string;
};

export type ProfileInfoProps = {
  name: string;
  tag: string;
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
  url: string | undefined;
};

export type FilmCoverProps = {
  img: string | undefined;
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
  posterList: Array<React.ReactNode>;
};

export type PosterProps = {
  src: string;
  alt: string;
};

export type HomePageProps = {
  username: string;
};

export type ProfileListCounterProps = {
  favoritesCount?: number;
  watchlistCount?: number;
};

export type HideInterfaceProps = {
  children: React.ReactNode;
};

export type MainLayoutProps = {
  children: React.ReactNode
};