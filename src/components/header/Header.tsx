import React from "react";
import { useState } from "react";
import BurgerButton from "../burger-button/BurgerButton";
import AsideMenu from "../AsideMenu/AsideMenu";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const activateMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <header className="header">
        <BurgerButton clickFunc={activateMenu} />
        <a href="/profile" className="header__profile">
          <div></div>
        </a>
      </header>
      <AsideMenu updateState={openMenu} setUpdateState={setOpenMenu}/>
    </>
  );
};

export default Header;
