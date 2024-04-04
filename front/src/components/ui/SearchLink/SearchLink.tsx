import React from 'react';
import search from '../../../assets/icons/search.svg';
import { NavLink } from 'react-router-dom';

const SearchLink: React.FC = () => {
  return (
    <NavLink
      to='/search'
      className={({ isActive }) =>
        `search-link${isActive ? ' search-link_active' : ''}`
      }
    >
      <img src={search} alt='' />
      <span className='search-link__label'>Поиск</span>
    </NavLink>
  );
};

export default SearchLink;
