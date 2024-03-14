import React from 'react'

const SearchPage: React.FC = () => {
  return (
    <div className='search'>
        <input className="search__input" type="search" placeholder='Начните вводить название фильма...' />
    </div>
  )
}

export default SearchPage