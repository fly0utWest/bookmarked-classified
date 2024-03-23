import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import BurgerButton from '../BurgerButton/BurgerButton';
import AsideMenu from '../BurgerMenu/BurgerMenu';
import { useAuth } from '../../contexts/AuthContext';
import LoginButton from '../ui/LoginButton/LoginButton';
import LogoutButton from '../ui/LogoutButton/LogoutButton';
import ThemeSwitcher from '../ui/ThemeSwitcher/ThemeSwitcher';

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const { user, error } = useAuth();

  useEffect(() => {
    document.body.classList.toggle('body_noscroll', openMenu);

    return (): void => {
      document.body.classList.remove('body_noscroll');
    };
  }, [openMenu]);

  const activateMenu = (): void => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <header className='header'>
        <div className='header-container'>
          <Link to='/home' className='header-container__logo'>
            <img src='/assets/logo.png' alt='' />
          </Link>
          <BurgerButton eventHandler={activateMenu} />
          <div className='header-nav'>
            <nav>
              <ul>
                {user && !error ? (
                  <>
                    <li className='container'>
                      <div className='header-profile'>
                        <Link to='/user' className='header-container__profile'>
                          <img src='/assets/profile/avatar.png' alt='' />
                          {}
                        </Link>
                      </div>
                      <div className='header-profile__dropdown'>
                        <Link to='/user'>Профиль</Link>
                        <Link to='/home'>Главная</Link>
                        <Link to='/catalogue'>Фильмы</Link>
                        <Link to='/user/reviews'>Обзоры</Link>
                        <Link to='/user/watchlist'>Смотреть позже</Link>
                        <Link to='/user/favourites'>Любимые</Link>
                      </div>
                    </li>
                    <li>
                      <Link to=''>Фильмы</Link>
                    </li>
                    <li>
                      <Link to=''>Списки</Link>
                    </li>
                  </>
                ) : (
                  <LoginButton classModifier='header-nav__login-button' />
                )}
                {error ? null : (
                  <>
                    <LogoutButton classModifier='header-profile__logout-button' />
                  </>
                )}
                <ThemeSwitcher classModifier='header__theme-switcher' />
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <AsideMenu updatedState={openMenu} setUpdatedState={setOpenMenu} />
    </>
  );
};

export default Header;
