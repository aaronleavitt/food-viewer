import React from "react";
import SearchResults from "../searchResults";

const Search = ({ searchResults, setRestId }) => {
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
      <SearchResults
        food={cheapFood}
        title={"Cheapest food"}
        setRestId={setRestId}
      />
      <SearchResults
        food={mediumfood}
        title={"Medium food"}
        setRestId={setRestId}
      />
      <SearchResults
        food={expensivefood}
        title={"Expensive food"}
        setRestId={setRestId}
      />
    </>
  );
};
export default Search;
