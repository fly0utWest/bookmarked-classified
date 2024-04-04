import React, { useEffect, useRef } from 'react';

const SearchInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return (
    <input
      className='search-input'
      type='search'
      placeholder='Начните вводить название фильма...'
      ref={inputRef}
    />
  );
};

export default SearchInput;
