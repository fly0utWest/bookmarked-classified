import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import BurgerButton from '../BurgerButton/BurgerButton';
import AsideMenu from '../AsideMenu/AsideMenu';

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

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
          <BurgerButton clickFunc={activateMenu} />
          <div className='header-nav'>
            <nav>
              <ul>
                <li className='container'>
                  <div className='header-profile'>
                    <Link
                      to='/profile/:id'
                      className='header-container__profile'
                    >
                      <img src='/assets/profile/avatar.png' alt='' />
                      Никита
                    </Link>
                  </div>
                  <div className='header-profile__dropdown'>
                    <Link to='/profile/:id'>Профиль</Link>
                    <Link to=''>Главная</Link>
                    <Link to=''>Фильмы</Link>
                    <Link to=''>Обзоры</Link>
                    <Link to=''>Смотреть позже</Link>
                    <Link to=''>Списки</Link>
                  </div>
                </li>
                <li>
                  <Link to=''>Фильмы</Link>
                </li>
                <li>
                  <Link to=''>Списки</Link>
                </li>
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
