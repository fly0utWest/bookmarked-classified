import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BottomNavButtonProps } from '../../../types';

const BottomNavButton: React.FC<BottomNavButtonProps> = ({
  dest,
  src,
  alt,
}) => {
  return (
    <>
      <NavLink
        to={dest}
        className={({ isActive }) =>
          'bottom-nav__button' + (isActive ? ' bottom-nav__button_active' : '')
        }
      >
        <div className='container'>
          <img src={src} alt={alt} />
        </div>
      </NavLink>
    </>
  );
};

export default BottomNavButton;
