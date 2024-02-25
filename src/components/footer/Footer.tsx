import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="footer-grid">
          <ul className="footer-list">
            <li className="footer-list__element">
              <Link to="/:address">О нас</Link>
            </li>
            <li className="footer-list__element">
              <Link to="/:address">API</Link>
            </li>
            <li className="footer-list__element">
              <Link to="/:address">Подкаст</Link>
            </li>
            <li className="footer-list__element">
              <Link to="/:address">Польз. соглашение</Link>
            </li>
            <li className="footer-list__element">
              <Link to="/:address">Связаться с нами</Link>
            </li>
            <li className="footer-list__element">
              <Link to="/:address">Новости</Link>
            </li>
            <li className="footer-list__element">
              <Link to="/:address">Поддержка</Link>
            </li>
            <li className="footer-list__element">
              <Link to="/:address">Приложения</Link>
            </li>
            <li className="footer-list__element">
              <Link to="/:address">Обзор года</Link>
            </li>
          </ul>
        </nav>
        <p>
          &copy; Bookmarked. Интерфейс написан{" "}
          <a href="https://github.com/fly0utWest">вот этим чуваком</a>. API by{" "}
          <a href="https://github.com/DenisAbl">Денис</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
