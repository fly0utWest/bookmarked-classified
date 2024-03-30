import React from 'react'
import search from '../../../assets/icons/search.svg'
import { SearchButtonProps } from '../../../types'

const SearchButton: React.FC<SearchButtonProps> = ({eventHandler}) => {
  return (
    <button className='search-button' onClick={eventHandler}>
        <img src={search} alt="" />
        <span className='search-button__label'>Поиск</span></button>
  )
}

export default SearchButton