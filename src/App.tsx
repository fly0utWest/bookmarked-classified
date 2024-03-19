import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './pages/MainLayout';
import HideInterface from './pages/HideInterface';
import HomePage from './pages/HomePage/HomePage';
import FilmPage from './pages/FilmPage/FilmPage';
import ProfilePageById from './pages/ProfilePage/ProfilePageById';
import WatchlistPage from './pages/WatchlistPage/WatchlistPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import LoginPage from './pages/LoginPage/LoginPage';
import OnBoarding from './pages/OnBoarding/OnBoarding';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import SearchPage from './pages/SearchPage/SearchPage';
import ScrollToTop from './pages/ScrollToTop';
import ProfilePageAuth from './pages/ProfilePage/ProfilePageAuth';

const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
        <Routes>
          <Route path='/' element={<Navigate replace to='/home' />}></Route>
          <Route
            path='/home'
            element={
              <MainLayout>
                <HomePage username='Никита' />
              </MainLayout>
            }
          ></Route>
          <Route
            path='/user/:id/watchlist'
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
            path='/user/:id'
            element={
              <MainLayout>
                <ProfilePageById />
              </MainLayout>
            }
          ></Route>
          <Route
            path='/user'
            element={
              <MainLayout>
                <ProfilePageAuth />
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
          <Route
            path='/welcome'
            element={
              <HideInterface>
                <OnBoarding />
              </HideInterface>
            }
          ></Route>
          <Route
          path="/article/:id"
            element={
              <MainLayout>
                <ArticlePage />
              </MainLayout>
            }
          ></Route>
          <Route path="/search" element={
            <MainLayout>
              <SearchPage />
            </MainLayout>
          }></Route>
        </Routes>
    </>
  );
};

export default App;
