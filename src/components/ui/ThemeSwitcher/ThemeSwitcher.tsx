import React, { useState } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import moon from './moon.svg';
import { ThemeSwitcherProps } from '../../../types';

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ classModifier }) => {
  const { theme, toggleTheme } = useTheme();
  const [checked, setChecked] = useState<boolean>(
    theme === 'dark' ? true : false,
  );

  return (
    <div className={`theme-switcher ${classModifier ? classModifier : ''}`}>
      <img
        className='theme-switcher__icon'
        src={moon}
        alt='Иконка темной темы'
      />
      <span className='theme-switcher__label'>{`${classModifier === 'header__theme-switcher' ? '': 'Тёмная тема'} `}</span>
      <div
        className={`checkbox ${
          checked ? 'checkbox_active' : ''
        }`}
        onClick={() => {
            toggleTheme();
            setChecked(!checked);
        }}
      >
        <div className='checkbox__slider'></div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
