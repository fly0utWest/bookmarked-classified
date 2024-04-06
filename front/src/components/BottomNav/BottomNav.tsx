import React from 'react';
import { useState, useEffect, useCallback, useRef } from 'react';
import BottomNavButton from './BottomNavButton/BottomNavButton';
import homeIcon from '../../assets/icons/home.svg';
import searchIcon from '../../assets/icons/search.svg';
import profileIcon from '../../assets/icons/user.svg';
import { useDesktopInterface } from '../../hooks/useDesktopInterface';
import { debounce } from '../../utils/debounce';
import { useAuth } from '../../contexts/AuthContext';

const BottomNav: React.FC = () => {
  const [visibility, setVisibility] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const desktopInterface = useDesktopInterface();
  const { user } = useAuth();

  const lastScrollYRef = useRef(window.scrollY);

  const controlNavbar = useCallback(
    debounce(() => {
      if (window.scrollY > lastScrollYRef.current) {
        setVisibility(false);
      } else {
        setVisibility(true);
      }
      lastScrollYRef.current = window.scrollY;
    }, 150),
    [],
  );

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  if (desktopInterface) {
    return null;
  }

  return (
    <nav className={`bottom-nav ${visibility ? '' : 'bottom-nav_hidden'}`}>
      <BottomNavButton dest={'/home'} src={homeIcon} alt={'Home link'} />
      <BottomNavButton dest={'/search'} src={searchIcon} alt={'Home link'} />
      <BottomNavButton
        dest={`${!user ? '/welcome' : `/user/${user?.login}`}`}
        src={profileIcon}
        alt={'Profile link'}
      />
    </nav>
  );
};

export default BottomNav;
