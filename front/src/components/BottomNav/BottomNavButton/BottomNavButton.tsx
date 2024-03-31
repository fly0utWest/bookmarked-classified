import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ButtonProps } from "../../../types";

const BottomNavButton: React.FC<ButtonProps> = (props) => {
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
