import React, { useState, useEffect } from "react";
import { Map, Marker } from "pigeon-maps";
import { Typography } from "@mui/material";

const Maps = ({ restId }) => {
  const [results, setResults] = useState([]);
  const searchApi = async (term) => {
    const location = "24416";
    const response = await fetch(
      `/api/yelpSearch?term=${term}&location=${location}`
    );
    const data = await response.json();
    setResults(data.businesses);
  };
  useEffect(() => {
    searchApi("Mexican");
  }, []);
  return (
    <>
      <Typography> test: {results.coordinates}</Typography>
      <Map
        height={300}
        defaultCenter={[37.734451, -79.354263]}
        defaultZoom={14}
      >
        <Marker width={50} anchor={[37.734451, -79.354263]} />
      </Map>
    </>
  );
};
export default Maps;
