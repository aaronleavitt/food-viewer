import React from "react";
import { Typography, Grid, Button } from "@mui/material";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const TestGrid = () => {
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
      <Typography>I am the test grid</Typography>
      <Button component={Link} to="/search" variant="outlined">
        Search
      </Button>
    </>
  );
};
export default TestGrid;
