import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import FilmCover from "./FilmCover/FilmCover";
import CastCard from "./CastCard/CastCard";
import ErrorPage from "../ErrorPage/ErrorPage";
import Loading from "../../components/Loading/Loading";
import { FilmReviewForm } from "./FilmReviewForm/FilmReviewForm";
import FilmBackground from "./FilmBackground/FilmBackground";

const FilmPage = () => {
  type FilmData = {
    background: string;
    cover: string;
    title: string;
    year: number;
    director: string;
    slogan: string;
    description: string;
    cast: string[];
  };

  const { id } = useParams();

  const [filmData, setFilmData] = useState<FilmData>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchFilmData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(`http://localhost:8080/movies/${id}`);
      if (!response.ok) {
        throw new Error("HTTP error!");
      }
      const json = await response.json();
      setFilmData(json);
    } catch (error: any) {
      console.error(`Fetching error: ${error.message}`);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFilmData();
  }, [id]);

  if (isLoading) {
    return (
      <div className="film__loading">
        <Loading />
      </div>
    );
  }

  if (error) {
    return <ErrorPage code={204} description="данные не были получены" />;
  }

  return (
    <div className="film">
      <FilmBackground url={filmData?.background} />
      <div className="film-page">
        <FilmCover img={filmData?.cover} />
        <section className="film-page-info">
          <div className="film-page-heading">
            <p className="film-page-heading__title">{filmData?.title}</p>
            <div className="film-page-heading__production">
              <p className="year">{filmData?.year}</p>
              <p className="director">
                Режиссёр: <span>{filmData?.director}</span>
              </p>
            </div>
          </div>
          <p className="film-page-info__slogan">{filmData?.slogan}</p>
          <p className="film-page-info__description">{filmData?.description}</p>
          <hr />
          <div className="film-page-info__cast">
            <p>Актёры</p>
            <div className="container">
              {filmData?.cast?.map((castMember) => (
                <CastCard name={castMember} />
              ))}
            </div>
          </div>
          <hr />
          <FilmReviewForm />
        </section>
      </div>
    </div>
  );
};

export default FilmPage;