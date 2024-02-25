import React from "react";
import { NavLink } from "react-router-dom";

type LinkProps = {
  dest: string;
  src: string;
  span: string;
};

const AsideNavLink = (props: LinkProps) => {
  return (
    <NavLink to={props.dest} className={({ isActive }) => "nav-link" + (isActive ? " nav-link_active" : "")}>
      <img src={props.src} />
      <span>{props.span}</span>
    </NavLink>
  );
};

export default AsideNavLink;
