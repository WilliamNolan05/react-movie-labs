import React from "react";
import Typography from "@mui/material/Typography";

const PersonDetails =  ({ person }) => {
  return (
    <>
      <Typography variant="h5" component="h3">
        {person.name}
      </Typography>
      <Typography variant="h6" component="p">
        {person.biography}
      </Typography>
    </>
  );
};
export default PersonDetails;
