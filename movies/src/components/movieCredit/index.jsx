import React from "react";
import Typography from "@mui/material/Typography";

const MovieCredit =  ({ credit }) => {
  return (
    <>
      <Typography variant="h5" component="h3">
        {credit.name}
      </Typography>
      <Typography variant="h6" component="p">
        {credit.character}
      </Typography>
    </>
  );
};
export default MovieCredit;
