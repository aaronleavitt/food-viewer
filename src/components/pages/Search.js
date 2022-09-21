import React from "react";
import { Typography, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6} md={2}>
          Hi
        </Grid>
        <Grid item xs={6} md={2}>
          Hello
        </Grid>
        <Grid item xs={6} md={2}>
          Howdy
        </Grid>
        <Grid item xs={6} md={2}>
          Hola
        </Grid>
        <Grid item xs={6} md={2}>
          Hey
        </Grid>
        <Grid item xs={6} md={2}>
          Hay
        </Grid>
      </Grid>
      <Typography>I'm the search page</Typography>
      <Button component={Link} to="/" variant="outlined">
        Search
      </Button>
    </>
  );
};
export default Search;
