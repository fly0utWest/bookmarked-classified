import React, { useEffect, useRef, useState } from 'react';
import { SearchInputProps } from '../../types';
import { debounce } from '../../utils/debounce';

const SearchInput: React.FC<SearchInputProps> = ({onSearch}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [input, setInput] = useState<string>('');

  const debouncedSearch = debounce(onSearch, 1000);


  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  useEffect(() =>{
    if (input.trim()) {
      debouncedSearch(input);
    }
  }, [input])

  return (
    <input
      className='search-input'
      type='search'
      value={input}
      onChange={(event) => setInput(event.target.value)}
      placeholder='Начните вводить название фильма...'
      ref={inputRef}
    />
  );
};

export default SearchInput;
