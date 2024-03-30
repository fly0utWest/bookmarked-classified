import React from 'react';
import burgerLight from '../../assets/icons/burger-light.svg';
import burgerDark from '../../assets/icons/burger-dark.svg';
import { BurgerButtonProps } from '../../types';
import { useTheme } from '../../contexts/ThemeContext';

const BurgerButton: React.FC<BurgerButtonProps> = ({eventHandler}) => {
  const {theme} = useTheme();
  return (
    <button onClick={eventHandler} className='burger-button'>
      <img src={theme === 'dark' ? burgerDark : burgerLight} alt='Меню' />
    </button>
  );
};

export default BurgerButton;
