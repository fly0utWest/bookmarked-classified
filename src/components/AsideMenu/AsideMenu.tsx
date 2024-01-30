import React, { useEffect } from "react";
import { useState } from "react";
import BurgerButton from "../burger-button/BurgerButton";
import ProfileInfo from "../profile-info/ProfileInfo";
import homeIcon from "./home.svg"; 
import filmsIcon from "./films.svg"
import likesIcon from "./heart.svg";
import reviewsIcon from "./reviews.svg";
import watchlistIcon from "./watchlist.svg";
import listsIcon from "./lists.svg";
import AsideNavLink from "../nav-link/AsideNavLink";

const AsideMenu = ({ updateState , setUpdateState}: any) => {
  const [innerState, setInnerState] = useState(false);

  useEffect(() => {
    setInnerState(updateState);
  }, [updateState]);

  useEffect(() => {
    innerState
      ? document.body.classList.add("body_noscroll")
      : document.body.classList.remove("body_noscroll");

    return () => {
      document.body.classList.remove("body_noscroll");
    };
  }, [innerState]);

  const changeInnerState = () => {
    setInnerState(!innerState);
    setUpdateState(!innerState);
  };

  return (
    <div className={`burger-menu ${innerState ? " burger-menu_active" : ""}`}>
      <aside className="burger-menu__aside">
        <BurgerButton clickFunc={changeInnerState} />
        <ProfileInfo name="Никита" tag="flyOutWest  " />
        <nav className="nav">
          <AsideNavLink dest="/home" src={homeIcon} span="Главная" />
          <AsideNavLink dest="/films" src={filmsIcon} span="Фильмы" />
          <AsideNavLink dest="/profile/reviews" src={reviewsIcon} span="Обзоры" />
          <AsideNavLink
            dest="/profile/watchlist"
            src={watchlistIcon}
            span="Смотреть позже"
          />
          <AsideNavLink
            dest="/profile/lists"
            src={listsIcon}
            span="Списки"
          />
        </nav>
      </aside>
      <div onClick={changeInnerState} className="burger-menu__background"></div>
    </div>
  );
};

export default AsideMenu;
