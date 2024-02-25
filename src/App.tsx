import React from "react";
import { Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BottomNav from "./components/BottomNav/BottomNav";
import HomePage from "./pages/HomePage/HomePage";
import FilmPage from "./pages/FilmPage/FilmPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import WatchlistPage from "./pages/WatchlistPage/WatchlistPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ScrollToTop from "./pages/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage username="Никита" />}></Route>
        <Route
          path="/profile/:id/watchlist"
          element={<WatchlistPage />}
        ></Route>
        <Route path="/film/:id" element={<FilmPage />}></Route>
        <Route path="/profile/:id" element={<ProfilePage />}></Route>
        <Route path="*" element={<ErrorPage code={404} description="странца не найдена"/>}></Route>
      </Routes>
      <BottomNav />
      <Footer />
    </>
  );
}

export default App;
