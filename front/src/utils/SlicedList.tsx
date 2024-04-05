import { SlicedListProps } from '../types';
import config from '../config/config';
import FilmLink from '../pages/HomePage/FilmLink/FilmLink';

const SlicedList: React.FC<SlicedListProps> = ({
  films,
  limit,
  linkClassModifier,
}) => {
  return (
    <>
      {films.slice(0, limit).map((film) => (
        <FilmLink
          key={film.id}
          filmId={String(film.id)}
          src={`${config.IMAGE_API}/film-covers/${film.cover}`}
          classModifier={linkClassModifier}
        />
      ))}
    </>
  );
};

export default SlicedList;
