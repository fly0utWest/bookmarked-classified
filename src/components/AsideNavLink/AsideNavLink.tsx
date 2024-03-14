import React from 'react';
import { NavLink } from 'react-router-dom';
import { AsideNavLinkProps } from '../../types';

const AsideNavLink: React.FC<AsideNavLinkProps> = (props) => {
  return (
    <NavLink
      to={props.dest}
      className={({ isActive }) =>
        'nav-link' + (isActive ? ' nav-link_active' : '')
      }
    >
      <img src={props.src} />
      <span>{props.span}</span>
    </NavLink>
  );
};

export default AsideNavLink;
