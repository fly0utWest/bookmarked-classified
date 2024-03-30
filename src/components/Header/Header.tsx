import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import BurgerButton from '../BurgerButton/BurgerButton';
import AsideMenu from '../BurgerMenu/BurgerMenu';
import { useAuth } from '../../contexts/AuthContext';
import LoginButton from '../ui/LoginButton/LoginButton';
import LogoutButton from '../ui/LogoutButton/LogoutButton';
import ThemeSwitcher from '../ui/ThemeSwitcher/ThemeSwitcher';
import { useTheme } from '../../contexts/ThemeContext';
import ProfileAvatar from '../ui/ProfileAvatar/ProfileAvatar';
import { useDesktopInterface } from '../../hooks/useDesktopInterface';

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const { user } = useAuth();
  const { theme } = useTheme();
  const isDesktopInterface = useDesktopInterface();

  useEffect(() => {
    document.body.classList.toggle('body_noscroll', openMenu);
  }, [openMenu]);

  const activateMenu = (): void => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <header className='header'>
        <div className='header-container'>
          <Link to='/home' className='header-container__logo'>
            <img
              src={`${
                theme === 'dark' ? '/assets/logo.png' : '/assets/logo-dark.png'
              }`}
              alt=''
            />
          </Link>
          {isDesktopInterface ? null : (
            <BurgerButton eventHandler={activateMenu} />
          )}
          {isDesktopInterface ? (
            <div className='header-nav'>
              <nav>
                <ul>
                  <li>
                    <Link to='/catalogue'>Фильмы</Link>
                  </li>
                  {user ? (
                    <>
                      <li className='container'>
                        <div className='header-profile'>
                          <Link
                            to={`/user/${user.login}`}
                            className='header-container__profile'
                          >
                            <ProfileAvatar
                              username={user?.login}
                              classModifier='header-profile__profile-avatar'
                            />
                            {user?.login}
                          </Link>
                        </div>
                        <div className='header-profile__dropdown'>
                          <Link to={`/user/${user?.login}`}>Профиль</Link>
                          <Link to='/home'>Главная</Link>
                          <Link to={`/user/${user?.login}/reviews`}>
                            Обзоры
                          </Link>
                          <Link to={`/user/${user?.login}/watchlist`}>
                            Смотреть позже
                          </Link>
                          <Link to={`/user/${user?.login}/favourites`}>
                            Любимые
                          </Link>
                          <Link to={`/user/${user?.login}/watched`}>
                            Просмотренные
                          </Link>
                        </div>
                      </li>
                    </>
                  ) : (
                    <LoginButton classModifier='header-nav__login-button' />
                  )}
                  {user ? (
                    <>
                      <LogoutButton classModifier='header-profile__logout-button' />
                    </>
                  ) : null}
                  <ThemeSwitcher classModifier='header__theme-switcher' />
                </ul>
              </nav>
            </div>
          ) : null}
        </div>
      </header>
      {isDesktopInterface ? null : (
        <AsideMenu updatedState={openMenu} setUpdatedState={setOpenMenu} />
      )}
    </>
  );
};

export default Header;
