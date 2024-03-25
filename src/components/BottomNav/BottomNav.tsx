import React from 'react';
import { useState, useEffect } from 'react';
import BottomNavButton from './BottomNavButton/BottomNavButton';
import homeIcon from './BottomNavButton/home.svg';
import searchIcon from './BottomNavButton/search.svg';
import profileIcon from './BottomNavButton/user.svg';
import { useDesktopInterface } from '../../hooks/useDesktopInterface';
import { debounce } from '../../utils/debounce';
import { useAuth } from '../../contexts/AuthContext';

const BottomNav: React.FC = () => {
  const [visibility, setVisibility] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const desktopInterface = useDesktopInterface();
  const {user} = useAuth();

  const controlNavbar = debounce(() => {
    if (window.scrollY > lastScrollY) {
      setVisibility(false);
    } else {
      setVisibility(true);
    }
    setLastScrollY(window.scrollY);
  }, 150);

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
      <BottomNavButton dest={`${!user ? '/welcome' : `/user/${user?.login}`}`} src={profileIcon} alt={'Profile link'} />
    </nav>
  );
};

export default BottomNav;
