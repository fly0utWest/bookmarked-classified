import React from "react";
import { Link } from "react-router-dom";

type buttonProps = {
  dest: string;
  src: string;
  alt: string;
};

const BottomNavButton = (props: buttonProps) => {
  return (
    <>
      <Link to={props.dest} className="bottom-nav__button">
        <img src={props.src} alt={props.alt} />
      </Link>
    </>
  );
};

export default BottomNavButton;
