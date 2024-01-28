import React from "react";
import { Link } from "react-router-dom";
import Poster from "./Poster";
import bojack from "../../bojack.jpg";
import queensGambit from "../../queens-gambit.webp";

type ListProps = {
  heading: string;
};

const ListElelement = (props: ListProps) => {
  return (
    <div className="popular-month-lists-grid__element">
      <div className="container">
        <Link to="/article/:id">
          <Poster src={bojack} alt="Конь БоДжек"></Poster>
          <Poster src={queensGambit} alt="Ход королевы"></Poster>
          <Poster src={bojack} alt="Конь БоДжек"></Poster>
        </Link>
      </div>

      <Link to="/article/:id">
        <h3>{props.heading}</h3>
      </Link>
    </div>
  );
};

export default ListElelement;
