import React, { useState } from "react";
import { NavLink } from "react-router-dom";

type ButtonProps = {
  dest: string,
  src: string,
  alt: string,
};

const BottomNavButton = (props: ButtonProps) => {

  return (
    <>
      <NavLink
        to={props.dest}
        className={({ isActive }) =>
          "bottom-nav__button" + (isActive ? " bottom-nav__button_active" : "")
        }
      >
        <div className="container">
          <img src={props.src} />
        </div>
      </NavLink>
    </>
  );
};

export default BottomNavButton;
