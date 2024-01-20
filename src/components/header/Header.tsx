import React from "react";
import { useState } from "react";
import burgerButton from "./burger.svg"

const Header = () => {
    return (
      <header className="header">
        <button className="header__burger">
          <img src={burgerButton} alt="Burger menu button" />
        </button>
        <a href="/profile" className="header__profile">
            <div></div>
        </a>
      </header>
    );
}

export default Header;