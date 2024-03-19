import React, { useEffect } from 'react';
import BurgerButton from '../BurgerButton/BurgerButton';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import homeIcon from './home.svg';
import filmsIcon from './films.svg';
import reviewsIcon from './reviews.svg';
import watchlistIcon from './watchlist.svg';
import listsIcon from './lists.svg';
import AsideNavLink from '../AsideNavLink/AsideNavLink';
import { useLocation } from 'react-router-dom';
import { BurgerMenuProps } from '../../types';
import { useFetchUser } from '../../hooks';
import LoginButton from '../ui/LoginButton/LoginButton';
import LogoutButton from '../ui/LogoutButton/LogoutButton';

const BurgerMenu: React.FC<BurgerMenuProps> = ({
  updatedState,
  setUpdatedState,
}) => {
  const { userData, isLoading, error } = useFetchUser();

  const changeInnerState = (): void => {
    setUpdatedState(!updatedState);
  };

  const location = useLocation();
  const closeMenu = (): void => {
    if (updatedState) setUpdatedState(false);
  };

  useEffect((): void => {
    closeMenu();
  }, [location]);

  return (
    <div className={`burger-menu${updatedState ? ' burger-menu_active' : ''}`}>
      <aside className='burger-menu__aside'>
        <BurgerButton eventHandler={changeInnerState} />
        {error ? (
          <LoginButton classModifier='burger-menu__login-button' />
        ) : (
          <ProfileInfo name={userData?.login} tag={userData?.login} />
        )}
        <nav className='nav'>
          <AsideNavLink dest='/home' src={homeIcon} span='Главная' />
          <AsideNavLink dest='/films' src={filmsIcon} span='Фильмы' />
          <AsideNavLink
            dest='/user/:id/reviews'
            src={reviewsIcon}
            span='Обзоры'
          />
          <AsideNavLink
            dest='/user/:id/watchlist'
            src={watchlistIcon}
            span='Смотреть позже'
          />
          <AsideNavLink dest='/user/:id/lists' src={listsIcon} span='Списки' />
        </nav>
        {error ? null : (
          <LogoutButton classModifier='burger-menu__logout-button' />
        )}
      </aside>
      <div onClick={changeInnerState} className='burger-menu__background'></div>
    </div>
  );
};

export default BurgerMenu;
