import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import BottomNav from "./components/bottomNav/BottomNav";
import HomePage from "./pages/home/HomePage";
import ScrollToTop from "./pages/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage username="Никита" />}></Route>
      </Routes>
      <BottomNav />
      <Footer />
    </>
  );
}

export default App;
