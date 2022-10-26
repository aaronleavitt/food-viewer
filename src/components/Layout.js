import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  TextField,
  InputAdornment,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import SearchIcon from "@mui/icons-material/Search";
import Detail from "./pages/Detail";
import Mappy from "./pages/Mappy";
import Map from "./pages/Map";
import { Link } from "react-router-dom";

const Layout = () => {
  const [searchText, setSearchText] = useState("Foodie");
  const [results, setResults] = useState([]);
  const [restId, setRestId] = useState("Nothing $");
  // let mySearchTest = "i'm Here";

  const searchApi = async (term) => {
    const location = "24416";
    const response = await fetch(
      `/api/yelpSearch?term=${term}&location=${location}`
    );
    const data = await response.json();
    setResults(data.businesses);

    const responsebusiness = await fetch(`api/yelpBusinessDetail`);
    const databusiness = await responsebusiness.json();
    console.log(databusiness);
  };

  const doSearch = (e) => {
    setSearchText(e.target.value);
    searchApi(e.target.value);
  };

  useEffect(() => {
    searchApi("Mexican");
  }, []);

  return (
    <>
      <Paper sx={{ backgroundColor: "#eeeeee", pb: 2 }}>
        <BrowserRouter>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 3 }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <TextField
                    onKeyPress={(e) => {
                      if (e.key === "Enter") doSearch(e);
                    }}
                    label="Search"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Typography>
                <Link
                  to="/map"
                  style={{
                    mr: 10,
                    justifyContent: "center",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  <Button
                    sx={{ mr: 10, justifyContent: "center" }}
                    color="inherit"
                  >
                    Maps
                  </Button>
                </Link>
                <Link
                  to="/"
                  style={{
                    mr: 10,
                    justifyContent: "center",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  <Button color="inherit">Home</Button>
                </Link>
              </Toolbar>
            </AppBar>
          </Box>
          <Typography variant="6">
            Your search results for {searchText}
          </Typography>
          <Routes>
            <Route
              exact
              path="/"
              element={<Search searchResults={results} setRestId={setRestId} />}
            />
            <Route
              exact
              path="/search"
              element={<Search searchResults={results} setRestId={setRestId} />}
            />
            <Route exact path="/detail" element={<Detail restId={restId} />} />
            <Route exact path="/Mappy" element={<Mappy restId={restId} />} />
            <Route exact path="/Map" element={<Map restId={restId} />} />
          </Routes>
        </BrowserRouter>
      </Paper>
    </>
  );
};

export default Layout;
