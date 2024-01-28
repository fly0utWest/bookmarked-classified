import React, { useState } from "react";
import { NavLink } from "react-router-dom";

type buttonProps = {
  dest: string,
  src: string,
  alt: string,
  id: string
};

const BottomNavButton = (props: buttonProps) => {

  return (
    <>
      <NavLink
        to={props.dest}
        className={({isActive}) => "bottom-nav__button" + (isActive ? " bottom-nav__button_active" : "")}
        id={props.id}
      >
        <img src={props.src} />
      </NavLink>
    </>
  );
};

export default BottomNavButton;
