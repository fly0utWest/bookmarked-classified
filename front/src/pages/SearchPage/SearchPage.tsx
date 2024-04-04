import React, {useState} from 'react';
import SearchInput from '../../components/SearchInput/SearchInput';
import { FilmData } from '../../types';
const SearchPage: React.FC = () => {
    const [films, setFilms] = useState<FilmData[]>([]);

    const searchFilms = async (query: string) => {
      if (!query.trim()) return;

      try {
        const response = await fetch(`/search?request=${query}`);
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
    };
  
  return (
    <div className='search'>
      <SearchInput onSearch={searchFilms} />
      <div className='search-results'>
        {' '}
        {films?.length > 0 ? (
          films.map((film) => <div key={film.id}>{film.title}</div>)
        ) : (
          <div>Здесь появятся результаты поиска.</div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
