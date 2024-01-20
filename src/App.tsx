import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import BottomNav from "./components/bottomNav/BottomNav";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage />}></Route>
      </Routes>
      <BottomNav />
    </>
  );
}

export default App;
