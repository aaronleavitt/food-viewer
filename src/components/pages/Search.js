import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import SearchResults from "../searchResults";

const Search = ({ searchResults }) => {
  const people = ["Aaron", "Tim", "James", "Hayden", "Scooter", "Bob"];

  const cheapFood = searchResults.filter((value) => {
    return value.price === "$";
  });
  const mediumfood = searchResults.filter((value) => {
    return value.price === "$$";
  });
  const expensivefood = searchResults.filter((value) => {
    return value.price === "$$$";
  });

  return (
    <>
      <SearchResults food={cheapFood} title={"Cheapest food"} />
      <SearchResults food={mediumfood} title={"Medium food"} />
      <SearchResults food={expensivefood} title={"Expensive food"} />
    </>
  );
};
export default Search;
