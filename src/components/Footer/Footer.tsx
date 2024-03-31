import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <nav className='footer-grid'>
          <ul className='footer-list'>
            <li className='footer-list__element'>
              <Link to='/blank'>О нас</Link>
            </li>
            <li className='footer-list__element'>
              <Link to='/blank'>API</Link>
            </li>
            <li className='footer-list__element'>
              <Link to='/blank'>Подкаст</Link>
            </li>
            <li className='footer-list__element'>
              <Link to='/blank'>Польз. соглашение</Link>
            </li>
            <li className='footer-list__element'>
              <Link to='/blank'>Связаться с нами</Link>
            </li>
            <li className='footer-list__element'>
              <Link to='/blank'>Новости</Link>
            </li>
            <li className='footer-list__element'>
              <Link to='/blank'>Поддержка</Link>
            </li>
            <li className='footer-list__element'>
              <Link to='/blank'>Приложения</Link>
            </li>
            <li className='footer-list__element'>
              <Link to='/blank'>Обзор года</Link>
            </li>
          </ul>
        </nav>
        <p>
          &copy; Bookmarked.{' '}
          <Link to='https://github.com/fly0utWest'>GitHub автора</Link>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
