import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import AddIcon from '@mui/icons-material/Add';

const AddToWatchListIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToWatchList = (e) => {
    e.preventDefault();
    context.addToWatchList(movie);
  };

  return (
    <IconButton aria-label="add to watchlist" onClick={handleAddToWatchList}>
      <AddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToWatchListIcon;
