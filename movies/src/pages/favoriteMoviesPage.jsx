import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "@tanstack/react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromFavourites from "../components/cardIcons/removeFromFavourites";
import WriteReview from "../components/cardIcons/writeReview";

const FavoriteMoviesPage = () => {
  const {favorites: movieIds } = useContext(MoviesContext);

      if (!movieIds || movieIds.length === 0) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' , fontFamily: 'Arial'}}>
        <h2>Your Favorites List is Empty</h2>
        <p>Add some movies to your favorites list to see them here!</p>
      </div>
    );
  }

  // Create an array of queries and run in parallel.
  const favoriteMovieQueries = useQueries({
    queries: movieIds.map((movieId) => {
      return {
        queryKey: ['movie', { id: movieId }],
        queryFn: getMovie,
      }
    })
  });
  
  // Check if any of the parallel queries is still loading.
  const isPending = favoriteMovieQueries.find((m) => m.isPending === true);

  if (isPending) {
    return <Spinner />;
  }

  const movies = favoriteMovieQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

  const toDo = () => true;

  return (
    <PageTemplate
      title="Favorite Movies"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromFavourites movie={movie} />
            <WriteReview movie={movie} />
          </>
        );
      }}
    />
  );

};

export default FavoriteMoviesPage;
