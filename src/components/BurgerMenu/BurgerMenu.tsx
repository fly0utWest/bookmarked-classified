import React, { useEffect } from 'react';
import BurgerButton from '../BurgerButton/BurgerButton';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import AsideNavLink from '../AsideNavLink/AsideNavLink';
import { useLocation } from 'react-router-dom';
import { BurgerMenuProps } from '../../types';
import LoginButton from '../ui/LoginButton/LoginButton';
import LogoutButton from '../ui/LogoutButton/LogoutButton';
import { useAuth } from '../../contexts/AuthContext';
import ThemeSwitcher from '../ui/ThemeSwitcher/ThemeSwitcher';

const BurgerMenu: React.FC<BurgerMenuProps> = ({
  updatedState,
  setUpdatedState,
}) => {
  const { user } = useAuth();

  const changeInnerState = (): void => {
    setUpdatedState(!updatedState);
  };

  const location = useLocation();
  
  const closeMenu = (): void => {
    if (updatedState) setUpdatedState(false);
  };

  useEffect(() => {
    closeMenu();

    return () => {
      document.body.classList.remove('body_noscroll');
    };
  }, [location]);

  return (
    <div className={`burger-menu${updatedState ? ' burger-menu_active' : ''}`}>
      <aside className='burger-menu__aside'>
        <BurgerButton eventHandler={changeInnerState} />
        {user ? (
          <ProfileInfo name={user?.login} tag={user?.login} />
        ) : (
          <LoginButton classModifier='burger-menu__login-button' />
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
            dest={`/user/${user?.login}/reviews`}
            src='/assets/icons/reviews.svg'
            span='Обзоры'
          />
          <AsideNavLink
            dest={`/user/${user?.login}/watched`}
            src='/assets/icons/watched.svg'
            span='Просмотренные'
          />
          <AsideNavLink
            dest={`/user/${user?.login}/favourites`}
            src='/assets/icons/heart.svg'
            span='Любимые'
          />
          <AsideNavLink
            dest={`/user/${user?.login}/watchlist`}
            src='/assets/icons/watchlist.svg'
            span='Смотреть позже'
          />
        </nav>
        {user ? (
          <LogoutButton classModifier='burger-menu__logout-button' />
        ) : null}
        <ThemeSwitcher classModifier='burger-menu__theme-switcher' />
      </aside>
      <div onClick={changeInnerState} className='burger-menu__background'></div>
    </div>
  );
};

export default BurgerMenu;
