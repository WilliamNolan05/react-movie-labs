import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getTrendingToday } from "../api/tmdb-api";

const TrendingTodayPage = (props) => {
  const [movies, setMovies] = useState([]);
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))

  const addToFavorites = (movieId) => {
    const updatedMovies = movies.map((m) =>
      m.id === movieId ? { ...m, favorite: true } : m
    );
    setMovies(updatedMovies);
  };

 useEffect(() => {
    getTrendingToday().then(movies => {
      setMovies(movies);
    });
  }, []);


  return (
    <PageTemplate
      title='Trending Today'
      movies={movies}
      selectFavorite={addToFavorites}
    />
  );
};
export default TrendingTodayPage;
