import React from "react";
import { Link } from "react-router-dom";
import Poster from "./Poster";
import { ListElementProps } from "../../../../../types";

const ListElelement: React.FC<ListElementProps> = (props) => {
  return (
    <div className="popular-month-lists-grid__element">
      <div className="container">
        {props.posterList[0]}
        {props.posterList[1]}
        {props.posterList[2]}
        {props.posterList[3]}
        {props.posterList[4]}
      </div>

      <Link to="/article/:id">
        <h3>{props.heading}</h3>
      </Link>
    </div>
  );
};

export default ListElelement;
