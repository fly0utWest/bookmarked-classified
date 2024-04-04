import React from 'react'
import SearchInput from '../../components/SearchInput/SearchInput'

const SearchPage: React.FC = () => {
  return (
    <div className='search'>
    <SearchInput />
    <div className="search-results">
     Здесь появятся результаты поиска. 
    </div>
    </div>
  )
}

export default SearchPage