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
        <Route
          path='/home'
          element={
            <MainLayout>
              <HomePage username='Никита' />
            </MainLayout>
          }
        ></Route>
        <Route
          path='/profile/:id/watchlist'
          element={
            <MainLayout>
              <WatchlistPage />
            </MainLayout>
          }
        ></Route>
        <Route
          path='/film/:id'
          element={
            <MainLayout>
              <FilmPage />
            </MainLayout>
          }
        ></Route>
        <Route
          path='/profile/:id'
          element={
            <MainLayout>
              <ProfilePage />
            </MainLayout>
          }
        ></Route>
        <Route
          path='*'
          element={
            <MainLayout>
              <ErrorPage code={404} description='странца не найдена' />
            </MainLayout>
          }
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
