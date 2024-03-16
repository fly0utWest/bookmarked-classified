import React from "react";
import { Link } from "react-router-dom";
import { ListElementProps } from "../../../../../types";
import FilmList from "../../../../../components/FilmList/FilmList";
import ErrorPage from "../../../../ErrorPage/ErrorPage";
import Loading from "../../../../../components/Loading/Loading";
import { useFetch } from "../../../../../hooks";
import config from "../../../../../utils";
import { FilmData } from "../../../../../types";

const ListElelement: React.FC<ListElementProps> = (props) => {
    const { data: filmList, isLoading, error } = useFetch<FilmData[]>(props.baseUrl);

  if (error) {
    return <ErrorPage code={204} description='данные не были получены' />;
  }
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="popular-month-lists-grid__element">
      <div className="container">
        <FilmList films={filmList!} limit={6}/>
      </div>
        <h3>{props.heading}</h3>
    </div>
  );
};

export default ListElelement;
