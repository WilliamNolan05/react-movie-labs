import React from "react";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist'
import { getUpcomingMovies } from "../api/tmdb-api";


const UpcomingMoviesPage = (props) => {

  const { data, error, isPending, isError  } = useQuery({
    queryKey: ['upcoming'],
    queryFn: getUpcomingMovies,
  })
  
  if (isPending) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const playlist = movies.filter(m => m.playlist)
  localStorage.setItem('playlist', JSON.stringify(playlist))
  const addToPlaylist = (movieId) => true

   return (
      <PageTemplate
        title="Discover Movies"
        movies={movies}
        action={(movie) => {
          return <AddToPlaylistIcon movie={movie} />
        }}
      />
  );

};
export default UpcomingMoviesPage;
