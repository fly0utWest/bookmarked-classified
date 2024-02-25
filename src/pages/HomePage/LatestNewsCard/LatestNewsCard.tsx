import React from "react";
import { Link } from "react-router-dom";

type NewsCardProps = {
  img: string;
  heading: string;
  description: string;
};

const LatestNewsCard = (props: NewsCardProps) => {
  return (
    <article className="latest-news-card">
      <img className="latest-news-card__image" src={props.img} alt="" />
      <div className="latest-news-card__container">
        <h3 className="latest-news-card__heading">
          <Link to="/article/:id">{props.heading}</Link>
        </h3>
        <p className="latest-news-card__description">
          {props.description}
          <Link className="latest-news-card__link" to="/article/:id">
            &nbsp;Читать&nbsp;дальше
          </Link>
        </p>
      </div>
    </article>
  );
};

export default LatestNewsCard;
