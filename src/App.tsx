import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import BottomNav from "./components/bottomNav/BottomNav";
import HomePage from "./pages/home/HomePage";
import FilmPage from "./pages/film-page/FilmPage";
import Watchlist from "./pages/watchlist/Watchlist";
import ScrollToTop from "./pages/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage username="Никита" />}></Route>
        <Route path="/profile/:id/watchlist" element={<Watchlist />}></Route>
        <Route path="/film/:id" element={<FilmPage title="guogigi" />}></Route>
      </Routes>
      <BottomNav />
      <Footer />
    </>
  );
}

export default App;
