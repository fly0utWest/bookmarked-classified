import React from 'react';
import { SearchInputProps } from '../../types';

const SearchInput: React.FC<SearchInputProps> = ({classModifier, innerState}) => {
  return (
    <input
      className={`search-input ${classModifier ? classModifier : ''} ${innerState ? 'search-input_active' : ""}`}
      type='search'
      placeholder='Начните вводить название фильма...'
    />
  );
};

export default SearchInput;
