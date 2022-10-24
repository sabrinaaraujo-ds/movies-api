import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import NavBar from "../components/NavBar";
import MoviePage from "../pages/MoviePage";
import Home from "../pages/Home";
import { MovieProvider } from "../Context";
import WatchList from "../pages/WatchList";

export default (
  <>
    <MovieProvider>
      <NavBar />
      <App>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/comic/:id" element={<MoviePage />} />
          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </App>
    </MovieProvider>
  </>
);
