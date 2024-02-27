import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './pages/MainLayout';
import HideInterface from './pages/HideInterface';
import HomePage from './pages/HomePage/HomePage';
import FilmPage from './pages/FilmPage/FilmPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import WatchlistPage from './pages/WatchlistPage/WatchlistPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ScrollToTop from './pages/ScrollToTop';

const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/home' element={<HomePage username='Никита' />}></Route>
        <Route
          path='/profile/:id/watchlist'
          element={<WatchlistPage />}
        ></Route>
        <Route path='/film/:id' element={<FilmPage />}></Route>
        <Route path='/profile/:id' element={<ProfilePage />}></Route>
        <Route
          path='*'
          element={<ErrorPage code={404} description='странца не найдена' />}
        ></Route>
        <Route
          path='/login'
          element={
            <HideInterface>
              <LoginPage />
            </HideInterface>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default App;
