import React, { useEffect } from 'react';
import BurgerButton from '../BurgerButton/BurgerButton';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import AsideNavLink from '../AsideNavLink/AsideNavLink';
import { useLocation } from 'react-router-dom';
import { BurgerMenuProps } from '../../types';
import LoginButton from '../ui/LoginButton/LoginButton';
import LogoutButton from '../ui/LogoutButton/LogoutButton';
import { useAuth } from '../../Auth/useAuth';

const BurgerMenu: React.FC<BurgerMenuProps> = ({
  updatedState,
  setUpdatedState,
}) => {
  const { user, error } = useAuth();

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
          <ProfileInfo name={user?.login} tag={user?.login} />
        )}
        <nav className='nav'>
          <AsideNavLink
            dest='/home'
            src='/assets/icons/home.svg'
            span='Главная'
          />
          <AsideNavLink
            dest='/films'
            src='/assets/icons/films.svg'
            span='Фильмы'
          />
          <AsideNavLink
            dest='/user/:id/reviews'
            src='/assets/icons/reviews.svg'
            span='Обзоры'
          />
          <AsideNavLink
            dest='/user/watchlist'
            src='/assets/icons/watchlist.svg'
            span='Смотреть позже'
          />
          <AsideNavLink
            dest='/user/favourites'
            src='/assets/icons/heart.svg'
            span='Любимые'
          />
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
