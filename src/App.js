import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/reservations" element={<BookingPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
