import React from 'react';
import { NavLink } from 'react-router-dom';
import { AsideNavLinkProps } from '../../types';

const AsideNavLink: React.FC<AsideNavLinkProps> = ({dest, src, span}) => {
  return (
    <NavLink
      to={dest}
      className={({ isActive }) =>
        'nav-link' + (isActive ? ' nav-link_active' : '')
      }
    >
      <img className='nav-link__icon' src={src} />
      <span className='nav-link__label'>{span}</span>
    </NavLink>
  );
};

export default AsideNavLink;
