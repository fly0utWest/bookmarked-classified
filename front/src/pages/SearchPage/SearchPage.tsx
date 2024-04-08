import React, { useState } from 'react';
import SearchInput from '../../components/SearchInput/SearchInput';
import { FilmData } from '../../types';
import config from '../../config/config';
import FilmCard from '../../components/FilmCard/FilmCard';
const SearchPage: React.FC = () => {
  const [films, setFilms] = useState<FilmData[]>([]);
  const [initial, setInitial] = useState<boolean>(true);

  const searchFilms = async (query: string) => {
    if (query.trim()) {
      setInitial(false);
      try {
        const response = await fetch(
          `${config.BACK_API}/search?request=${query}`,
        );
        if (response.ok) {
          const result = await response.json();
          setFilms(result);
        } else {
          setFilms([]);
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
        setFilms([]);
      }
    } else {
      setInitial(true);
      setFilms([]);
    }
  };

  return (
    <div className='search'>
      <SearchInput onSearch={searchFilms} />
      <div className='search-results'>
        {' '}
        {!initial ? (
          films?.length > 0 ? (
            films.map((film) => <FilmCard key={film.id} film={film} />)
          ) : (
            <p className='search-results__warning'>
              По вашему запросу ничего не найдно.
            </p>
          )
        ) : (
          <p className='search-results__warning'>
            Здесь появятся результаты поиска.
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
