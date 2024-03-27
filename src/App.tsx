import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './pages/MainLayout';
import HideInterface from './pages/HideInterface';
import Loading from './components/Loading/Loading';
import ScrollToTop from './pages/ScrollToTop';
import { ListPageType } from './types';

const RegistrationPage = lazy(
  () => import('./pages/LoginPage/RegistrationPage/RegistrationPage'),
);
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const FilmPage = lazy(() => import('./pages/FilmPage/FilmPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage/ProfilePage'));
const ListPage = lazy(() => import('./pages/ListPage/ListPage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const OnBoarding = lazy(() => import('./pages/OnBoarding/OnBoarding'));
const ArticlePage = lazy(() => import('./pages/ArticlePage/ArticlePage'));
const SearchPage = lazy(() => import('./pages/SearchPage/SearchPage'));

const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<Navigate replace to='/home' />}></Route>
          <Route
            path='/home'
            element={
              <MainLayout>
                <HomePage />
              </MainLayout>
            }
          ></Route>
          <Route
            path='/user/:id/favourites'
            element={
              <MainLayout>
                <ListPage
                  heading='Любимые фильмы'
                  type={ListPageType.Favourites}
                />
              </MainLayout>
            }
          ></Route>
          <Route
            path='/user/:id/watchlist'
            element={
              <MainLayout>
                <ListPage
                  heading='Смотреть позже'
                  type={ListPageType.WatchLater}
                />
              </MainLayout>
            }
          ></Route>
          <Route
            path='/user/:id/watched'
            element={
              <MainLayout>
                <ListPage
                  heading='Просмотренные'
                  type={ListPageType.Watched}
                />
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
          <Route
            path='/registration'
            element={
              <HideInterface>
                <RegistrationPage />
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
            path='/article/:id'
            element={
              <MainLayout>
                <ArticlePage />
              </MainLayout>
            }
          ></Route>
          <Route
            path='/search'
            element={
              <MainLayout>
                <SearchPage />
              </MainLayout>
            }
          ></Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
