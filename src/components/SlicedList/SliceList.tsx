import { FilmListProps } from "../../types";
import config from "../../utils";
import FilmLink from "../../pages/HomePage/FilmLink/FilmLink";

const SliceList: React.FC<FilmListProps> = (props) => {
  return (
    <>
      {props.films.slice(0, props.limit).map((film) => (
        <FilmLink
          key={film.id}
          filmId={film.id}
          src={`${config.IMAGE_API}/film-covers/${film.cover}`}
          classModifier={props.linkClassModifier}
        />
      ))}
    </>
  );
};

export default SliceList;