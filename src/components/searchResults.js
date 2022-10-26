import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Map, Marker } from "pigeon-maps";
import Box from "@mui/material/Box";

const SearchResults = ({ food, title, setRestId }) => {
  const Navigate = useNavigate();

  const goToDetails = (id) => {
    setRestId(id);
    Navigate("/detail");
  };

  const goToMaps = (id) => {
    setRestId(id);
    Navigate("/map");
  };
  return (
    <>
      {food.length > 0 ? <Typography variant="h3">{title}</Typography> : <></>}

      <Grid container spacing={2} sx={{ pt: 2 }}>
        {food.map((value, index) => {
          return (
            <Grid key={index} item xs={6} md={2}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={value.image_url}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {value.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {value.location.address1}
                    <br />
                    {value.location.city}, {value.location.state}{" "}
                    {value.location.zip_code}
                  </Typography>
                  <Box
                    sx={{ mb: 2, mt: 2, display: "flex", alignItems: "center" }}
                  >
                    <Rating
                      defaultValue={value.rating}
                      precision={0.5}
                      readOnly
                      size="small"
                    ></Rating>
                    <Box sx={{ ml: 2, color: "dodgerblue" }}>
                      ({value.review_count})
                    </Box>
                  </Box>
                  <Map
                    height={150}
                    defaultCenter={[
                      value.coordinates.latitude,
                      value.coordinates.longitude,
                    ]}
                    defaultZoom={14}
                  >
                    <Marker
                      width={50}
                      anchor={[
                        value.coordinates.latitude,
                        value.coordinates.longitude,
                      ]}
                    />
                  </Map>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={(e) => goToDetails(value.id)}>
                    Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default SearchResults;
